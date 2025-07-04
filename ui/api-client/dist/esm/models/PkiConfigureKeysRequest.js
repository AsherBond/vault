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
/**
 * Check if a given object implements the PkiConfigureKeysRequest interface.
 */
export function instanceOfPkiConfigureKeysRequest(value) {
    return true;
}
export function PkiConfigureKeysRequestFromJSON(json) {
    return PkiConfigureKeysRequestFromJSONTyped(json, false);
}
export function PkiConfigureKeysRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        '_default': json['default'] == null ? undefined : json['default'],
    };
}
export function PkiConfigureKeysRequestToJSON(json) {
    return PkiConfigureKeysRequestToJSONTyped(json, false);
}
export function PkiConfigureKeysRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'default': value['_default'],
    };
}
