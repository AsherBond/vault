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
 * @interface SystemWriteMfaMethodDuoNameRequest
 */
export interface SystemWriteMfaMethodDuoNameRequest {
    /**
     * API host name for Duo.
     * @type {string}
     * @memberof SystemWriteMfaMethodDuoNameRequest
     */
    apiHostname?: string;
    /**
     * Integration key for Duo.
     * @type {string}
     * @memberof SystemWriteMfaMethodDuoNameRequest
     */
    integrationKey?: string;
    /**
     * The mount to tie this method to for use in automatic mappings. The mapping will use the Name field of Aliases associated with this mount as the username in the mapping.
     * @type {string}
     * @memberof SystemWriteMfaMethodDuoNameRequest
     */
    mountAccessor?: string;
    /**
     * Push information for Duo.
     * @type {string}
     * @memberof SystemWriteMfaMethodDuoNameRequest
     */
    pushInfo?: string;
    /**
     * Secret key for Duo.
     * @type {string}
     * @memberof SystemWriteMfaMethodDuoNameRequest
     */
    secretKey?: string;
    /**
     * If true, the user is reminded to use the passcode upon MFA validation. This option does not enforce using the passcode. Defaults to false.
     * @type {boolean}
     * @memberof SystemWriteMfaMethodDuoNameRequest
     */
    usePasscode?: boolean;
    /**
     * A format string for mapping Identity names to MFA method names. Values to subtitute should be placed in {{}}. For example, "{{alias.name}}@example.com". Currently-supported mappings: alias.name: The name returned by the mount configured via the mount_accessor parameter If blank, the Alias's name field will be used as-is.
     * @type {string}
     * @memberof SystemWriteMfaMethodDuoNameRequest
     */
    usernameFormat?: string;
}

/**
 * Check if a given object implements the SystemWriteMfaMethodDuoNameRequest interface.
 */
export function instanceOfSystemWriteMfaMethodDuoNameRequest(value: object): value is SystemWriteMfaMethodDuoNameRequest {
    return true;
}

export function SystemWriteMfaMethodDuoNameRequestFromJSON(json: any): SystemWriteMfaMethodDuoNameRequest {
    return SystemWriteMfaMethodDuoNameRequestFromJSONTyped(json, false);
}

export function SystemWriteMfaMethodDuoNameRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteMfaMethodDuoNameRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'apiHostname': json['api_hostname'] == null ? undefined : json['api_hostname'],
        'integrationKey': json['integration_key'] == null ? undefined : json['integration_key'],
        'mountAccessor': json['mount_accessor'] == null ? undefined : json['mount_accessor'],
        'pushInfo': json['push_info'] == null ? undefined : json['push_info'],
        'secretKey': json['secret_key'] == null ? undefined : json['secret_key'],
        'usePasscode': json['use_passcode'] == null ? undefined : json['use_passcode'],
        'usernameFormat': json['username_format'] == null ? undefined : json['username_format'],
    };
}

export function SystemWriteMfaMethodDuoNameRequestToJSON(json: any): SystemWriteMfaMethodDuoNameRequest {
    return SystemWriteMfaMethodDuoNameRequestToJSONTyped(json, false);
}

export function SystemWriteMfaMethodDuoNameRequestToJSONTyped(value?: SystemWriteMfaMethodDuoNameRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'api_hostname': value['apiHostname'],
        'integration_key': value['integrationKey'],
        'mount_accessor': value['mountAccessor'],
        'push_info': value['pushInfo'],
        'secret_key': value['secretKey'],
        'use_passcode': value['usePasscode'],
        'username_format': value['usernameFormat'],
    };
}

