/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/queriesMappers";
import * as Parameters from "../models/parameters";
import { AutoRestUrlMutliCollectionFormatTestServiceContext } from "../autoRestUrlMutliCollectionFormatTestServiceContext";

/** Class representing a Queries. */
export class Queries {
  private readonly client: AutoRestUrlMutliCollectionFormatTestServiceContext;

  /**
   * Create a Queries.
   * @param {AutoRestUrlMutliCollectionFormatTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestUrlMutliCollectionFormatTestServiceContext) {
    this.client = client;
  }

  /**
   * Get a null array of string using the multi-array format
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  arrayStringMultiNull(options?: Models.QueriesArrayStringMultiNullOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  arrayStringMultiNull(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  arrayStringMultiNull(options: Models.QueriesArrayStringMultiNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  arrayStringMultiNull(options?: Models.QueriesArrayStringMultiNullOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      arrayStringMultiNullOperationSpec,
      callback);
  }

  /**
   * Get an empty array [] of string using the multi-array format
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  arrayStringMultiEmpty(options?: Models.QueriesArrayStringMultiEmptyOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  arrayStringMultiEmpty(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  arrayStringMultiEmpty(options: Models.QueriesArrayStringMultiEmptyOptionalParams, callback: msRest.ServiceCallback<void>): void;
  arrayStringMultiEmpty(options?: Models.QueriesArrayStringMultiEmptyOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      arrayStringMultiEmptyOperationSpec,
      callback);
  }

  /**
   * Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the
   * mult-array format
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  arrayStringMultiValid(options?: Models.QueriesArrayStringMultiValidOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  arrayStringMultiValid(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  arrayStringMultiValid(options: Models.QueriesArrayStringMultiValidOptionalParams, callback: msRest.ServiceCallback<void>): void;
  arrayStringMultiValid(options?: Models.QueriesArrayStringMultiValidOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      arrayStringMultiValidOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const arrayStringMultiNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/array/multi/string/null",
  queryParameters: [
    Parameters.arrayQuery
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const arrayStringMultiEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/array/multi/string/empty",
  queryParameters: [
    Parameters.arrayQuery
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const arrayStringMultiValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/array/multi/string/valid",
  queryParameters: [
    Parameters.arrayQuery
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
