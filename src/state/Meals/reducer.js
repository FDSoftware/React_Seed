import mealsDuck from ".";
import * as types from "./types";
import { makeReducer } from "../utils";

export const initialState = {
	...makeReducer("meals"),
	...makeReducer("meals_add"),
	...makeReducer("meals_edit"),
};

const reducer = mealsDuck.createReducer(
	{
		[types.MEALS_REQUEST]: (state) => ({
			...state,
			meals: {
				loading: true,
				error: null,
				data: state.meals.data,
			},
		}),
		[types.MEALS_SUCCESS]: (state, { payload }) => ({
			...state,
			meals: {
				loading: false,
				error: null,
				data: payload,
			},
		}),
		[types.MEALS_FAILURE]: (state, { payload }) => ({
			...state,
			meals: {
				loading: false,
				error: payload,
				data: null,
			},
		}),
		// Add meal
		[types.MEALS_ADD_REQUEST]: (state) => ({
			...state,
			meals_add: {
				loading: true,
				error: null,
				data: null,
			},
		}),
		[types.MEALS_ADD_SUCCESS]: (state, { payload }) => ({
			...state,
			meals_add: {
				loading: false,
				error: null,
				data: payload,
			},
		}),
		[types.MEALS_ADD_FAILURE]: (state, { payload }) => ({
			...state,
			meals_add: {
				loading: false,
				error: payload,
				data: null,
			},
		}),

		// Edit meal
		[types.MEALS_EDIT_REQUEST]: (state) => ({
			...state,
			meals_edit: {
				loading: true,
				error: null,
				data: null,
			},
		}),
		[types.MEALS_EDIT_SUCCESS]: (state, { payload }) => ({
			...state,
			meals_edit: {
				loading: false,
				error: null,
				data: payload,
			},
		}),
		[types.MEALS_EDIT_FAILURE]: (state, { payload }) => ({
			...state,
			meals_edit: {
				loading: false,
				error: payload,
				data: null,
			},
		}),

		[types.MEALS_CLEAR_DUCK]: () => initialState,
	},
	initialState,
);

export default reducer;
