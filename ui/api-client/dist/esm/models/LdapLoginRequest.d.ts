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
 * @interface LdapLoginRequest
 */
export interface LdapLoginRequest {
    /**
     * Password for this user.
     * @type {string}
     * @memberof LdapLoginRequest
     */
    password?: string;
}
/**
 * Check if a given object implements the LdapLoginRequest interface.
 */
export declare function instanceOfLdapLoginRequest(value: object): value is LdapLoginRequest;
export declare function LdapLoginRequestFromJSON(json: any): LdapLoginRequest;
export declare function LdapLoginRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LdapLoginRequest;
export declare function LdapLoginRequestToJSON(json: any): LdapLoginRequest;
export declare function LdapLoginRequestToJSONTyped(value?: LdapLoginRequest | null, ignoreDiscriminator?: boolean): any;
