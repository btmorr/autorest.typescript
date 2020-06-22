/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const customHeader0: msRest.OperationParameter = {
  parameterPath: [
    "parameterGroupingPostRequiredParameters",
    "customHeader"
  ],
  mapper: {
    serializedName: "customHeader",
    type: {
      name: "String"
    }
  }
};
export const customHeader1: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "parameterGroupingPostOptionalParameters",
    "customHeader"
  ],
  mapper: {
    serializedName: "customHeader",
    type: {
      name: "String"
    }
  }
};
export const headerOne: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "firstParameterGroup",
    "headerOne"
  ],
  mapper: {
    serializedName: "header-one",
    type: {
      name: "String"
    }
  }
};
export const headerTwo: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "parameterGroupingPostMultiParamGroupsSecondParamGroup",
    "headerTwo"
  ],
  mapper: {
    serializedName: "header-two",
    type: {
      name: "String"
    }
  }
};
export const path: msRest.OperationURLParameter = {
  parameterPath: [
    "parameterGroupingPostRequiredParameters",
    "path"
  ],
  mapper: {
    required: true,
    serializedName: "path",
    type: {
      name: "String"
    }
  }
};
export const query0: msRest.OperationQueryParameter = {
  parameterPath: [
    "parameterGroupingPostRequiredParameters",
    "query"
  ],
  mapper: {
    serializedName: "query",
    defaultValue: 30,
    type: {
      name: "Number"
    }
  }
};
export const query1: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "parameterGroupingPostOptionalParameters",
    "query"
  ],
  mapper: {
    serializedName: "query",
    defaultValue: 30,
    type: {
      name: "Number"
    }
  }
};
export const queryOne: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "firstParameterGroup",
    "queryOne"
  ],
  mapper: {
    serializedName: "query-one",
    defaultValue: 30,
    type: {
      name: "Number"
    }
  }
};
export const queryTwo: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "parameterGroupingPostMultiParamGroupsSecondParamGroup",
    "queryTwo"
  ],
  mapper: {
    serializedName: "query-two",
    defaultValue: 30,
    type: {
      name: "Number"
    }
  }
};
