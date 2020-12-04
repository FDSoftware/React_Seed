import { fork, all } from "redux-saga/effects";
// Sagas

import { sagas as sessionSagas } from "state/auth/sagas";
import { sagas as mealsSagas } from "state/Meals/sagas";
import { sagas as imageSagas } from "state/Images/sagas";

const allSagas = [...sessionSagas, ...mealsSagas, ...imageSagas];

export default function* rootSaga() {
	yield all(allSagas.map((saga) => fork(saga)));
}
