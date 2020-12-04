import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

const debugHook = ({ payload, reqData, reponse }) => {
	/* eslint-disable no-console */
	console.log(reqData);
	console.log(payload);
	console.log(reponse);
	/* eslint-enable no-console */
};

export function* watchGetPlanner() {
	const workerGetPlanner = makeWorker(services.getPlanner, {
		success: actions.plannerSuccess,
		fail: actions.plannerFailure,
		retry: actions.plannerRequest,
		//hooks: { all: debugHook },
	});
	yield takeLatest(types.MEALS_REQUEST, workerGetPlanner);
}

export function* watchAddPlanner() {
	const workerAddPlanner = makeWorker(services.addMeal, {
		success: actions.plannerAddSuccess,
		fail: actions.plannerAddFailure,
		retry: actions.plannerAddRequest,
		hooks: { all: debugHook },
	});
	yield takeLatest(types.MEALS_ADD_REQUEST, workerAddPlanner);
}

const defExp = [watchGetPlanner, watchAddPlanner];
export default defExp;
