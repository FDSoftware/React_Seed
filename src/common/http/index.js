import { fakeFetchModule, Fetch } from "./utils";

export const httpModule = {
	async login(url, payload) {
		try {
			const { response, data } = await Fetch(url, "POST", payload);
			//const { response, data } = await authModule(url, payload);
			return { response, data };
		} catch (error) {
			console.error(`httpModule.login error -> ${error}`);
		}
	},
	async post(url, payload, json = true, token) {
		try {
			const { response, data } = await Fetch(url, "POST", payload, json, token);
			return { response, data };
		} catch (error) {
			console.error(`httpModule.post error [POST]-> ${error}`);
		}
	},
	async postFormData(url, payload, token) {
		try {
			const { response, data } = await Fetch(url, "POST", payload, false, token, true);
			return { response, data };
		} catch (error) {
			console.error(`httpModule.post error [POST]-> ${error}`);
		}
	},
	async get(url, token) {
		try {
			const { response, data } = await Fetch(url, "GET", undefined, false, token);
			return { response, data };
		} catch (error) {
			console.error(`httpModule.get error [GET]-> ${error}`);
		}
	},
	async put(url, payload, json = true, token) {
		try {
			const { response, data } = await Fetch(url, "PUT", payload, json, token);
			return { response, data };
		} catch (error) {
			console.error(`httpModule.post error [PUT]-> ${error}`);
		}
	},
	async delete(url, payload, token, json = true) {
		try {
			const { response, data } = await Fetch(url, "DELETE", payload, json, token);
			return { response, data };
		} catch (error) {
			console.error(`httpModule.post error [DELETE]-> ${error}`);
		}
	},
};

//arrow para concatenar parametros url ej : api?param1=foo&param2=bar
export const encodeParams = (params) =>
	`?${params.map((e) => `${e.param}=${e.val}&`)}`.slice(0, -1).replace(/,/gi, "");

// Modulo fakeBackend
export const fakeHttpModule = {
	async get(url, token) {
		try {
			const { response, data } = await fakeFetchModule(url, token);
			return { response, data };
		} catch (error) {
			console.error(`fakeHttpModule error [GET] -> ${error}`);
		}
	},
	// Payload tiene que tener JSON.stringify(payload)
	async post(url, token, payload, json = false) {
		try {
			const { response, data } = await fakeFetchModule(url, token, "POST", payload, json);
			return { response, data };
		} catch (error) {
			console.error(`fakeHttpModule error [POST]-> ${error}`);
		}
	},
	// Payload tiene que tener JSON.stringify(payload)
	async put(url, token, payload, json = false) {
		try {
			const { response, data } = await fakeFetchModule(url, token, "PUT", payload, json);
			return { response, data };
		} catch (error) {
			console.error(`fakeHttpModule error [PUT] -> ${error}`);
		}
	},
	async delete(url, token) {
		try {
			const { response, data } = await fakeFetchModule(url, token, "DELETE");
			return { response, data };
		} catch (error) {
			console.error(`httpModule error [DELETE] -> ${error}`);
		}
	},
};

export default httpModule;
