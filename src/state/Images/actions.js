import imageDuck from ".";
import * as types from "./types";

export const uploadImageRequest = imageDuck.createAction(types.UPLOAD_PRODUCT_IMAGE_REQUEST);
export const uploadImageSuccess = imageDuck.createAction(types.UPLOAD_PRODUCT_IMAGE_SUCCESS);
export const uploadImageFailure = imageDuck.createAction(types.UPLOAD_PRODUCT_IMAGE_FAILURE);

//Clear duck:
export const clearDuck = imageDuck.createAction(types.UPLOAD_IMAGE_CLEAR_DUCK);
