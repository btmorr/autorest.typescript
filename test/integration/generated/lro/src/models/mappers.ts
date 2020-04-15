/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const Resource: coreHttp.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: { type: { name: "String" }, serializedName: "id", readOnly: true },
      type: {
        type: { name: "String" },
        serializedName: "type",
        readOnly: true
      },
      tags: {
        type: {
          name: "Dictionary",
          value: { type: { name: "String" }, serializedName: "String" }
        },
        serializedName: "tags"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      name: { type: { name: "String" }, serializedName: "name", readOnly: true }
    }
  }
};

export const Product: coreHttp.CompositeMapper = {
  serializedName: "Product",
  type: {
    name: "Composite",
    className: "Product",
    modelProperties: {
      ...Resource.type.modelProperties,
      provisioningState: {
        type: { name: "String" },
        serializedName: "properties.provisioningState"
      },
      provisioningStateValues: {
        type: { name: "String" },
        serializedName: "properties.provisioningStateValues",
        readOnly: true
      }
    }
  }
};

export const CloudError: coreHttp.CompositeMapper = {
  serializedName: "CloudError",
  type: {
    name: "Composite",
    className: "CloudError",
    modelProperties: {
      status: { type: { name: "Number" }, serializedName: "status" },
      message: { type: { name: "String" }, serializedName: "message" }
    }
  }
};

export const Sku: coreHttp.CompositeMapper = {
  serializedName: "Sku",
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: { type: { name: "String" }, serializedName: "name" },
      id: { type: { name: "String" }, serializedName: "id" }
    }
  }
};

export const SubResource: coreHttp.CompositeMapper = {
  serializedName: "SubResource",
  type: {
    name: "Composite",
    className: "SubResource",
    modelProperties: {
      id: { type: { name: "String" }, serializedName: "id", readOnly: true }
    }
  }
};

export const SubProduct: coreHttp.CompositeMapper = {
  serializedName: "SubProduct",
  type: {
    name: "Composite",
    className: "SubProduct",
    modelProperties: {
      ...SubResource.type.modelProperties,
      provisioningState: {
        type: { name: "String" },
        serializedName: "properties.provisioningState"
      },
      provisioningStateValues: {
        type: { name: "String" },
        serializedName: "properties.provisioningStateValues",
        readOnly: true
      }
    }
  }
};

export const OperationResult: coreHttp.CompositeMapper = {
  serializedName: "OperationResult",
  type: {
    name: "Composite",
    className: "OperationResult",
    modelProperties: {
      status: { type: { name: "String" }, serializedName: "status" },
      error: {
        serializedName: "error",
        type: { name: "Composite", className: "OperationResultError" }
      }
    }
  }
};

export const OperationResultError: coreHttp.CompositeMapper = {
  serializedName: "OperationResultError",
  type: {
    name: "Composite",
    className: "OperationResultError",
    modelProperties: {
      code: { type: { name: "Number" }, serializedName: "code" },
      message: { type: { name: "String" }, serializedName: "message" }
    }
  }
};

export const LROsPutNoHeaderInRetryHeaders: coreHttp.CompositeMapper = {
  serializedName: "lROs_putNoHeaderInRetryHeaders",
  type: {
    name: "Composite",
    className: "LROsPutNoHeaderInRetryHeaders",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" }
    }
  }
};

export const LROsPutAsyncRetrySucceededHeaders: coreHttp.CompositeMapper = {
  serializedName: "lROs_putAsyncRetrySucceededHeaders",
  type: {
    name: "Composite",
    className: "LROsPutAsyncRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LROsPutAsyncNoRetrySucceededHeaders: coreHttp.CompositeMapper = {
  serializedName: "lROs_putAsyncNoRetrySucceededHeaders",
  type: {
    name: "Composite",
    className: "LROsPutAsyncNoRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" }
    }
  }
};

export const LROsPutAsyncRetryFailedHeaders: coreHttp.CompositeMapper = {
  serializedName: "lROs_putAsyncRetryFailedHeaders",
  type: {
    name: "Composite",
    className: "LROsPutAsyncRetryFailedHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LROsPutAsyncNoRetrycanceledHeaders: coreHttp.CompositeMapper = {
  serializedName: "lROs_putAsyncNoRetrycanceledHeaders",
  type: {
    name: "Composite",
    className: "LROsPutAsyncNoRetrycanceledHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" }
    }
  }
};

