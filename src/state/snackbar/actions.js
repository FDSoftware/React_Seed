import snackbar from ".";
import * as types from "./types";

export const requestSnack = snackbar.createAction(types.SNACKBAR_REQUEST);
export const clearSnack = snackbar.createAction(types.SNACKBAR_CLEAR);

//Clear duck:
export const clearDuck = snackbar.createAction(types.SNACKBAR_CLEAR_DUCK);
