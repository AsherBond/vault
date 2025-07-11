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
 * @interface SystemWriteConfigGroupPolicyApplicationRequest
 */
export interface SystemWriteConfigGroupPolicyApplicationRequest {
    /**
     * Configures how policies in groups should be applied, accepting 'within_namespace_hierarchy' (default) and 'any',which will allow policies to grant permissions in groups outside of those sharing a namespace hierarchy.
     * @type {string}
     * @memberof SystemWriteConfigGroupPolicyApplicationRequest
     */
    groupPolicyApplicationMode?: string;
}
/**
 * Check if a given object implements the SystemWriteConfigGroupPolicyApplicationRequest interface.
 */
export declare function instanceOfSystemWriteConfigGroupPolicyApplicationRequest(value: object): value is SystemWriteConfigGroupPolicyApplicationRequest;
export declare function SystemWriteConfigGroupPolicyApplicationRequestFromJSON(json: any): SystemWriteConfigGroupPolicyApplicationRequest;
export declare function SystemWriteConfigGroupPolicyApplicationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteConfigGroupPolicyApplicationRequest;
export declare function SystemWriteConfigGroupPolicyApplicationRequestToJSON(json: any): SystemWriteConfigGroupPolicyApplicationRequest;
export declare function SystemWriteConfigGroupPolicyApplicationRequestToJSONTyped(value?: SystemWriteConfigGroupPolicyApplicationRequest | null, ignoreDiscriminator?: boolean): any;
