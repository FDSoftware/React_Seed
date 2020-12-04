import imageDuck from ".";
import * as types from "./types";
import { makeReducer } from "../utils";

export const initialState = {
	...makeReducer("upload"),
};

const reducer = imageDuck.createReducer(
	{
		[types.UPLOAD_PRODUCT_IMAGE_REQUEST]: (state) => ({
			...state,
			upload: {
				loading: true,
				error: null,
				data: state.upload.data,
			},
		}),
		[types.UPLOAD_PRODUCT_IMAGE_SUCCESS]: (state, { payload }) => ({
			...state,
			upload: {
				loading: false,
				error: null,
				data: payload,
			},
		}),
		[types.UPLOAD_PRODUCT_IMAGE_FAILURE]: (state, { payload }) => ({
			...state,
			upload: {
				loading: false,
				error: payload,
				data: null,
			},
		}),
		
		[types.UPLOAD_IMAGE_CLEAR_DUCK]: () => initialState,
	},
	initialState,
);

export default reducer;
