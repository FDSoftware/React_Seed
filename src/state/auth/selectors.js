import { createSelector } from "reselect";

const AuthReducer = ({ Auth }) => Auth;

export const loginSelector = createSelector([AuthReducer], (Auth) => Auth.login);

export const forgotPassSelector = createSelector(
	[AuthReducer],
	(Auth) => Auth.forgot_pass,
);

export const newPassSelector = createSelector([AuthReducer], (Auth) => Auth.new_pass);

export const newPassAlertSelector = createSelector(
	[AuthReducer],
	(Auth) => Auth.new_pass.alert,
);

const routerReducer = ({ router }) => router;

export const querySelector = createSelector(
	[routerReducer],
	(router) => router.location.query,
);
