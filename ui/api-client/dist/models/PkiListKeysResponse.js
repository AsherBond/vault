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
exports.instanceOfPkiListKeysResponse = instanceOfPkiListKeysResponse;
exports.PkiListKeysResponseFromJSON = PkiListKeysResponseFromJSON;
exports.PkiListKeysResponseFromJSONTyped = PkiListKeysResponseFromJSONTyped;
exports.PkiListKeysResponseToJSON = PkiListKeysResponseToJSON;
exports.PkiListKeysResponseToJSONTyped = PkiListKeysResponseToJSONTyped;
/**
 * Check if a given object implements the PkiListKeysResponse interface.
 */
function instanceOfPkiListKeysResponse(value) {
    return true;
}
function PkiListKeysResponseFromJSON(json) {
    return PkiListKeysResponseFromJSONTyped(json, false);
}
function PkiListKeysResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'keyInfo': json['key_info'] == null ? undefined : json['key_info'],
        'keys': json['keys'] == null ? undefined : json['keys'],
    };
}
function PkiListKeysResponseToJSON(json) {
    return PkiListKeysResponseToJSONTyped(json, false);
}
function PkiListKeysResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'key_info': value['keyInfo'],
        'keys': value['keys'],
    };
}
