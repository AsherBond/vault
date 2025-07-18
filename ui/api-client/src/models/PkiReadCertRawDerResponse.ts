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
 * @interface PkiReadCertRawDerResponse
 */
export interface PkiReadCertRawDerResponse {
    /**
     * Issuing CA Chain
     * @type {string}
     * @memberof PkiReadCertRawDerResponse
     */
    caChain?: string;
    /**
     * Certificate
     * @type {string}
     * @memberof PkiReadCertRawDerResponse
     */
    certificate?: string;
    /**
     * ID of the issuer
     * @type {string}
     * @memberof PkiReadCertRawDerResponse
     */
    issuerId?: string;
    /**
     * Revocation time
     * @type {number}
     * @memberof PkiReadCertRawDerResponse
     */
    revocationTime?: number;
    /**
     * Revocation time RFC 3339 formatted
     * @type {string}
     * @memberof PkiReadCertRawDerResponse
     */
    revocationTimeRfc3339?: string;
}

/**
 * Check if a given object implements the PkiReadCertRawDerResponse interface.
 */
export function instanceOfPkiReadCertRawDerResponse(value: object): value is PkiReadCertRawDerResponse {
    return true;
}

export function PkiReadCertRawDerResponseFromJSON(json: any): PkiReadCertRawDerResponse {
    return PkiReadCertRawDerResponseFromJSONTyped(json, false);
}

export function PkiReadCertRawDerResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiReadCertRawDerResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'caChain': json['ca_chain'] == null ? undefined : json['ca_chain'],
        'certificate': json['certificate'] == null ? undefined : json['certificate'],
        'issuerId': json['issuer_id'] == null ? undefined : json['issuer_id'],
        'revocationTime': json['revocation_time'] == null ? undefined : json['revocation_time'],
        'revocationTimeRfc3339': json['revocation_time_rfc3339'] == null ? undefined : json['revocation_time_rfc3339'],
    };
}

export function PkiReadCertRawDerResponseToJSON(json: any): PkiReadCertRawDerResponse {
    return PkiReadCertRawDerResponseToJSONTyped(json, false);
}

export function PkiReadCertRawDerResponseToJSONTyped(value?: PkiReadCertRawDerResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ca_chain': value['caChain'],
        'certificate': value['certificate'],
        'issuer_id': value['issuerId'],
        'revocation_time': value['revocationTime'],
        'revocation_time_rfc3339': value['revocationTimeRfc3339'],
    };
}

