import { put, takeLatest, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { push } from "connected-react-router";
import { makeWorker } from "state/utils";

// Login
function* workerLogin({ payload }) {
	try {
		const { username, password, remember } = payload;

		const body = {
			grant_type: "password",
			client_id: "frg_fe",
			client_secret: "frg_fe",
			refresh_token: localStorage.getItem("refresh_token"),
			scope: "openid frg_be offline_access",
			username: username,
			password: password,
		};

		const { response, data } = yield call(services.login, body);

		switch (response.status) {
			case 200:
				localStorage.setItem("access_token", data.access_token);
				localStorage.setItem("refresh_token", data.refresh_token);
				remember && localStorage.setItem("username", username);
				yield put(actions.successLogin(data));
				yield put(push("/"));
				break;
			default:
				//en caso de un 500 u otro response no contemplado => error
				yield put(actions.failureLogin());
				break;
		}
	} catch (error) {
		yield put(actions.failureLogin(error));
	}
}
function* watchLogin() {
	yield takeLatest(types.LOGIN_REQUEST, workerLogin);
}

function* watchForgotPass() {
	const workerForgotPass = makeWorker(services.forgotPass, {
		success: actions.successForgotPass,
		fail: actions.failureForgotPass,
		retry: actions.requestForgotPass,
	});
	yield takeLatest(types.FORGOT_PASS_REQUEST, workerForgotPass);
}

const loginHook = ({ reqData }) => {
	return workerLogin({
		payload: { username: reqData.email, password: reqData.password },
	});
};

function* watchNewPass() {
	const workerNewPass = makeWorker(services.newPass, {
		success: actions.successNewPass,
		retry: actions.requestForgotPass,
		fail: actions.failureNewPass,
		hooks: { 204: loginHook },
	});
	yield takeLatest(types.NEW_PASS_REQUEST, workerNewPass);
}

// Clears flag for new pass alert after login
function workerNewPassAlertClear() {
	actions.newPassAlertClear();
}
function* watchNewPassAlertClear() {
	yield takeLatest(types.NEW_PASS_ALERT_CLEAR, workerNewPassAlertClear);
}

const defExp = [watchLogin, watchForgotPass, watchNewPass, watchNewPassAlertClear];
export default defExp;
