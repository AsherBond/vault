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
 * @interface DatabaseWriteRoleRequest
 */
export interface DatabaseWriteRoleRequest {
    /**
     * Specifies the database statements executed to create and configure a user. See the plugin's API page for more information on support and formatting for this parameter.
     * @type {Array<string>}
     * @memberof DatabaseWriteRoleRequest
     */
    creationStatements?: Array<string>;
    /**
     * The configuration for the given credential_type.
     * @type {object}
     * @memberof DatabaseWriteRoleRequest
     */
    credentialConfig?: object;
    /**
     * The type of credential to manage. Options include: 'password', 'rsa_private_key'. Defaults to 'password'.
     * @type {string}
     * @memberof DatabaseWriteRoleRequest
     */
    credentialType?: string;
    /**
     * Name of the database this role acts on.
     * @type {string}
     * @memberof DatabaseWriteRoleRequest
     */
    dbName?: string;
    /**
     * Default ttl for role.
     * @type {string}
     * @memberof DatabaseWriteRoleRequest
     */
    defaultTtl?: string;
    /**
     * Maximum time a credential is valid for
     * @type {string}
     * @memberof DatabaseWriteRoleRequest
     */
    maxTtl?: string;
    /**
     * Specifies the database statements to be executed to renew a user. Not every plugin type will support this functionality. See the plugin's API page for more information on support and formatting for this parameter.
     * @type {Array<string>}
     * @memberof DatabaseWriteRoleRequest
     */
    renewStatements?: Array<string>;
    /**
     * Specifies the database statements to be executed to revoke a user. See the plugin's API page for more information on support and formatting for this parameter.
     * @type {Array<string>}
     * @memberof DatabaseWriteRoleRequest
     */
    revocationStatements?: Array<string>;
    /**
     * Specifies the database statements to be executed rollback a create operation in the event of an error. Not every plugin type will support this functionality. See the plugin's API page for more information on support and formatting for this parameter.
     * @type {Array<string>}
     * @memberof DatabaseWriteRoleRequest
     */
    rollbackStatements?: Array<string>;
}

/**
 * Check if a given object implements the DatabaseWriteRoleRequest interface.
 */
export function instanceOfDatabaseWriteRoleRequest(value: object): value is DatabaseWriteRoleRequest {
    return true;
}

export function DatabaseWriteRoleRequestFromJSON(json: any): DatabaseWriteRoleRequest {
    return DatabaseWriteRoleRequestFromJSONTyped(json, false);
}

export function DatabaseWriteRoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatabaseWriteRoleRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'creationStatements': json['creation_statements'] == null ? undefined : json['creation_statements'],
        'credentialConfig': json['credential_config'] == null ? undefined : json['credential_config'],
        'credentialType': json['credential_type'] == null ? undefined : json['credential_type'],
        'dbName': json['db_name'] == null ? undefined : json['db_name'],
        'defaultTtl': json['default_ttl'] == null ? undefined : json['default_ttl'],
        'maxTtl': json['max_ttl'] == null ? undefined : json['max_ttl'],
        'renewStatements': json['renew_statements'] == null ? undefined : json['renew_statements'],
        'revocationStatements': json['revocation_statements'] == null ? undefined : json['revocation_statements'],
        'rollbackStatements': json['rollback_statements'] == null ? undefined : json['rollback_statements'],
    };
}

export function DatabaseWriteRoleRequestToJSON(json: any): DatabaseWriteRoleRequest {
    return DatabaseWriteRoleRequestToJSONTyped(json, false);
}

export function DatabaseWriteRoleRequestToJSONTyped(value?: DatabaseWriteRoleRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'creation_statements': value['creationStatements'],
        'credential_config': value['credentialConfig'],
        'credential_type': value['credentialType'],
        'db_name': value['dbName'],
        'default_ttl': value['defaultTtl'],
        'max_ttl': value['maxTtl'],
        'renew_statements': value['renewStatements'],
        'revocation_statements': value['revocationStatements'],
        'rollback_statements': value['rollbackStatements'],
    };
}

