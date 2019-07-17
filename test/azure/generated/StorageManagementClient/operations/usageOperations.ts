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
import * as Models from "../models";
import * as Mappers from "../models/usageOperationsMappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClientContext } from "../storageManagementClientContext";

/** Class representing a UsageOperations. */
export class UsageOperations {
  private readonly client: StorageManagementClientContext;

  /**
   * Create a UsageOperations.
   * @param {StorageManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorageManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the current usage count and the limit for the resources under the subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsageListResponse>
   */
  list(options?: coreHttp.RequestOptionsBase): Promise<Models.UsageListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: coreHttp.ServiceCallback<Models.UsageListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.UsageListResult>): void;
  list(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.UsageListResult>, callback?: coreHttp.ServiceCallback<Models.UsageListResult>): Promise<Models.UsageListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.UsageListResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const listOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Storage/usages",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UsageListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
