import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";
// import { httpModule } from "common/http";

// orga: 4e195d2c-1f26-11eb-adc1-0242ac120002
// producto: 5f6efeba-1f26-11eb-adc1-0242ac120002

export const workerUploadProductImage = makeWorker(
	services.uploadImage("images/v1/products/uploadproductimage"),
	{
		success: actions.uploadImageSuccess,
		fail: actions.uploadImageFailure,
		retry: actions.uploadImageRequest,
		//hooks: { all: imageHook },
	},
);

export function* watchUploadProductImage() {
	yield takeLatest(types.UPLOAD_PRODUCT_IMAGE_REQUEST, workerUploadProductImage);
}

const defExp = [watchUploadProductImage];
export default defExp;
