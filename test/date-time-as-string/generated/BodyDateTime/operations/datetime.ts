/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/datetimeMappers";
import { AutoRestDateTimeTestServiceContext } from "../autoRestDateTimeTestServiceContext";

/** Class representing a Datetime. */
export class Datetime {
  private readonly client: AutoRestDateTimeTestServiceContext;

  /**
   * Create a Datetime.
   * @param {AutoRestDateTimeTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestDateTimeTestServiceContext) {
    this.client = client;
  }

  /**
   * Get null datetime value
   * @param [options] The optional parameters
   * @returns Promise<Models.DatetimeGetNullResponse>
   */
  getNull(options?: msRest.RequestOptionsBase): Promise<Models.DatetimeGetNullResponse>;
  /**
   * @param callback The callback
   */
  getNull(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getNull(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  getNull(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.DatetimeGetNullResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNullOperationSpec,
      callback) as Promise<Models.DatetimeGetNullResponse>;
  }

  /**
   * Get invalid datetime value
   * @param [options] The optional parameters
   * @returns Promise<Models.DatetimeGetInvalidResponse>
   */
  getInvalid(options?: msRest.RequestOptionsBase): Promise<Models.DatetimeGetInvalidResponse>;
  /**
   * @param callback The callback
   */
  getInvalid(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getInvalid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  getInvalid(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.DatetimeGetInvalidResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getInvalidOperationSpec,
      callback) as Promise<Models.DatetimeGetInvalidResponse>;
  }

  /**
   * Get overflow datetime value
   * @param [options] The optional parameters
   * @returns Promise<Models.DatetimeGetOverflowResponse>
   */
  getOverflow(options?: msRest.RequestOptionsBase): Promise<Models.DatetimeGetOverflowResponse>;
  /**
   * @param callback The callback
   */
  getOverflow(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getOverflow(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  getOverflow(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.DatetimeGetOverflowResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getOverflowOperationSpec,
      callback) as Promise<Models.DatetimeGetOverflowResponse>;
  }

  /**
   * Get underflow datetime value
   * @param [options] The optional parameters
   * @returns Promise<Models.DatetimeGetUnderflowResponse>
   */
  getUnderflow(options?: msRest.RequestOptionsBase): Promise<Models.DatetimeGetUnderflowResponse>;
  /**
   * @param callback The callback
   */
  getUnderflow(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getUnderflow(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  getUnderflow(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.DatetimeGetUnderflowResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getUnderflowOperationSpec,
      callback) as Promise<Models.DatetimeGetUnderflowResponse>;
  }

  /**
   * Put max datetime value 9999-12-31T23:59:59.9999999Z
   * @param datetimeBody
   * **NOTE: This entity will be treated as a string instead of a Date because the API can
   * potentially deal with a higher precision value than what is supported by JavaScript.**
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putUtcMaxDateTime(datetimeBody: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param datetimeBody
   * **NOTE: This entity will be treated as a string instead of a Date because the API can
   * potentially deal with a higher precision value than what is supported by JavaScript.**
   * @param callback The callback
   */
  putUtcMaxDateTime(datetimeBody: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param datetimeBody
   * **NOTE: This entity will be treated as a string instead of a Date because the API can
   * potentially deal with a higher precision value than what is supported by JavaScript.**
   * @param options The optional parameters
   * @param callback The callback
   */
  putUtcMaxDateTime(datetimeBody: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putUtcMaxDateTime(datetimeBody: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        datetimeBody,
        options
      },
      putUtcMaxDateTimeOperationSpec,
      callback);
  }

  /**
   * Get max datetime value 9999-12-31t23:59:59.9999999z
   * @param [options] The optional parameters
   * @returns Promise<Models.DatetimeGetUtcLowercaseMaxDateTimeResponse>
   */
  getUtcLowercaseMaxDateTime(options?: msRest.RequestOptionsBase): Promise<Models.DatetimeGetUtcLowercaseMaxDateTimeResponse>;
  /**
   * @param callback The callback
   */
  getUtcLowercaseMaxDateTime(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getUtcLowercaseMaxDateTime(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  getUtcLowercaseMaxDateTime(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.DatetimeGetUtcLowercaseMaxDateTimeResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getUtcLowercaseMaxDateTimeOperationSpec,
      callback) as Promise<Models.DatetimeGetUtcLowercaseMaxDateTimeResponse>;
  }

  /**
   * Get max datetime value 9999-12-31T23:59:59.9999999Z
   * @param [options] The optional parameters
   * @returns Promise<Models.DatetimeGetUtcUppercaseMaxDateTimeResponse>
   */
  getUtcUppercaseMaxDateTime(options?: msRest.RequestOptionsBase): Promise<Models.DatetimeGetUtcUppercaseMaxDateTimeResponse>;
  /**
   * @param callback The callback
   */
  getUtcUppercaseMaxDateTime(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getUtcUppercaseMaxDateTime(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  getUtcUppercaseMaxDateTime(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.DatetimeGetUtcUppercaseMaxDateTimeResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getUtcUppercaseMaxDateTimeOperationSpec,
      callback) as Promise<Models.DatetimeGetUtcUppercaseMaxDateTimeResponse>;
  }

  /**
   * Put max datetime value with positive numoffset 9999-12-31t23:59:59.9999999+14:00
   * @param datetimeBody
   * **NOTE: This entity will be treated as a string instead of a Date because the API can
   * potentially deal with a higher precision value than what is supported by JavaScript.**
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putLocalPositiveOffsetMaxDateTime(datetimeBody: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param datetimeBody
   * **NOTE: This entity will be treated as a string instead of a Date because the API can
   * potentially deal with a higher precision value than what is supported by JavaScript.**
   * @param callback The callback
   */
  putLocalPositiveOffsetMaxDateTime(datetimeBody: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param datetimeBody
   * **NOTE: This entity will be treated as a string instead of a Date because the API can
   * potentially deal with a higher precision value than what is supported by JavaScript.**
   * @param options The optional parameters
   * @param callback The callback
   */
  putLocalPositiveOffsetMaxDateTime(datetimeBody: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putLocalPositiveOffsetMaxDateTime(datetimeBody: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        datetimeBody,
        options
      },
      putLocalPositiveOffsetMaxDateTimeOperationSpec,
      callback);
  }

  /**
   * Get max datetime value with positive num offset 9999-12-31t23:59:59.9999999+14:00
   * @param [options] The optional parameters
   * @returns Promise<Models.DatetimeGetLocalPositiveOffsetLowercaseMaxDateTimeResponse>
   */
  getLocalPositiveOffsetLowercaseMaxDateTime(options?: msRest.RequestOptionsBase): Promise<Models.DatetimeGetLocalPositiveOffsetLowercaseMaxDateTimeResponse>;
  /**
   * @param callback The callback
   */
  getLocalPositiveOffsetLowercaseMaxDateTime(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getLocalPositiveOffsetLowercaseMaxDateTime(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  getLocalPositiveOffsetLowercaseMaxDateTime(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.DatetimeGetLocalPositiveOffsetLowercaseMaxDateTimeResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getLocalPositiveOffsetLowercaseMaxDateTimeOperationSpec,
      callback) as Promise<Models.DatetimeGetLocalPositiveOffsetLowercaseMaxDateTimeResponse>;
  }

  /**
   * Get max datetime value with positive num offset 9999-12-31T23:59:59.9999999+14:00
   * @param [options] The optional parameters
   * @returns Promise<Models.DatetimeGetLocalPositiveOffsetUppercaseMaxDateTimeResponse>
   */
  getLocalPositiveOffsetUppercaseMaxDateTime(options?: msRest.RequestOptionsBase): Promise<Models.DatetimeGetLocalPositiveOffsetUppercaseMaxDateTimeResponse>;
  /**
   * @param callback The callback
   */
  getLocalPositiveOffsetUppercaseMaxDateTime(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getLocalPositiveOffsetUppercaseMaxDateTime(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  getLocalPositiveOffsetUppercaseMaxDateTime(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.DatetimeGetLocalPositiveOffsetUppercaseMaxDateTimeResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getLocalPositiveOffsetUppercaseMaxDateTimeOperationSpec,
      callback) as Promise<Models.DatetimeGetLocalPositiveOffsetUppercaseMaxDateTimeResponse>;
  }

  /**
   * Put max datetime value with positive numoffset 9999-12-31t23:59:59.9999999-14:00
   * @param datetimeBody
   * **NOTE: This entity will be treated as a string instead of a Date because the API can
   * potentially deal with a higher precision value than what is supported by JavaScript.**
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putLocalNegativeOffsetMaxDateTime(datetimeBody: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param datetimeBody
   * **NOTE: This entity will be treated as a string instead of a Date because the API can
   * potentially deal with a higher precision value than what is supported by JavaScript.**
   * @param callback The callback
   */
  putLocalNegativeOffsetMaxDateTime(datetimeBody: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param datetimeBody
   * **NOTE: This entity will be treated as a string instead of a Date because the API can
   * potentially deal with a higher precision value than what is supported by JavaScript.**
   * @param options The optional parameters
   * @param callback The callback
   */
  putLocalNegativeOffsetMaxDateTime(datetimeBody: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putLocalNegativeOffsetMaxDateTime(datetimeBody: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        datetimeBody,
        options
      },
      putLocalNegativeOffsetMaxDateTimeOperationSpec,
      callback);
  }

  /**
   * Get max datetime value with positive num offset 9999-12-31T23:59:59.9999999-14:00
   * @param [options] The optional parameters
   * @returns Promise<Models.DatetimeGetLocalNegativeOffsetUppercaseMaxDateTimeResponse>
   */
  getLocalNegativeOffsetUppercaseMaxDateTime(options?: msRest.RequestOptionsBase): Promise<Models.DatetimeGetLocalNegativeOffsetUppercaseMaxDateTimeResponse>;
  /**
   * @param callback The callback
   */
  getLocalNegativeOffsetUppercaseMaxDateTime(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getLocalNegativeOffsetUppercaseMaxDateTime(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  getLocalNegativeOffsetUppercaseMaxDateTime(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.DatetimeGetLocalNegativeOffsetUppercaseMaxDateTimeResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getLocalNegativeOffsetUppercaseMaxDateTimeOperationSpec,
      callback) as Promise<Models.DatetimeGetLocalNegativeOffsetUppercaseMaxDateTimeResponse>;
  }

  /**
   * Get max datetime value with positive num offset 9999-12-31t23:59:59.9999999-14:00
   * @param [options] The optional parameters
   * @returns Promise<Models.DatetimeGetLocalNegativeOffsetLowercaseMaxDateTimeResponse>
   */
  getLocalNegativeOffsetLowercaseMaxDateTime(options?: msRest.RequestOptionsBase): Promise<Models.DatetimeGetLocalNegativeOffsetLowercaseMaxDateTimeResponse>;
  /**
   * @param callback The callback
   */
  getLocalNegativeOffsetLowercaseMaxDateTime(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getLocalNegativeOffsetLowercaseMaxDateTime(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  getLocalNegativeOffsetLowercaseMaxDateTime(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.DatetimeGetLocalNegativeOffsetLowercaseMaxDateTimeResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getLocalNegativeOffsetLowercaseMaxDateTimeOperationSpec,
      callback) as Promise<Models.DatetimeGetLocalNegativeOffsetLowercaseMaxDateTimeResponse>;
  }

  /**
   * Put min datetime value 0001-01-01T00:00:00Z
   * @param datetimeBody
   * **NOTE: This entity will be treated as a string instead of a Date because the API can
   * potentially deal with a higher precision value than what is supported by JavaScript.**
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putUtcMinDateTime(datetimeBody: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param datetimeBody
   * **NOTE: This entity will be treated as a string instead of a Date because the API can
   * potentially deal with a higher precision value than what is supported by JavaScript.**
   * @param callback The callback
   */
  putUtcMinDateTime(datetimeBody: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param datetimeBody
   * **NOTE: This entity will be treated as a string instead of a Date because the API can
   * potentially deal with a higher precision value than what is supported by JavaScript.**
   * @param options The optional parameters
   * @param callback The callback
   */
  putUtcMinDateTime(datetimeBody: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putUtcMinDateTime(datetimeBody: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        datetimeBody,
        options
      },
      putUtcMinDateTimeOperationSpec,
      callback);
  }

  /**
   * Get min datetime value 0001-01-01T00:00:00Z
   * @param [options] The optional parameters
   * @returns Promise<Models.DatetimeGetUtcMinDateTimeResponse>
   */
  getUtcMinDateTime(options?: msRest.RequestOptionsBase): Promise<Models.DatetimeGetUtcMinDateTimeResponse>;
  /**
   * @param callback The callback
   */
  getUtcMinDateTime(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getUtcMinDateTime(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  getUtcMinDateTime(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.DatetimeGetUtcMinDateTimeResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getUtcMinDateTimeOperationSpec,
      callback) as Promise<Models.DatetimeGetUtcMinDateTimeResponse>;
  }

  /**
   * Put min datetime value 0001-01-01T00:00:00+14:00
   * @param datetimeBody
   * **NOTE: This entity will be treated as a string instead of a Date because the API can
   * potentially deal with a higher precision value than what is supported by JavaScript.**
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putLocalPositiveOffsetMinDateTime(datetimeBody: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param datetimeBody
   * **NOTE: This entity will be treated as a string instead of a Date because the API can
   * potentially deal with a higher precision value than what is supported by JavaScript.**
   * @param callback The callback
   */
  putLocalPositiveOffsetMinDateTime(datetimeBody: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param datetimeBody
   * **NOTE: This entity will be treated as a string instead of a Date because the API can
   * potentially deal with a higher precision value than what is supported by JavaScript.**
   * @param options The optional parameters
   * @param callback The callback
   */
  putLocalPositiveOffsetMinDateTime(datetimeBody: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putLocalPositiveOffsetMinDateTime(datetimeBody: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        datetimeBody,
        options
      },
      putLocalPositiveOffsetMinDateTimeOperationSpec,
      callback);
  }

  /**
   * Get min datetime value 0001-01-01T00:00:00+14:00
   * @param [options] The optional parameters
   * @returns Promise<Models.DatetimeGetLocalPositiveOffsetMinDateTimeResponse>
   */
  getLocalPositiveOffsetMinDateTime(options?: msRest.RequestOptionsBase): Promise<Models.DatetimeGetLocalPositiveOffsetMinDateTimeResponse>;
  /**
   * @param callback The callback
   */
  getLocalPositiveOffsetMinDateTime(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getLocalPositiveOffsetMinDateTime(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  getLocalPositiveOffsetMinDateTime(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.DatetimeGetLocalPositiveOffsetMinDateTimeResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getLocalPositiveOffsetMinDateTimeOperationSpec,
      callback) as Promise<Models.DatetimeGetLocalPositiveOffsetMinDateTimeResponse>;
  }

  /**
   * Put min datetime value 0001-01-01T00:00:00-14:00
   * @param datetimeBody
   * **NOTE: This entity will be treated as a string instead of a Date because the API can
   * potentially deal with a higher precision value than what is supported by JavaScript.**
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  putLocalNegativeOffsetMinDateTime(datetimeBody: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param datetimeBody
   * **NOTE: This entity will be treated as a string instead of a Date because the API can
   * potentially deal with a higher precision value than what is supported by JavaScript.**
   * @param callback The callback
   */
  putLocalNegativeOffsetMinDateTime(datetimeBody: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param datetimeBody
   * **NOTE: This entity will be treated as a string instead of a Date because the API can
   * potentially deal with a higher precision value than what is supported by JavaScript.**
   * @param options The optional parameters
   * @param callback The callback
   */
  putLocalNegativeOffsetMinDateTime(datetimeBody: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putLocalNegativeOffsetMinDateTime(datetimeBody: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        datetimeBody,
        options
      },
      putLocalNegativeOffsetMinDateTimeOperationSpec,
      callback);
  }

  /**
   * Get min datetime value 0001-01-01T00:00:00-14:00
   * @param [options] The optional parameters
   * @returns Promise<Models.DatetimeGetLocalNegativeOffsetMinDateTimeResponse>
   */
  getLocalNegativeOffsetMinDateTime(options?: msRest.RequestOptionsBase): Promise<Models.DatetimeGetLocalNegativeOffsetMinDateTimeResponse>;
  /**
   * @param callback The callback
   */
  getLocalNegativeOffsetMinDateTime(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getLocalNegativeOffsetMinDateTime(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
  getLocalNegativeOffsetMinDateTime(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.DatetimeGetLocalNegativeOffsetMinDateTimeResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getLocalNegativeOffsetMinDateTimeOperationSpec,
      callback) as Promise<Models.DatetimeGetLocalNegativeOffsetMinDateTimeResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "datetime/null",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getInvalidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "datetime/invalid",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getOverflowOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "datetime/overflow",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getUnderflowOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "datetime/underflow",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putUtcMaxDateTimeOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "datetime/max/utc",
  requestBody: {
    parameterPath: "datetimeBody",
    mapper: {
      required: true,
      serializedName: "datetimeBody",
      type: {
        name: "String"
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getUtcLowercaseMaxDateTimeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "datetime/max/utc/lowercase",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getUtcUppercaseMaxDateTimeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "datetime/max/utc/uppercase",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putLocalPositiveOffsetMaxDateTimeOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "datetime/max/localpositiveoffset",
  requestBody: {
    parameterPath: "datetimeBody",
    mapper: {
      required: true,
      serializedName: "datetimeBody",
      type: {
        name: "String"
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getLocalPositiveOffsetLowercaseMaxDateTimeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "datetime/max/localpositiveoffset/lowercase",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getLocalPositiveOffsetUppercaseMaxDateTimeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "datetime/max/localpositiveoffset/uppercase",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putLocalNegativeOffsetMaxDateTimeOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "datetime/max/localnegativeoffset",
  requestBody: {
    parameterPath: "datetimeBody",
    mapper: {
      required: true,
      serializedName: "datetimeBody",
      type: {
        name: "String"
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getLocalNegativeOffsetUppercaseMaxDateTimeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "datetime/max/localnegativeoffset/uppercase",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getLocalNegativeOffsetLowercaseMaxDateTimeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "datetime/max/localnegativeoffset/lowercase",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putUtcMinDateTimeOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "datetime/min/utc",
  requestBody: {
    parameterPath: "datetimeBody",
    mapper: {
      required: true,
      serializedName: "datetimeBody",
      type: {
        name: "String"
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getUtcMinDateTimeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "datetime/min/utc",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putLocalPositiveOffsetMinDateTimeOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "datetime/min/localpositiveoffset",
  requestBody: {
    parameterPath: "datetimeBody",
    mapper: {
      required: true,
      serializedName: "datetimeBody",
      type: {
        name: "String"
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getLocalPositiveOffsetMinDateTimeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "datetime/min/localpositiveoffset",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putLocalNegativeOffsetMinDateTimeOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "datetime/min/localnegativeoffset",
  requestBody: {
    parameterPath: "datetimeBody",
    mapper: {
      required: true,
      serializedName: "datetimeBody",
      type: {
        name: "String"
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getLocalNegativeOffsetMinDateTimeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "datetime/min/localnegativeoffset",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
