/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, click, findAll } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { GENERAL } from 'vault/tests/helpers/general-selectors';

module('Integration | Component | totp/key-form', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.store = this.owner.lookup('service:store');
  });

  test('it should save new key generated by Vault', async function (assert) {
    assert.expect(7);

    this.server.post('/totp/keys/test-key', (schema, req) => {
      assert.ok(true, 'Request made to save key');
      const payload = JSON.parse(req.requestBody);
      const expected = {
        account_name: 'test-account',
        algorithm: 'SHA1',
        digits: 6,
        exported: true,
        generate: true,
        issuer: 'test-issuer',
        key_size: 20,
        period: 30,
        qr_size: 200,
        skew: 1,
      };

      assert.deepEqual(
        payload,
        expected,
        'POST request made with correct properties when creating a key generated by Vault'
      );
    });

    this.model = this.store.createRecord('totp-key', { backend: 'totp', id: 'totp-test' });
    await render(hbs`
      <TotpEdit
        @mode="create"
        @model={{this.model}}
    />
    `);

    assert.dom('[data-test-secret-header]').hasText('Create a TOTP key', 'Form title renders');

    // check validation errors
    await click(GENERAL.submitButton);

    const validationErrors = findAll(GENERAL.inlineAlert);
    assert.dom(validationErrors[0]).hasText(`Name can't be blank.`, 'Validation messages are shown for name');
    assert
      .dom(validationErrors[1])
      .hasText(
        `Issuer can't be blank when when the key is generated by Vault.`,
        'Validation messages are shown for issuer'
      );
    assert
      .dom(validationErrors[2])
      .hasText(
        `Account name can't be blank when the key is generated by Vault.`,
        'Validation messages are shown for account name'
      );
    assert.dom(validationErrors[3]).hasText('There are 3 errors with this form.', 'Renders form error count');

    await fillIn('[data-test-input="name"]', 'test-key');
    await fillIn('[data-test-input="issuer"]', 'test-issuer');
    await fillIn('[data-test-input="accountName"]', 'test-account');

    await click(GENERAL.submitButton);
  });

  test('it should save new key that is not generated by Vault', async function (assert) {
    assert.expect(6);

    this.server.post('/totp/keys/test-key', (schema, req) => {
      assert.ok(true, 'Request made to save key');
      const payload = JSON.parse(req.requestBody);
      const expected = {
        algorithm: 'SHA1',
        digits: 6,
        generate: false,
        key: 'test-root-key',
        period: 30,
      };
      assert.deepEqual(
        payload,
        expected,
        'POST request made with correct properties when creating a key that is not generated by Vault'
      );
    });

    this.model = this.store.createRecord('totp-key', { backend: 'totp', id: 'totp-test' });

    await render(hbs`
      <TotpEdit
        @mode="create"
        @model={{this.model}}
    />
    `);

    assert.dom('[data-test-secret-header]').hasText('Create a TOTP key', 'Form title renders');

    // switch to non-generated form fields
    await click(GENERAL.radioByAttr('Other service'));

    // check validation errors
    await click(GENERAL.submitButton);

    const validationErrors = findAll(GENERAL.inlineAlert);
    assert.dom(validationErrors[0]).hasText(`Name can't be blank.`, 'Validation messages are shown for name');
    assert
      .dom(validationErrors[1])
      .hasText(
        `Key can't be blank if key is being passed from another service and the URL is empty.`,
        'Validation messages are shown for issuer'
      );
    assert.dom(validationErrors[2]).hasText('There are 2 errors with this form.', 'Renders form error count');

    await fillIn('[data-test-input="name"]', 'test-key');
    await fillIn('[data-test-input="key"]', 'test-root-key');

    await click(GENERAL.submitButton);
  });

  test('it should toggle groups according to generate', async function (assert) {
    assert.expect(4);

    this.model = this.store.createRecord('totp-key', { backend: 'totp', id: 'totp-test' });
    this.onSubmit = () => assert.ok(true, 'onSubmit callback fires on save success');

    await render(hbs`
      <TotpEdit
        @mode="create"
        @onSubmit={{this.onSubmit}}
        @model={{this.model}}
    />
    `);

    // check generated groups
    assert.dom(GENERAL.button('TOTP Code Options')).exists('Common group is shown');
    assert.dom(GENERAL.button('Provider Options')).exists('Generated exclusive group is shown');

    // switch to non-generated form fields
    await click(GENERAL.radioByAttr('Other service'));

    // check non generated groups
    assert.dom(GENERAL.button('TOTP Code Options')).exists('Common group is shown');
    assert.dom(GENERAL.button('Provider Options')).doesNotExist('Generated exclusive group is not shown');
  });
});
