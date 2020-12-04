import React from "react";
import { Check } from "react-feather";

import snackbar from ".";
import * as types from "./types";

export const initialState = {
	open: false,
	duration: 2000,
	msg: "",
	severity: "success",
	icon: <Check />,
	anchor: {
		vertical: "top",
		horizontal: "center",
	},
};

const reducer = snackbar.createReducer(
	{
		[types.SNACKBAR_REQUEST]: (state, { payload }) => ({
			...state,
			open: true,
			duration: payload?.duration ?? initialState.duration,
			msg: payload?.msg ?? "",
			severity: payload?.severity ?? initialState.severity,
			icon: payload?.icon ?? initialState.icon,
			anchor: payload?.anchor ?? initialState.anchor,
		}),
		[types.SNACKBAR_CLEAR]: () => ({
			...initialState,
			loading: false,
		}),
		[types.SNACKBAR_CLEAR_DUCK]: () => initialState,
	},
	initialState,
);

export default reducer;
