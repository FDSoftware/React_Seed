import { put, takeLatest, call } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { push } from "connected-react-router";

export function* workerRefresh() {
	try {
		const body = {
			client_id: "frg_fe",
			grant_type: "refresh_token",
			client_secret: "frg_fe",
			refresh_token: localStorage.getItem("refresh_token"),
			scope: "openid frg_be refresh_token",
		};

		const { response, data } = yield call(services.refreshToken, body);

		switch (response.status) {
			case 200:
				localStorage.setItem("access_token", data.access_token);
				localStorage.setItem("refresh_token", data.refresh_token);
				yield put(actions.successLogin(data));
				break;
			default:
				//en caso de un 500 u otro response no contemplado => error
				localStorage.removeItem("access_token");
				localStorage.removeItem("refresh_token");
				yield put(actions.failureLogin());
				yield put(push("/login"));
				break;
		}
	} catch (error) {
		yield put(actions.failureLogin(error));
	}
}

function* watchRefresh() {
	yield takeLatest(types.REFRESH_REQUEST, workerRefresh);
}

const defExp = [watchRefresh];
export default defExp;
