import sessionDuck from ".";
import * as types from "./types";

export const initialState = {
	login: {
		loading: false,
		error: false,
		data: null,
	},
	forgot_pass: {
		loading: false,
		error: false,
		data: null,
	},
	new_pass: {
		loading: false,
		error: false,
		data: null,
		alert: false,
	},
};

const reducer = sessionDuck.createReducer(
	{
		[types.LOGIN_REQUEST]: (state) => ({
			...state,
			login: {
				loading: true,
				error: false,
				data: null,
			},
		}),
		[types.LOGIN_SUCCESS]: (state, { payload }) => ({
			...state,
			login: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.LOGIN_FAILURE]: (state) => ({
			...state,
			login: {
				loading: false,
				error: true,
				data: null,
			},
		}),

		[types.REFRESH_TOKEN_REQUEST]: (state) => ({
			...state,
			refresh_token: {
				loading: true,
				error: false,
				data: null,
			},
		}),
		[types.REFRESH_TOKEN_SUCCESS]: (state, { payload }) => ({
			...state,
			refresh_token: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.REFRESH_TOKEN_FAILURE]: (state) => ({
			...state,
			refresh_token: {
				loading: false,
				error: true,
				data: null,
			},
		}),

		[types.FORGOT_PASS_REQUEST]: (state) => ({
			...state,
			forgot_pass: {
				loading: true,
				error: false,
				data: null,
			},
		}),
		[types.FORGOT_PASS_SUCCESS]: (state, { payload }) => ({
			...state,
			forgot_pass: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.FORGOT_PASS_FAILURE]: (state) => ({
			...state,
			forgot_pass: {
				loading: false,
				error: true,
				data: null,
			},
		}),

		[types.NEW_PASS_REQUEST]: (state) => ({
			...state,
			new_pass: {
				loading: true,
				error: null,
				data: null,
			},
		}),
		[types.NEW_PASS_SUCCESS]: (state, { payload }) => ({
			...state,
			new_pass: {
				loading: false,
				error: false,
				data: payload,
				alert: true,
			},
		}),
		[types.NEW_PASS_FAILURE]: (state, { payload }) => ({
			...state,
			new_pass: {
				loading: false,
				error: payload,
				data: null,
			},
		}),
		[types.NEW_PASS_ALERT_CLEAR]: (state) => ({
			...state,
			new_pass: {
				...state.new_pass,
				alert: false,
			},
		}),
		[types.CLEAR_AUTH_DUCK]: () => initialState,
	},
	initialState,
);

export default reducer;
