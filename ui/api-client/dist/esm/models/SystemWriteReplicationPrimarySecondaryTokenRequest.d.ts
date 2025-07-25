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
 * @interface SystemWriteReplicationPrimarySecondaryTokenRequest
 */
export interface SystemWriteReplicationPrimarySecondaryTokenRequest {
    /**
     * An opaque identifier that can be used to identify and revoke a secondary cluster's access later.
     * @type {string}
     * @memberof SystemWriteReplicationPrimarySecondaryTokenRequest
     */
    id?: string;
    /**
     * A base64-encoded public key generated by the secondary cluster.
     * @type {string}
     * @memberof SystemWriteReplicationPrimarySecondaryTokenRequest
     */
    secondaryPublicKey?: string;
    /**
     * The TTL to use for the secondary activation token. Defaults to 30 minutes.
     * @type {string}
     * @memberof SystemWriteReplicationPrimarySecondaryTokenRequest
     */
    ttl?: string;
}
/**
 * Check if a given object implements the SystemWriteReplicationPrimarySecondaryTokenRequest interface.
 */
export declare function instanceOfSystemWriteReplicationPrimarySecondaryTokenRequest(value: object): value is SystemWriteReplicationPrimarySecondaryTokenRequest;
export declare function SystemWriteReplicationPrimarySecondaryTokenRequestFromJSON(json: any): SystemWriteReplicationPrimarySecondaryTokenRequest;
export declare function SystemWriteReplicationPrimarySecondaryTokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteReplicationPrimarySecondaryTokenRequest;
export declare function SystemWriteReplicationPrimarySecondaryTokenRequestToJSON(json: any): SystemWriteReplicationPrimarySecondaryTokenRequest;
export declare function SystemWriteReplicationPrimarySecondaryTokenRequestToJSONTyped(value?: SystemWriteReplicationPrimarySecondaryTokenRequest | null, ignoreDiscriminator?: boolean): any;
