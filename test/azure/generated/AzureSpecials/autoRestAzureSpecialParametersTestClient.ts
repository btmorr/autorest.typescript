/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestAzureSpecialParametersTestClientContext } from "./autoRestAzureSpecialParametersTestClientContext";


class AutoRestAzureSpecialParametersTestClient extends AutoRestAzureSpecialParametersTestClientContext {
  // Operation groups
  xMsClientRequestId: operations.XMsClientRequestId;
  subscriptionInCredentials: operations.SubscriptionInCredentials;
  subscriptionInMethod: operations.SubscriptionInMethod;
  apiVersionDefault: operations.ApiVersionDefault;
  apiVersionLocal: operations.ApiVersionLocal;
  skipUrlEncoding: operations.SkipUrlEncoding;
  odata: operations.Odata;
  header: operations.Header;

  /**
   * Initializes a new instance of the AutoRestAzureSpecialParametersTestClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The subscription id, which appears in the path, always modeled in
   * credentials. The value is always '1234-5678-9012-3456'
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.AutoRestAzureSpecialParametersTestClientOptions) {
    super(credentials, subscriptionId, options);
    this.xMsClientRequestId = new operations.XMsClientRequestId(this);
    this.subscriptionInCredentials = new operations.SubscriptionInCredentials(this);
    this.subscriptionInMethod = new operations.SubscriptionInMethod(this);
    this.apiVersionDefault = new operations.ApiVersionDefault(this);
    this.apiVersionLocal = new operations.ApiVersionLocal(this);
    this.skipUrlEncoding = new operations.SkipUrlEncoding(this);
    this.odata = new operations.Odata(this);
    this.header = new operations.Header(this);
  }
}

// Operation Specifications

export {
  AutoRestAzureSpecialParametersTestClient,
  AutoRestAzureSpecialParametersTestClientContext,
  Models as AutoRestAzureSpecialParametersTestModels,
  Mappers as AutoRestAzureSpecialParametersTestMappers
};
export * from "./operations";
