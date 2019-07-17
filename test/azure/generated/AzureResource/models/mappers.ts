/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/core-arm";
import * as coreHttp from "@azure/core-http";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const ErrorModel: coreHttp.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: coreHttp.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FlattenedProduct: coreHttp.CompositeMapper = {
  serializedName: "FlattenedProduct",
  type: {
    name: "Composite",
    className: "FlattenedProduct",
    modelProperties: {
      ...Resource.type.modelProperties,
      pname: {
        serializedName: "properties.pname",
        type: {
          name: "String"
        }
      },
      lsize: {
        serializedName: "properties.lsize",
        type: {
          name: "Number"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceCollection: coreHttp.CompositeMapper = {
  serializedName: "ResourceCollection",
  type: {
    name: "Composite",
    className: "ResourceCollection",
    modelProperties: {
      productresource: {
        serializedName: "productresource",
        type: {
          name: "Composite",
          className: "FlattenedProduct"
        }
      },
      arrayofresources: {
        serializedName: "arrayofresources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FlattenedProduct"
            }
          }
        }
      },
      dictionaryofresources: {
        serializedName: "dictionaryofresources",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "FlattenedProduct"
            }
          }
        }
      }
    }
  }
};
