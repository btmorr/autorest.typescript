/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/httpRedirectsMappers";
import { AutoRestHttpInfrastructureTestServiceContext } from "../autoRestHttpInfrastructureTestServiceContext";

/** Class representing a HttpRedirects. */
export class HttpRedirects {
  private readonly client: AutoRestHttpInfrastructureTestServiceContext;

  /**
   * Create a HttpRedirects.
   * @param {AutoRestHttpInfrastructureTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestHttpInfrastructureTestServiceContext) {
    this.client = client;
  }

  /**
   * Return 300 status code and redirect to /http/success/200
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpRedirectsHead300Response>
   */
  head300(options?: msRest.RequestOptionsBase): Promise<Models.HttpRedirectsHead300Response>;
  /**
   * @param callback The callback
   */
  head300(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  head300(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  head300(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.HttpRedirectsHead300Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      head300OperationSpec,
      callback) as Promise<Models.HttpRedirectsHead300Response>;
  }

  /**
   * Return 300 status code and redirect to /http/success/200
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpRedirectsGet300Response>
   */
  get300(options?: msRest.RequestOptionsBase): Promise<Models.HttpRedirectsGet300Response>;
  /**
   * @param callback The callback
   */
  get300(callback: msRest.ServiceCallback<string[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  get300(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string[]>): void;
  get300(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string[]>, callback?: msRest.ServiceCallback<string[]>): Promise<Models.HttpRedirectsGet300Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      get300OperationSpec,
      callback) as Promise<Models.HttpRedirectsGet300Response>;
  }

  /**
   * Return 301 status code and redirect to /http/success/200
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpRedirectsHead301Response>
   */
  head301(options?: msRest.RequestOptionsBase): Promise<Models.HttpRedirectsHead301Response>;
  /**
   * @param callback The callback
   */
  head301(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  head301(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  head301(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.HttpRedirectsHead301Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      head301OperationSpec,
      callback) as Promise<Models.HttpRedirectsHead301Response>;
  }

  /**
   * Return 301 status code and redirect to /http/success/200
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpRedirectsGet301Response>
   */
  get301(options?: msRest.RequestOptionsBase): Promise<Models.HttpRedirectsGet301Response>;
  /**
   * @param callback The callback
   */
  get301(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  get301(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  get301(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.HttpRedirectsGet301Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      get301OperationSpec,
      callback) as Promise<Models.HttpRedirectsGet301Response>;
  }

  /**
   * Put true Boolean value in request returns 301.  This request should not be automatically
   * redirected, but should return the received 301 to the caller for evaluation
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpRedirectsPut301Response>
   */
  put301(options?: Models.HttpRedirectsPut301OptionalParams): Promise<Models.HttpRedirectsPut301Response>;
  /**
   * @param callback The callback
   */
  put301(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  put301(options: Models.HttpRedirectsPut301OptionalParams, callback: msRest.ServiceCallback<void>): void;
  put301(options?: Models.HttpRedirectsPut301OptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.HttpRedirectsPut301Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      put301OperationSpec,
      callback) as Promise<Models.HttpRedirectsPut301Response>;
  }

  /**
   * Return 302 status code and redirect to /http/success/200
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpRedirectsHead302Response>
   */
  head302(options?: msRest.RequestOptionsBase): Promise<Models.HttpRedirectsHead302Response>;
  /**
   * @param callback The callback
   */
  head302(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  head302(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  head302(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.HttpRedirectsHead302Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      head302OperationSpec,
      callback) as Promise<Models.HttpRedirectsHead302Response>;
  }

  /**
   * Return 302 status code and redirect to /http/success/200
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpRedirectsGet302Response>
   */
  get302(options?: msRest.RequestOptionsBase): Promise<Models.HttpRedirectsGet302Response>;
  /**
   * @param callback The callback
   */
  get302(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  get302(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  get302(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.HttpRedirectsGet302Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      get302OperationSpec,
      callback) as Promise<Models.HttpRedirectsGet302Response>;
  }

  /**
   * Patch true Boolean value in request returns 302.  This request should not be automatically
   * redirected, but should return the received 302 to the caller for evaluation
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpRedirectsPatch302Response>
   */
  patch302(options?: Models.HttpRedirectsPatch302OptionalParams): Promise<Models.HttpRedirectsPatch302Response>;
  /**
   * @param callback The callback
   */
  patch302(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  patch302(options: Models.HttpRedirectsPatch302OptionalParams, callback: msRest.ServiceCallback<void>): void;
  patch302(options?: Models.HttpRedirectsPatch302OptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.HttpRedirectsPatch302Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      patch302OperationSpec,
      callback) as Promise<Models.HttpRedirectsPatch302Response>;
  }

  /**
   * Post true Boolean value in request returns 303.  This request should be automatically redirected
   * usign a get, ultimately returning a 200 status code
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpRedirectsPost303Response>
   */
  post303(options?: Models.HttpRedirectsPost303OptionalParams): Promise<Models.HttpRedirectsPost303Response>;
  /**
   * @param callback The callback
   */
  post303(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  post303(options: Models.HttpRedirectsPost303OptionalParams, callback: msRest.ServiceCallback<void>): void;
  post303(options?: Models.HttpRedirectsPost303OptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.HttpRedirectsPost303Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      post303OperationSpec,
      callback) as Promise<Models.HttpRedirectsPost303Response>;
  }

  /**
   * Redirect with 307, resulting in a 200 success
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpRedirectsHead307Response>
   */
  head307(options?: msRest.RequestOptionsBase): Promise<Models.HttpRedirectsHead307Response>;
  /**
   * @param callback The callback
   */
  head307(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  head307(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  head307(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.HttpRedirectsHead307Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      head307OperationSpec,
      callback) as Promise<Models.HttpRedirectsHead307Response>;
  }

  /**
   * Redirect get with 307, resulting in a 200 success
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpRedirectsGet307Response>
   */
  get307(options?: msRest.RequestOptionsBase): Promise<Models.HttpRedirectsGet307Response>;
  /**
   * @param callback The callback
   */
  get307(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  get307(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  get307(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.HttpRedirectsGet307Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      get307OperationSpec,
      callback) as Promise<Models.HttpRedirectsGet307Response>;
  }

  /**
   * Put redirected with 307, resulting in a 200 after redirect
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpRedirectsPut307Response>
   */
  put307(options?: Models.HttpRedirectsPut307OptionalParams): Promise<Models.HttpRedirectsPut307Response>;
  /**
   * @param callback The callback
   */
  put307(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  put307(options: Models.HttpRedirectsPut307OptionalParams, callback: msRest.ServiceCallback<void>): void;
  put307(options?: Models.HttpRedirectsPut307OptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.HttpRedirectsPut307Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      put307OperationSpec,
      callback) as Promise<Models.HttpRedirectsPut307Response>;
  }

  /**
   * Patch redirected with 307, resulting in a 200 after redirect
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpRedirectsPatch307Response>
   */
  patch307(options?: Models.HttpRedirectsPatch307OptionalParams): Promise<Models.HttpRedirectsPatch307Response>;
  /**
   * @param callback The callback
   */
  patch307(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  patch307(options: Models.HttpRedirectsPatch307OptionalParams, callback: msRest.ServiceCallback<void>): void;
  patch307(options?: Models.HttpRedirectsPatch307OptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.HttpRedirectsPatch307Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      patch307OperationSpec,
      callback) as Promise<Models.HttpRedirectsPatch307Response>;
  }

  /**
   * Post redirected with 307, resulting in a 200 after redirect
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpRedirectsPost307Response>
   */
  post307(options?: Models.HttpRedirectsPost307OptionalParams): Promise<Models.HttpRedirectsPost307Response>;
  /**
   * @param callback The callback
   */
  post307(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  post307(options: Models.HttpRedirectsPost307OptionalParams, callback: msRest.ServiceCallback<void>): void;
  post307(options?: Models.HttpRedirectsPost307OptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.HttpRedirectsPost307Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      post307OperationSpec,
      callback) as Promise<Models.HttpRedirectsPost307Response>;
  }

  /**
   * Delete redirected with 307, resulting in a 200 after redirect
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpRedirectsDelete307Response>
   */
  delete307(options?: Models.HttpRedirectsDelete307OptionalParams): Promise<Models.HttpRedirectsDelete307Response>;
  /**
   * @param callback The callback
   */
  delete307(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  delete307(options: Models.HttpRedirectsDelete307OptionalParams, callback: msRest.ServiceCallback<void>): void;
  delete307(options?: Models.HttpRedirectsDelete307OptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.HttpRedirectsDelete307Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      delete307OperationSpec,
      callback) as Promise<Models.HttpRedirectsDelete307Response>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const head300OperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "http/redirect/300",
  responses: {
    200: {
      headersMapper: Mappers.HttpRedirectsHead300Headers
    },
    300: {
      headersMapper: Mappers.HttpRedirectsHead300Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
      headersMapper: Mappers.HttpRedirectsHead300Headers
    }
  },
  serializer
};

const get300OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "http/redirect/300",
  responses: {
    200: {
      headersMapper: Mappers.HttpRedirectsGet300Headers
    },
    300: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      headersMapper: Mappers.HttpRedirectsGet300Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
      headersMapper: Mappers.HttpRedirectsGet300Headers
    }
  },
  serializer
};

const head301OperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "http/redirect/301",
  responses: {
    200: {
      headersMapper: Mappers.HttpRedirectsHead301Headers
    },
    301: {
      headersMapper: Mappers.HttpRedirectsHead301Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
      headersMapper: Mappers.HttpRedirectsHead301Headers
    }
  },
  serializer
};

const get301OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "http/redirect/301",
  responses: {
    200: {
      headersMapper: Mappers.HttpRedirectsGet301Headers
    },
    301: {
      headersMapper: Mappers.HttpRedirectsGet301Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
      headersMapper: Mappers.HttpRedirectsGet301Headers
    }
  },
  serializer
};

const put301OperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "http/redirect/301",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    301: {
      headersMapper: Mappers.HttpRedirectsPut301Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
      headersMapper: Mappers.HttpRedirectsPut301Headers
    }
  },
  serializer
};

const head302OperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "http/redirect/302",
  responses: {
    200: {
      headersMapper: Mappers.HttpRedirectsHead302Headers
    },
    302: {
      headersMapper: Mappers.HttpRedirectsHead302Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
      headersMapper: Mappers.HttpRedirectsHead302Headers
    }
  },
  serializer
};

const get302OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "http/redirect/302",
  responses: {
    200: {
      headersMapper: Mappers.HttpRedirectsGet302Headers
    },
    302: {
      headersMapper: Mappers.HttpRedirectsGet302Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
      headersMapper: Mappers.HttpRedirectsGet302Headers
    }
  },
  serializer
};

