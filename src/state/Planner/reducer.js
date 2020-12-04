import plannerDuck from ".";
import * as types from "./types";
import { makeReducer } from "../utils";

export const initialState = {
	...makeReducer("planner"),
	...makeReducer("planner_add"),
	...makeReducer("planner_edit"),
};

const reducer = plannerDuck.createReducer(
	{
		[types.PLANNER_REQUEST]: (state) => ({
			...state,
			planner: {
				loading: true,
				error: null,
				data: state.planner.data,
			},
		}),
		[types.PLANNER_SUCCESS]: (state, { payload }) => ({
			...state,
			planner: {
				loading: false,
				error: null,
				data: payload,
			},
		}),
		[types.PLANNER_FAILURE]: (state, { payload }) => ({
			...state,
			planner: {
				loading: false,
				error: payload,
				data: null,
			},
		}),
		// Add meal
		[types.PLANNER_ADD_REQUEST]: (state) => ({
			...state,
			planner_add: {
				loading: true,
				error: null,
				data: null,
			},
		}),
		[types.PLANNER_ADD_SUCCESS]: (state, { payload }) => ({
			...state,
			planner_add: {
				loading: false,
				error: null,
				data: payload,
			},
		}),
		[types.PLANNER_ADD_FAILURE]: (state, { payload }) => ({
			...state,
			planner_add: {
				loading: false,
				error: payload,
				data: null,
			},
		}),

		// Edit meal
		[types.PLANNER_EDIT_REQUEST]: (state) => ({
			...state,
			planner_edit: {
				loading: true,
				error: null,
				data: null,
			},
		}),
		[types.PLANNER_EDIT_SUCCESS]: (state, { payload }) => ({
			...state,
			planner_edit: {
				loading: false,
				error: null,
				data: payload,
			},
		}),
		[types.PLANNER_EDIT_FAILURE]: (state, { payload }) => ({
			...state,
			planner_edit: {
				loading: false,
				error: payload,
				data: null,
			},
		}),

		[types.PLANNER_CLEAR_DUCK]: () => initialState,
	},
	initialState,
);

export default reducer;
