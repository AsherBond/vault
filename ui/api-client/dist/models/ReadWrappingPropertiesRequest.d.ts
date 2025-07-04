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
 * @interface ReadWrappingPropertiesRequest
 */
export interface ReadWrappingPropertiesRequest {
    /**
     *
     * @type {string}
     * @memberof ReadWrappingPropertiesRequest
     */
    token?: string;
}
/**
 * Check if a given object implements the ReadWrappingPropertiesRequest interface.
 */
export declare function instanceOfReadWrappingPropertiesRequest(value: object): value is ReadWrappingPropertiesRequest;
export declare function ReadWrappingPropertiesRequestFromJSON(json: any): ReadWrappingPropertiesRequest;
export declare function ReadWrappingPropertiesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadWrappingPropertiesRequest;
export declare function ReadWrappingPropertiesRequestToJSON(json: any): ReadWrappingPropertiesRequest;
export declare function ReadWrappingPropertiesRequestToJSONTyped(value?: ReadWrappingPropertiesRequest | null, ignoreDiscriminator?: boolean): any;
