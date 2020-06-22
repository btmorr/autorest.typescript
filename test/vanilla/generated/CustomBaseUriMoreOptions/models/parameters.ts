/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const dnsSuffix: msRest.OperationURLParameter = {
  parameterPath: "dnsSuffix",
  mapper: {
    required: true,
    serializedName: "dnsSuffix",
    defaultValue: 'host',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const keyName: msRest.OperationURLParameter = {
  parameterPath: "keyName",
  mapper: {
    required: true,
    serializedName: "keyName",
    type: {
      name: "String"
    }
  }
};
export const keyVersion: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "keyVersion"
  ],
  mapper: {
    serializedName: "keyVersion",
    defaultValue: 'v1',
    type: {
      name: "String"
    }
  }
};
export const secret: msRest.OperationURLParameter = {
  parameterPath: "secret",
  mapper: {
    required: true,
    serializedName: "secret",
    defaultValue: '',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const vault: msRest.OperationURLParameter = {
  parameterPath: "vault",
  mapper: {
    required: true,
    serializedName: "vault",
    defaultValue: '',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
