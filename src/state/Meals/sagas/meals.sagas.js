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

export function* watchGetMeals() {
	const workerGetMeals = makeWorker(services.getMeals, {
		success: actions.mealsSuccess,
		fail: actions.mealsFailure,
		retry: actions.mealsRequest,
		//hooks: { all: debugHook },
	});
	yield takeLatest(types.MEALS_REQUEST, workerGetMeals);
}

export function* watchAddMeals() {
	const workerAddMeals = makeWorker(services.addMeal, {
		success: actions.mealsAddSuccess,
		fail: actions.mealsAddFailure,
		retry: actions.mealsAddRequest,
		hooks: { all: debugHook },
	});
	yield takeLatest(types.MEALS_ADD_REQUEST, workerAddMeals);
}

const defExp = [watchGetMeals, watchAddMeals];
export default defExp;
