/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as coreHttp from "@azure/core-http";
import * as coreArm from "@azure/core-arm";

const packageName = "";
const packageVersion = "";

export class AutoRestLongRunningOperationTestServiceContext extends coreArm.AzureServiceClient {
  credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials;

  /**
   * Initializes a new instance of the AutoRestLongRunningOperationTestService class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param [options] The parameter options
   */
  constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, options?: Models.AutoRestLongRunningOperationTestServiceOptions) {
    if (credentials == undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }

    if (!options) {
      options = {};
    }
    if(!options.userAgent) {
      const defaultUserAgent = coreArm.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.acceptLanguage = 'en-US';
    this.longRunningOperationRetryTimeout = 30;
    this.baseUri = options.baseUri || this.baseUri || "http://localhost:3000";
    this.requestContentType = "application/json; charset=utf-8";
    this.credentials = credentials;

    if(options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if(options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
  }
}