const patch302OperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "http/redirect/302",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    302: {
      headersMapper: Mappers.HttpRedirectsPatch302Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
      headersMapper: Mappers.HttpRedirectsPatch302Headers
    }
  },
  serializer
};

const post303OperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "http/redirect/303",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    200: {
      headersMapper: Mappers.HttpRedirectsPost303Headers
    },
    303: {
      headersMapper: Mappers.HttpRedirectsPost303Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
      headersMapper: Mappers.HttpRedirectsPost303Headers
    }
  },
  serializer
};

const head307OperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "http/redirect/307",
  responses: {
    200: {
      headersMapper: Mappers.HttpRedirectsHead307Headers
    },
    307: {
      headersMapper: Mappers.HttpRedirectsHead307Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
      headersMapper: Mappers.HttpRedirectsHead307Headers
    }
  },
  serializer
};

const get307OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "http/redirect/307",
  responses: {
    200: {
      headersMapper: Mappers.HttpRedirectsGet307Headers
    },
    307: {
      headersMapper: Mappers.HttpRedirectsGet307Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
      headersMapper: Mappers.HttpRedirectsGet307Headers
    }
  },
  serializer
};

const put307OperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "http/redirect/307",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    200: {
      headersMapper: Mappers.HttpRedirectsPut307Headers
    },
    307: {
      headersMapper: Mappers.HttpRedirectsPut307Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
      headersMapper: Mappers.HttpRedirectsPut307Headers
    }
  },
  serializer
};

const patch307OperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "http/redirect/307",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    200: {
      headersMapper: Mappers.HttpRedirectsPatch307Headers
    },
    307: {
      headersMapper: Mappers.HttpRedirectsPatch307Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
      headersMapper: Mappers.HttpRedirectsPatch307Headers
    }
  },
  serializer
};

const post307OperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "http/redirect/307",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    200: {
      headersMapper: Mappers.HttpRedirectsPost307Headers
    },
    307: {
      headersMapper: Mappers.HttpRedirectsPost307Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
      headersMapper: Mappers.HttpRedirectsPost307Headers
    }
  },
  serializer
};

const delete307OperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "http/redirect/307",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    200: {
      headersMapper: Mappers.HttpRedirectsDelete307Headers
    },
    307: {
      headersMapper: Mappers.HttpRedirectsDelete307Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
      headersMapper: Mappers.HttpRedirectsDelete307Headers
    }
  },
  serializer
};
