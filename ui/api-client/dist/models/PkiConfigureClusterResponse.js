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
exports.instanceOfPkiConfigureClusterResponse = instanceOfPkiConfigureClusterResponse;
exports.PkiConfigureClusterResponseFromJSON = PkiConfigureClusterResponseFromJSON;
exports.PkiConfigureClusterResponseFromJSONTyped = PkiConfigureClusterResponseFromJSONTyped;
exports.PkiConfigureClusterResponseToJSON = PkiConfigureClusterResponseToJSON;
exports.PkiConfigureClusterResponseToJSONTyped = PkiConfigureClusterResponseToJSONTyped;
/**
 * Check if a given object implements the PkiConfigureClusterResponse interface.
 */
function instanceOfPkiConfigureClusterResponse(value) {
    return true;
}
function PkiConfigureClusterResponseFromJSON(json) {
    return PkiConfigureClusterResponseFromJSONTyped(json, false);
}
function PkiConfigureClusterResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'aiaPath': json['aia_path'] == null ? undefined : json['aia_path'],
        'path': json['path'] == null ? undefined : json['path'],
    };
}
function PkiConfigureClusterResponseToJSON(json) {
    return PkiConfigureClusterResponseToJSONTyped(json, false);
}
function PkiConfigureClusterResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'aia_path': value['aiaPath'],
        'path': value['path'],
    };
}
