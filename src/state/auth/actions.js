import sessionDuck from ".";
import * as types from "./types";

export const requestLogin = sessionDuck.createAction(types.LOGIN_REQUEST);
export const successLogin = sessionDuck.createAction(types.LOGIN_SUCCESS);
export const failureLogin = sessionDuck.createAction(types.LOGIN_FAILURE);

export const requestRefreshToken = sessionDuck.createAction(types.REFRESH_TOKEN_REQUEST);
export const successRefreshToken = sessionDuck.createAction(types.REFRESH_TOKEN_SUCCESS);
export const failureRefreshToken = sessionDuck.createAction(types.REFRESH_TOKEN_FAILURE);

export const requestForgotPass = sessionDuck.createAction(types.FORGOT_PASS_REQUEST);
export const successForgotPass = sessionDuck.createAction(types.FORGOT_PASS_SUCCESS);
export const failureForgotPass = sessionDuck.createAction(types.FORGOT_PASS_FAILURE);

export const requestNewPass = sessionDuck.createAction(types.NEW_PASS_REQUEST);
export const successNewPass = sessionDuck.createAction(types.NEW_PASS_SUCCESS);
export const failureNewPass = sessionDuck.createAction(types.NEW_PASS_FAILURE);

export const newPassAlert = sessionDuck.createAction(types.NEW_PASS_ALERT);
export const newPassAlertClear = sessionDuck.createAction(types.NEW_PASS_ALERT_CLEAR);

//Clear duck:
export const clearDuck = sessionDuck.createAction(types.CLEAR_AUTH_DUCK);
