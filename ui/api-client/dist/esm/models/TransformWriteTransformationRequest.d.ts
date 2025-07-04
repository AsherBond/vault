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
 * @interface TransformWriteTransformationRequest
 */
export interface TransformWriteTransformationRequest {
    /**
     * The set of roles allowed to perform this transformation.
     * @type {Array<string>}
     * @memberof TransformWriteTransformationRequest
     */
    allowedRoles?: Array<string>;
    /**
     * Specifies whether to use convergent tokenization, which produces consistent tokens given consistent plaintext and expiration inputs.
     * @type {boolean}
     * @memberof TransformWriteTransformationRequest
     */
    convergent?: boolean;
    /**
     * If false, deletion of this transform is prevented.
     * @type {boolean}
     * @memberof TransformWriteTransformationRequest
     */
    deletionAllowed?: boolean;
    /**
     * Specifies the mapping mode for stored tokenization values. 'default', the default is strongly recommended for high security. 'exportable' allows for all plaintexts to be decoded simultaneously in an emergency.
     * @type {string}
     * @memberof TransformWriteTransformationRequest
     */
    mappingMode?: string;
    /**
     * The character used to replace data when in masking mode
     * @type {string}
     * @memberof TransformWriteTransformationRequest
     */
    maskingCharacter?: string;
    /**
     * The store or stores which will contain tokenized state.
     * @type {Array<string>}
     * @memberof TransformWriteTransformationRequest
     */
    stores?: Array<string>;
    /**
     * The name of the template to use.
     * @type {string}
     * @memberof TransformWriteTransformationRequest
     */
    template?: string;
    /**
     * The source of where the tweak value comes from. Only valid when in FPE mode.
     * @type {string}
     * @memberof TransformWriteTransformationRequest
     */
    tweakSource?: string;
    /**
     * The type of transformation to perform.
     * @type {string}
     * @memberof TransformWriteTransformationRequest
     */
    type?: string;
}
/**
 * Check if a given object implements the TransformWriteTransformationRequest interface.
 */
export declare function instanceOfTransformWriteTransformationRequest(value: object): value is TransformWriteTransformationRequest;
export declare function TransformWriteTransformationRequestFromJSON(json: any): TransformWriteTransformationRequest;
export declare function TransformWriteTransformationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransformWriteTransformationRequest;
export declare function TransformWriteTransformationRequestToJSON(json: any): TransformWriteTransformationRequest;
export declare function TransformWriteTransformationRequestToJSONTyped(value?: TransformWriteTransformationRequest | null, ignoreDiscriminator?: boolean): any;
