import { put, call } from "redux-saga/effects";

import { workerRefresh } from "./auth/sagas/refresh.saga";

export const makeWorker = (service, actions) => {
	return function* workerSearch({ payload }) {
		//el payload adentro
		//	tiene => data (anteriormente el payload);
		//	retry => cantidad de reintentos de la solicitud
		const token = localStorage.getItem("access_token");
		const { response, data } = yield call(service, {
			token,
			payload: payload,
		}) || {};
		//	llamamos a los hooks externos si existen:
		if (actions.hooks && actions.hooks[response.status]) {
			const hookResult = actions.hooks[response.status]({
				payload: data,
				reqData: payload,
				response: response,
			});
			if (hookResult) yield put(hookResult);
		}
		if (actions.hooks?.all) {
			const hookResultAll = actions.hooks.all({
				payload: data,
				reqData: payload,
				reponse: response,
			});
			if (hookResultAll) yield put(hookResultAll);
		}
		switch (response.status) {
			case 200:
				yield payload && put(actions.success({ ...data, reqData: payload }));
				yield !payload && put(actions.success(data));
				break;
			case 201:
				yield payload && put(actions.success({ ...data, reqData: payload }));
				yield !payload && put(actions.success(data));
				break;
			case 204:
				yield payload && put(actions.success({ ...data, reqData: payload }));
				yield !payload && put(actions.success(data));
				break;
			case 401:
				console.warn("retry");
				if ((payload?.retry ? payload.retry + 1 : 1) < 10) {
					//FIXME: arreglo parcial de retry-rate por errores en identity
					yield call(workerRefresh, {});
					yield put(
						actions.retry({ ...payload, retry: payload?.retry ? payload.retry + 1 : 1 }),
					);
				} else yield put(actions.fail({ data: "token caducado" }));
				break;
			default:
				yield put(actions.fail({ ...data, reqData: payload }));
				break;
		}
	};
};

export const makeReducer = (name, extra) => {
	return {
		[name]: {
			loading: false,
			error: null,
			data: null,
			...extra,
		},
	};
};
