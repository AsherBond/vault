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
 *
 * @export
 * @interface MfaCreateOktaMethodRequest
 */
export interface MfaCreateOktaMethodRequest {
    /**
     * Okta API key.
     * @type {string}
     * @memberof MfaCreateOktaMethodRequest
     */
    apiToken?: string;
    /**
     * The base domain to use for the Okta API. When not specified in the configuration, "okta.com" is used.
     * @type {string}
     * @memberof MfaCreateOktaMethodRequest
     */
    baseUrl?: string;
    /**
     * The unique name identifier for this MFA method.
     * @type {string}
     * @memberof MfaCreateOktaMethodRequest
     */
    methodName?: string;
    /**
     * Name of the organization to be used in the Okta API.
     * @type {string}
     * @memberof MfaCreateOktaMethodRequest
     */
    orgName?: string;
    /**
     * If true, the username will only match the primary email for the account. Defaults to false.
     * @type {boolean}
     * @memberof MfaCreateOktaMethodRequest
     */
    primaryEmail?: boolean;
    /**
     * (DEPRECATED) Use base_url instead.
     * @type {boolean}
     * @memberof MfaCreateOktaMethodRequest
     */
    production?: boolean;
    /**
     * A template string for mapping Identity names to MFA method names. Values to substitute should be placed in {{}}. For example, "{{entity.name}}@example.com". If blank, the Entity's name field will be used as-is.
     * @type {string}
     * @memberof MfaCreateOktaMethodRequest
     */
    usernameFormat?: string;
}
/**
 * Check if a given object implements the MfaCreateOktaMethodRequest interface.
 */
export declare function instanceOfMfaCreateOktaMethodRequest(value: object): value is MfaCreateOktaMethodRequest;
export declare function MfaCreateOktaMethodRequestFromJSON(json: any): MfaCreateOktaMethodRequest;
export declare function MfaCreateOktaMethodRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MfaCreateOktaMethodRequest;
export declare function MfaCreateOktaMethodRequestToJSON(json: any): MfaCreateOktaMethodRequest;
export declare function MfaCreateOktaMethodRequestToJSONTyped(value?: MfaCreateOktaMethodRequest | null, ignoreDiscriminator?: boolean): any;
