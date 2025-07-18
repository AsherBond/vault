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
 * @interface RabbitMqConfigureLeaseRequest
 */
export interface RabbitMqConfigureLeaseRequest {
    /**
     * Duration after which the issued credentials should not be allowed to be renewed
     * @type {string}
     * @memberof RabbitMqConfigureLeaseRequest
     */
    maxTtl?: string;
    /**
     * Duration before which the issued credentials needs renewal
     * @type {string}
     * @memberof RabbitMqConfigureLeaseRequest
     */
    ttl?: string;
}

/**
 * Check if a given object implements the RabbitMqConfigureLeaseRequest interface.
 */
export function instanceOfRabbitMqConfigureLeaseRequest(value: object): value is RabbitMqConfigureLeaseRequest {
    return true;
}

export function RabbitMqConfigureLeaseRequestFromJSON(json: any): RabbitMqConfigureLeaseRequest {
    return RabbitMqConfigureLeaseRequestFromJSONTyped(json, false);
}

export function RabbitMqConfigureLeaseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RabbitMqConfigureLeaseRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'maxTtl': json['max_ttl'] == null ? undefined : json['max_ttl'],
        'ttl': json['ttl'] == null ? undefined : json['ttl'],
    };
}

export function RabbitMqConfigureLeaseRequestToJSON(json: any): RabbitMqConfigureLeaseRequest {
    return RabbitMqConfigureLeaseRequestToJSONTyped(json, false);
}

export function RabbitMqConfigureLeaseRequestToJSONTyped(value?: RabbitMqConfigureLeaseRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'max_ttl': value['maxTtl'],
        'ttl': value['ttl'],
    };
}

