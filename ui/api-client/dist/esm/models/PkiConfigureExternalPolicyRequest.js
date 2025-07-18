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
/**
 * Check if a given object implements the PkiConfigureExternalPolicyRequest interface.
 */
export function instanceOfPkiConfigureExternalPolicyRequest(value) {
    return true;
}
export function PkiConfigureExternalPolicyRequestFromJSON(json) {
    return PkiConfigureExternalPolicyRequestFromJSONTyped(json, false);
}
export function PkiConfigureExternalPolicyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'entityJmespath': json['entity_jmespath'] == null ? undefined : json['entity_jmespath'],
        'externalServiceUrl': json['external_service_url'] == null ? undefined : json['external_service_url'],
        'groupJmespath': json['group_jmespath'] == null ? undefined : json['group_jmespath'],
        'timeout': json['timeout'] == null ? undefined : json['timeout'],
        'trustedCa': json['trusted_ca'] == null ? undefined : json['trusted_ca'],
        'trustedLeafCertificateBundle': json['trusted_leaf_certificate_bundle'] == null ? undefined : json['trusted_leaf_certificate_bundle'],
        'vaultClientCertBundle': json['vault_client_cert_bundle'] == null ? undefined : json['vault_client_cert_bundle'],
    };
}
export function PkiConfigureExternalPolicyRequestToJSON(json) {
    return PkiConfigureExternalPolicyRequestToJSONTyped(json, false);
}
export function PkiConfigureExternalPolicyRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'enabled': value['enabled'],
        'entity_jmespath': value['entityJmespath'],
        'external_service_url': value['externalServiceUrl'],
        'group_jmespath': value['groupJmespath'],
        'timeout': value['timeout'],
        'trusted_ca': value['trustedCa'],
        'trusted_leaf_certificate_bundle': value['trustedLeafCertificateBundle'],
        'vault_client_cert_bundle': value['vaultClientCertBundle'],
    };
}
