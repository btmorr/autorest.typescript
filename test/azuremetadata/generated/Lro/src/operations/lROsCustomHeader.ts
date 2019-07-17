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
import * as coreArm from "@azure/core-arm";
import * as Models from "../models";
import * as Mappers from "../models/lROsCustomHeaderMappers";
import * as Parameters from "../models/parameters";
import { AutoRestLongRunningOperationTestServiceContext } from "../autoRestLongRunningOperationTestServiceContext";

/** Class representing a LROsCustomHeader. */
export class LROsCustomHeader {
  private readonly client: AutoRestLongRunningOperationTestServiceContext;

  /**
   * Create a LROsCustomHeader.
   * @param {AutoRestLongRunningOperationTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestLongRunningOperationTestServiceContext) {
    this.client = client;
  }

  /**
   * x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all
   * requests. Long running put request, service returns a 200 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the
   * Azure-AsyncOperation header for operation status
   * @param [options] The optional parameters
   * @returns Promise<Models.LROsCustomHeaderPutAsyncRetrySucceededResponse>
   */
  putAsyncRetrySucceeded(options?: Models.LROsCustomHeaderPutAsyncRetrySucceededOptionalParams): Promise<Models.LROsCustomHeaderPutAsyncRetrySucceededResponse> {
    return this.beginPutAsyncRetrySucceeded(options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LROsCustomHeaderPutAsyncRetrySucceededResponse>;
  }

  /**
   * x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all
   * requests. Long running put request, service returns a 201 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns
   * a ‘200’ with ProvisioningState=’Succeeded’
   * @param [options] The optional parameters
   * @returns Promise<Models.LROsCustomHeaderPut201CreatingSucceeded200Response>
   */
  put201CreatingSucceeded200(options?: Models.LROsCustomHeaderPut201CreatingSucceeded200OptionalParams): Promise<Models.LROsCustomHeaderPut201CreatingSucceeded200Response> {
    return this.beginPut201CreatingSucceeded200(options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LROsCustomHeaderPut201CreatingSucceeded200Response>;
  }

  /**
   * x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all
   * requests. Long running post request, service returns a 202 to the initial request, with
   * 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success
   * @param [options] The optional parameters
   * @returns Promise<Models.LROsCustomHeaderPost202Retry200Response>
   */
  post202Retry200(options?: Models.LROsCustomHeaderPost202Retry200OptionalParams): Promise<Models.LROsCustomHeaderPost202Retry200Response> {
    return this.beginPost202Retry200(options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LROsCustomHeaderPost202Retry200Response>;
  }

  /**
   * x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all
   * requests. Long running post request, service returns a 202 to the initial request, with an
   * entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the
   * Azure-AsyncOperation header for operation status
   * @param [options] The optional parameters
   * @returns Promise<Models.LROsCustomHeaderPostAsyncRetrySucceededResponse>
   */
  postAsyncRetrySucceeded(options?: Models.LROsCustomHeaderPostAsyncRetrySucceededOptionalParams): Promise<Models.LROsCustomHeaderPostAsyncRetrySucceededResponse> {
    return this.beginPostAsyncRetrySucceeded(options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LROsCustomHeaderPostAsyncRetrySucceededResponse>;
  }

  /**
   * x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all
   * requests. Long running put request, service returns a 200 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the
   * Azure-AsyncOperation header for operation status
   * @param [options] The optional parameters
   * @returns Promise<coreArm.LROPoller>
   */
  beginPutAsyncRetrySucceeded(options?: Models.LROsCustomHeaderBeginPutAsyncRetrySucceededOptionalParams): Promise<coreArm.LROPoller> {
    return this.client.sendLRORequest(
      {
        options
      },
      beginPutAsyncRetrySucceededOperationSpec,
      options);
  }

  /**
   * x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all
   * requests. Long running put request, service returns a 201 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns
   * a ‘200’ with ProvisioningState=’Succeeded’
   * @param [options] The optional parameters
   * @returns Promise<coreArm.LROPoller>
   */
  beginPut201CreatingSucceeded200(options?: Models.LROsCustomHeaderBeginPut201CreatingSucceeded200OptionalParams): Promise<coreArm.LROPoller> {
    return this.client.sendLRORequest(
      {
        options
      },
      beginPut201CreatingSucceeded200OperationSpec,
      options);
  }

  /**
   * x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all
   * requests. Long running post request, service returns a 202 to the initial request, with
   * 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success
   * @param [options] The optional parameters
   * @returns Promise<coreArm.LROPoller>
   */
  beginPost202Retry200(options?: Models.LROsCustomHeaderBeginPost202Retry200OptionalParams): Promise<coreArm.LROPoller> {
    return this.client.sendLRORequest(
      {
        options
      },
      beginPost202Retry200OperationSpec,
      options);
  }

  /**
   * x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all
   * requests. Long running post request, service returns a 202 to the initial request, with an
   * entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the
   * Azure-AsyncOperation header for operation status
   * @param [options] The optional parameters
   * @returns Promise<coreArm.LROPoller>
   */
  beginPostAsyncRetrySucceeded(options?: Models.LROsCustomHeaderBeginPostAsyncRetrySucceededOptionalParams): Promise<coreArm.LROPoller> {
    return this.client.sendLRORequest(
      {
        options
      },
      beginPostAsyncRetrySucceededOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const beginPutAsyncRetrySucceededOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "lro/customheader/putasync/retry/succeeded",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "product"
    ],
    mapper: Mappers.Product
  },
  responses: {
    200: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LROsCustomHeaderPutAsyncRetrySucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginPut201CreatingSucceeded200OperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "lro/customheader/put/201/creating/succeeded/200",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "product"
    ],
    mapper: Mappers.Product
  },
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    201: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginPost202Retry200OperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "lro/customheader/post/202/retry/200",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "product"
    ],
    mapper: Mappers.Product
  },
  responses: {
    202: {
      headersMapper: Mappers.LROsCustomHeaderPost202Retry200Headers
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginPostAsyncRetrySucceededOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "lro/customheader/postasync/retry/succeeded",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "product"
    ],
    mapper: Mappers.Product
  },
  responses: {
    202: {
      headersMapper: Mappers.LROsCustomHeaderPostAsyncRetrySucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
