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
exports.instanceOfInitializeRequest = instanceOfInitializeRequest;
exports.InitializeRequestFromJSON = InitializeRequestFromJSON;
exports.InitializeRequestFromJSONTyped = InitializeRequestFromJSONTyped;
exports.InitializeRequestToJSON = InitializeRequestToJSON;
exports.InitializeRequestToJSONTyped = InitializeRequestToJSONTyped;
/**
 * Check if a given object implements the InitializeRequest interface.
 */
function instanceOfInitializeRequest(value) {
    return true;
}
function InitializeRequestFromJSON(json) {
    return InitializeRequestFromJSONTyped(json, false);
}
function InitializeRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'pgpKeys': json['pgp_keys'] == null ? undefined : json['pgp_keys'],
        'recoveryPgpKeys': json['recovery_pgp_keys'] == null ? undefined : json['recovery_pgp_keys'],
        'recoveryShares': json['recovery_shares'] == null ? undefined : json['recovery_shares'],
        'recoveryThreshold': json['recovery_threshold'] == null ? undefined : json['recovery_threshold'],
        'rootTokenPgpKey': json['root_token_pgp_key'] == null ? undefined : json['root_token_pgp_key'],
        'secretShares': json['secret_shares'] == null ? undefined : json['secret_shares'],
        'secretThreshold': json['secret_threshold'] == null ? undefined : json['secret_threshold'],
        'storedShares': json['stored_shares'] == null ? undefined : json['stored_shares'],
    };
}
function InitializeRequestToJSON(json) {
    return InitializeRequestToJSONTyped(json, false);
}
function InitializeRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'pgp_keys': value['pgpKeys'],
        'recovery_pgp_keys': value['recoveryPgpKeys'],
        'recovery_shares': value['recoveryShares'],
        'recovery_threshold': value['recoveryThreshold'],
        'root_token_pgp_key': value['rootTokenPgpKey'],
        'secret_shares': value['secretShares'],
        'secret_threshold': value['secretThreshold'],
        'stored_shares': value['storedShares'],
    };
}
