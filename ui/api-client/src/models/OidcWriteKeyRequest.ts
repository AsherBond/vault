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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface OidcWriteKeyRequest
 */
export interface OidcWriteKeyRequest {
    /**
     * Signing algorithm to use. This will default to RS256.
     * @type {string}
     * @memberof OidcWriteKeyRequest
     */
    algorithm?: string;
    /**
     * Comma separated string or array of role client ids allowed to use this key for signing. If empty no roles are allowed. If "*" all roles are allowed.
     * @type {Array<string>}
     * @memberof OidcWriteKeyRequest
     */
    allowedClientIds?: Array<string>;
    /**
     * How often to generate a new keypair.
     * @type {string}
     * @memberof OidcWriteKeyRequest
     */
    rotationPeriod?: string;
    /**
     * Controls how long the public portion of a key will be available for verification after being rotated.
     * @type {string}
     * @memberof OidcWriteKeyRequest
     */
    verificationTtl?: string;
}

/**
 * Check if a given object implements the OidcWriteKeyRequest interface.
 */
export function instanceOfOidcWriteKeyRequest(value: object): value is OidcWriteKeyRequest {
    return true;
}

export function OidcWriteKeyRequestFromJSON(json: any): OidcWriteKeyRequest {
    return OidcWriteKeyRequestFromJSONTyped(json, false);
}

export function OidcWriteKeyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): OidcWriteKeyRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'algorithm': json['algorithm'] == null ? undefined : json['algorithm'],
        'allowedClientIds': json['allowed_client_ids'] == null ? undefined : json['allowed_client_ids'],
        'rotationPeriod': json['rotation_period'] == null ? undefined : json['rotation_period'],
        'verificationTtl': json['verification_ttl'] == null ? undefined : json['verification_ttl'],
    };
}

export function OidcWriteKeyRequestToJSON(json: any): OidcWriteKeyRequest {
    return OidcWriteKeyRequestToJSONTyped(json, false);
}

export function OidcWriteKeyRequestToJSONTyped(value?: OidcWriteKeyRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'algorithm': value['algorithm'],
        'allowed_client_ids': value['allowedClientIds'],
        'rotation_period': value['rotationPeriod'],
        'verification_ttl': value['verificationTtl'],
    };
}

