"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.21.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfTokenCreateAgainstRoleRequest = instanceOfTokenCreateAgainstRoleRequest;
exports.TokenCreateAgainstRoleRequestFromJSON = TokenCreateAgainstRoleRequestFromJSON;
exports.TokenCreateAgainstRoleRequestFromJSONTyped = TokenCreateAgainstRoleRequestFromJSONTyped;
exports.TokenCreateAgainstRoleRequestToJSON = TokenCreateAgainstRoleRequestToJSON;
exports.TokenCreateAgainstRoleRequestToJSONTyped = TokenCreateAgainstRoleRequestToJSONTyped;
/**
 * Check if a given object implements the TokenCreateAgainstRoleRequest interface.
 */
function instanceOfTokenCreateAgainstRoleRequest(value) {
    return true;
}
function TokenCreateAgainstRoleRequestFromJSON(json) {
    return TokenCreateAgainstRoleRequestFromJSONTyped(json, false);
}
function TokenCreateAgainstRoleRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'displayName': json['display_name'] == null ? undefined : json['display_name'],
        'entityAlias': json['entity_alias'] == null ? undefined : json['entity_alias'],
        'explicitMaxTtl': json['explicit_max_ttl'] == null ? undefined : json['explicit_max_ttl'],
        'id': json['id'] == null ? undefined : json['id'],
        'lease': json['lease'] == null ? undefined : json['lease'],
        'meta': json['meta'] == null ? undefined : json['meta'],
        'noDefaultPolicy': json['no_default_policy'] == null ? undefined : json['no_default_policy'],
        'noParent': json['no_parent'] == null ? undefined : json['no_parent'],
        'numUses': json['num_uses'] == null ? undefined : json['num_uses'],
        'period': json['period'] == null ? undefined : json['period'],
        'policies': json['policies'] == null ? undefined : json['policies'],
        'renewable': json['renewable'] == null ? undefined : json['renewable'],
        'ttl': json['ttl'] == null ? undefined : json['ttl'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}
function TokenCreateAgainstRoleRequestToJSON(json) {
    return TokenCreateAgainstRoleRequestToJSONTyped(json, false);
}
function TokenCreateAgainstRoleRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'display_name': value['displayName'],
        'entity_alias': value['entityAlias'],
        'explicit_max_ttl': value['explicitMaxTtl'],
        'id': value['id'],
        'lease': value['lease'],
        'meta': value['meta'],
        'no_default_policy': value['noDefaultPolicy'],
        'no_parent': value['noParent'],
        'num_uses': value['numUses'],
        'period': value['period'],
        'policies': value['policies'],
        'renewable': value['renewable'],
        'ttl': value['ttl'],
        'type': value['type'],
    };
}
