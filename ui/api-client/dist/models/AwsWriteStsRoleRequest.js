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
exports.instanceOfAwsWriteStsRoleRequest = instanceOfAwsWriteStsRoleRequest;
exports.AwsWriteStsRoleRequestFromJSON = AwsWriteStsRoleRequestFromJSON;
exports.AwsWriteStsRoleRequestFromJSONTyped = AwsWriteStsRoleRequestFromJSONTyped;
exports.AwsWriteStsRoleRequestToJSON = AwsWriteStsRoleRequestToJSON;
exports.AwsWriteStsRoleRequestToJSONTyped = AwsWriteStsRoleRequestToJSONTyped;
/**
 * Check if a given object implements the AwsWriteStsRoleRequest interface.
 */
function instanceOfAwsWriteStsRoleRequest(value) {
    return true;
}
function AwsWriteStsRoleRequestFromJSON(json) {
    return AwsWriteStsRoleRequestFromJSONTyped(json, false);
}
function AwsWriteStsRoleRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'externalId': json['external_id'] == null ? undefined : json['external_id'],
        'stsRole': json['sts_role'] == null ? undefined : json['sts_role'],
    };
}
function AwsWriteStsRoleRequestToJSON(json) {
    return AwsWriteStsRoleRequestToJSONTyped(json, false);
}
function AwsWriteStsRoleRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'external_id': value['externalId'],
        'sts_role': value['stsRole'],
    };
}