export const LROsPutAsyncNoHeaderInRetryHeaders: coreHttp.CompositeMapper = {
  serializedName: "lROs_putAsyncNoHeaderInRetryHeaders",
  type: {
    name: "Composite",
    className: "LROsPutAsyncNoHeaderInRetryHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      }
    }
  }
};

export const LROsDeleteProvisioning202Accepted200SucceededHeaders: coreHttp.CompositeMapper = {
  serializedName: "lROs_deleteProvisioning202Accepted200SucceededHeaders",
  type: {
    name: "Composite",
    className: "LROsDeleteProvisioning202Accepted200SucceededHeaders",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LROsDeleteProvisioning202DeletingFailed200Headers: coreHttp.CompositeMapper = {
  serializedName: "lROs_deleteProvisioning202DeletingFailed200Headers",
  type: {
    name: "Composite",
    className: "LROsDeleteProvisioning202DeletingFailed200Headers",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LROsDeleteProvisioning202Deletingcanceled200Headers: coreHttp.CompositeMapper = {
  serializedName: "lROs_deleteProvisioning202Deletingcanceled200Headers",
  type: {
    name: "Composite",
    className: "LROsDeleteProvisioning202Deletingcanceled200Headers",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LROsDelete202Retry200Headers: coreHttp.CompositeMapper = {
  serializedName: "lROs_delete202Retry200Headers",
  type: {
    name: "Composite",
    className: "LROsDelete202Retry200Headers",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LROsDelete202NoRetry204Headers: coreHttp.CompositeMapper = {
  serializedName: "lROs_delete202NoRetry204Headers",
  type: {
    name: "Composite",
    className: "LROsDelete202NoRetry204Headers",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LROsDeleteNoHeaderInRetryHeaders: coreHttp.CompositeMapper = {
  serializedName: "lROs_deleteNoHeaderInRetryHeaders",
  type: {
    name: "Composite",
    className: "LROsDeleteNoHeaderInRetryHeaders",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" }
    }
  }
};

export const LROsDeleteAsyncNoHeaderInRetryHeaders: coreHttp.CompositeMapper = {
  serializedName: "lROs_deleteAsyncNoHeaderInRetryHeaders",
  type: {
    name: "Composite",
    className: "LROsDeleteAsyncNoHeaderInRetryHeaders",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" }
    }
  }
};

export const LROsDeleteAsyncRetrySucceededHeaders: coreHttp.CompositeMapper = {
  serializedName: "lROs_deleteAsyncRetrySucceededHeaders",
  type: {
    name: "Composite",
    className: "LROsDeleteAsyncRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LROsDeleteAsyncNoRetrySucceededHeaders: coreHttp.CompositeMapper = {
  serializedName: "lROs_deleteAsyncNoRetrySucceededHeaders",
  type: {
    name: "Composite",
    className: "LROsDeleteAsyncNoRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LROsDeleteAsyncRetryFailedHeaders: coreHttp.CompositeMapper = {
  serializedName: "lROs_deleteAsyncRetryFailedHeaders",
  type: {
    name: "Composite",
    className: "LROsDeleteAsyncRetryFailedHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LROsDeleteAsyncRetrycanceledHeaders: coreHttp.CompositeMapper = {
  serializedName: "lROs_deleteAsyncRetrycanceledHeaders",
  type: {
    name: "Composite",
    className: "LROsDeleteAsyncRetrycanceledHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LROsPost202Retry200Headers: coreHttp.CompositeMapper = {
  serializedName: "lROs_post202Retry200Headers",
  type: {
    name: "Composite",
    className: "LROsPost202Retry200Headers",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LROsPost202NoRetry204Headers: coreHttp.CompositeMapper = {
  serializedName: "lROs_post202NoRetry204Headers",
  type: {
    name: "Composite",
    className: "LROsPost202NoRetry204Headers",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LROsPostAsyncRetrySucceededHeaders: coreHttp.CompositeMapper = {
  serializedName: "lROs_postAsyncRetrySucceededHeaders",
  type: {
    name: "Composite",
    className: "LROsPostAsyncRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LROsPostAsyncNoRetrySucceededHeaders: coreHttp.CompositeMapper = {
  serializedName: "lROs_postAsyncNoRetrySucceededHeaders",
  type: {
    name: "Composite",
    className: "LROsPostAsyncNoRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LROsPostAsyncRetryFailedHeaders: coreHttp.CompositeMapper = {
  serializedName: "lROs_postAsyncRetryFailedHeaders",
  type: {
    name: "Composite",
    className: "LROsPostAsyncRetryFailedHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LROsPostAsyncRetrycanceledHeaders: coreHttp.CompositeMapper = {
  serializedName: "lROs_postAsyncRetrycanceledHeaders",
  type: {
    name: "Composite",
    className: "LROsPostAsyncRetrycanceledHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LRORetrysPutAsyncRelativeRetrySucceededHeaders: coreHttp.CompositeMapper = {
  serializedName: "lRORetrys_putAsyncRelativeRetrySucceededHeaders",
  type: {
    name: "Composite",
    className: "LRORetrysPutAsyncRelativeRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LRORetrysDeleteProvisioning202Accepted200SucceededHeaders: coreHttp.CompositeMapper = {
  serializedName: "lRORetrys_deleteProvisioning202Accepted200SucceededHeaders",
  type: {
    name: "Composite",
    className: "LRORetrysDeleteProvisioning202Accepted200SucceededHeaders",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LRORetrysDelete202Retry200Headers: coreHttp.CompositeMapper = {
  serializedName: "lRORetrys_delete202Retry200Headers",
  type: {
    name: "Composite",
    className: "LRORetrysDelete202Retry200Headers",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LRORetrysDeleteAsyncRelativeRetrySucceededHeaders: coreHttp.CompositeMapper = {
  serializedName: "lRORetrys_deleteAsyncRelativeRetrySucceededHeaders",
  type: {
    name: "Composite",
    className: "LRORetrysDeleteAsyncRelativeRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LRORetrysPost202Retry200Headers: coreHttp.CompositeMapper = {
  serializedName: "lRORetrys_post202Retry200Headers",
  type: {
    name: "Composite",
    className: "LRORetrysPost202Retry200Headers",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LRORetrysPostAsyncRelativeRetrySucceededHeaders: coreHttp.CompositeMapper = {
  serializedName: "lRORetrys_postAsyncRelativeRetrySucceededHeaders",
  type: {
    name: "Composite",
    className: "LRORetrysPostAsyncRelativeRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsPutAsyncRelativeRetry400Headers: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_putAsyncRelativeRetry400Headers",
  type: {
    name: "Composite",
    className: "LrosaDsPutAsyncRelativeRetry400Headers",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsDeleteNonRetry400Headers: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_deleteNonRetry400Headers",
  type: {
    name: "Composite",
    className: "LrosaDsDeleteNonRetry400Headers",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsDelete202NonRetry400Headers: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_delete202NonRetry400Headers",
  type: {
    name: "Composite",
    className: "LrosaDsDelete202NonRetry400Headers",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsDeleteAsyncRelativeRetry400Headers: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_deleteAsyncRelativeRetry400Headers",
  type: {
    name: "Composite",
    className: "LrosaDsDeleteAsyncRelativeRetry400Headers",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsPostNonRetry400Headers: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_postNonRetry400Headers",
  type: {
    name: "Composite",
    className: "LrosaDsPostNonRetry400Headers",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsPost202NonRetry400Headers: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_post202NonRetry400Headers",
  type: {
    name: "Composite",
    className: "LrosaDsPost202NonRetry400Headers",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsPostAsyncRelativeRetry400Headers: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_postAsyncRelativeRetry400Headers",
  type: {
    name: "Composite",
    className: "LrosaDsPostAsyncRelativeRetry400Headers",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsPutAsyncRelativeRetryNoStatusHeaders: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_putAsyncRelativeRetryNoStatusHeaders",
  type: {
    name: "Composite",
    className: "LrosaDsPutAsyncRelativeRetryNoStatusHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsPutAsyncRelativeRetryNoStatusPayloadHeaders: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_putAsyncRelativeRetryNoStatusPayloadHeaders",
  type: {
    name: "Composite",
    className: "LrosaDsPutAsyncRelativeRetryNoStatusPayloadHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsDeleteAsyncRelativeRetryNoStatusHeaders: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_deleteAsyncRelativeRetryNoStatusHeaders",
  type: {
    name: "Composite",
    className: "LrosaDsDeleteAsyncRelativeRetryNoStatusHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsPost202NoLocationHeaders: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_post202NoLocationHeaders",
  type: {
    name: "Composite",
    className: "LrosaDsPost202NoLocationHeaders",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsPostAsyncRelativeRetryNoPayloadHeaders: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_postAsyncRelativeRetryNoPayloadHeaders",
  type: {
    name: "Composite",
    className: "LrosaDsPostAsyncRelativeRetryNoPayloadHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsPutAsyncRelativeRetryInvalidHeaderHeaders: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_putAsyncRelativeRetryInvalidHeaderHeaders",
  type: {
    name: "Composite",
    className: "LrosaDsPutAsyncRelativeRetryInvalidHeaderHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsPutAsyncRelativeRetryInvalidJsonPollingHeaders: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_putAsyncRelativeRetryInvalidJsonPollingHeaders",
  type: {
    name: "Composite",
    className: "LrosaDsPutAsyncRelativeRetryInvalidJsonPollingHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsDelete202RetryInvalidHeaderHeaders: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_delete202RetryInvalidHeaderHeaders",
  type: {
    name: "Composite",
    className: "LrosaDsDelete202RetryInvalidHeaderHeaders",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsDeleteAsyncRelativeRetryInvalidHeaderHeaders: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_deleteAsyncRelativeRetryInvalidHeaderHeaders",
  type: {
    name: "Composite",
    className: "LrosaDsDeleteAsyncRelativeRetryInvalidHeaderHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingHeaders: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_deleteAsyncRelativeRetryInvalidJsonPollingHeaders",
  type: {
    name: "Composite",
    className: "LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsPost202RetryInvalidHeaderHeaders: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_post202RetryInvalidHeaderHeaders",
  type: {
    name: "Composite",
    className: "LrosaDsPost202RetryInvalidHeaderHeaders",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsPostAsyncRelativeRetryInvalidHeaderHeaders: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_postAsyncRelativeRetryInvalidHeaderHeaders",
  type: {
    name: "Composite",
    className: "LrosaDsPostAsyncRelativeRetryInvalidHeaderHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LrosaDsPostAsyncRelativeRetryInvalidJsonPollingHeaders: coreHttp.CompositeMapper = {
  serializedName: "lrosaDs_postAsyncRelativeRetryInvalidJsonPollingHeaders",
  type: {
    name: "Composite",
    className: "LrosaDsPostAsyncRelativeRetryInvalidJsonPollingHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LROsCustomHeaderPutAsyncRetrySucceededHeaders: coreHttp.CompositeMapper = {
  serializedName: "lROsCustomHeader_putAsyncRetrySucceededHeaders",
  type: {
    name: "Composite",
    className: "LROsCustomHeaderPutAsyncRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LROsCustomHeaderPost202Retry200Headers: coreHttp.CompositeMapper = {
  serializedName: "lROsCustomHeader_post202Retry200Headers",
  type: {
    name: "Composite",
    className: "LROsCustomHeaderPost202Retry200Headers",
    modelProperties: {
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};

export const LROsCustomHeaderPostAsyncRetrySucceededHeaders: coreHttp.CompositeMapper = {
  serializedName: "lROsCustomHeader_postAsyncRetrySucceededHeaders",
  type: {
    name: "Composite",
    className: "LROsCustomHeaderPostAsyncRetrySucceededHeaders",
    modelProperties: {
      azureAsyncOperation: {
        type: { name: "String" },
        serializedName: "azure-asyncoperation"
      },
      location: { type: { name: "String" }, serializedName: "location" },
      retryAfter: { type: { name: "Number" }, serializedName: "retry-after" }
    }
  }
};