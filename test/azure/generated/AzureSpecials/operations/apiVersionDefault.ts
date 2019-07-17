/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/apiVersionDefaultMappers";
import * as Parameters from "../models/parameters";
import { AutoRestAzureSpecialParametersTestClientContext } from "../autoRestAzureSpecialParametersTestClientContext";

/** Class representing a ApiVersionDefault. */
export class ApiVersionDefault {
  private readonly client: AutoRestAzureSpecialParametersTestClientContext;

  /**
   * Create a ApiVersionDefault.
   * @param {AutoRestAzureSpecialParametersTestClientContext} client Reference to the service client.
   */
  constructor(client: AutoRestAzureSpecialParametersTestClientContext) {
    this.client = client;
  }

  /**
   * GET method with api-version modeled in global settings.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  getMethodGlobalValid(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  getMethodGlobalValid(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getMethodGlobalValid(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getMethodGlobalValid(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getMethodGlobalValidOperationSpec,
      callback);
  }

  /**
   * GET method with api-version modeled in global settings.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  getMethodGlobalNotProvidedValid(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  getMethodGlobalNotProvidedValid(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getMethodGlobalNotProvidedValid(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getMethodGlobalNotProvidedValid(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getMethodGlobalNotProvidedValidOperationSpec,
      callback);
  }

  /**
   * GET method with api-version modeled in global settings.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  getPathGlobalValid(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  getPathGlobalValid(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getPathGlobalValid(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getPathGlobalValid(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getPathGlobalValidOperationSpec,
      callback);
  }

  /**
   * GET method with api-version modeled in global settings.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  getSwaggerGlobalValid(options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  getSwaggerGlobalValid(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getSwaggerGlobalValid(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getSwaggerGlobalValid(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getSwaggerGlobalValidOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const getMethodGlobalValidOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/method/string/none/query/global/2015-07-01-preview",
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getMethodGlobalNotProvidedValidOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/method/string/none/query/globalNotProvided/2015-07-01-preview",
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getPathGlobalValidOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/path/string/none/query/global/2015-07-01-preview",
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getSwaggerGlobalValidOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "azurespecials/apiVersion/swagger/string/none/query/global/2015-07-01-preview",
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
