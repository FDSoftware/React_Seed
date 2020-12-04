import { BASE_URL, FAKE_BASE_URL } from "../constants";

/**
 * @param url endpoint al que se hace la request, (ya se incluye la URL base de constants.js)
 * @param method metodo que se utiliza en la request, por default "GET"
 * @param payload payload para insertar en el body de la request, por default undefined
 * @param json flag para indicar si el body de la request es json o urlEncoded, este ultimo es el default
 */

export const Fetch = async (
	url,
	method = "GET",
	payload,
	json = false,
	token = undefined,
	formData = false,
) => {
	if (!formData) {
		const type = json
			? "application/json"
			: "application/x-www-form-urlencoded;charset=UTF-8";

		const reqBody = payload
			? json
				? JSON.stringify(payload)
				: new URLSearchParams(payload)
			: undefined;

		const reqHeader = token
			? {
					Authorization: `Bearer ${token}`,
					Accept: "application/json",
					"Content-Type": type,
			  }
			: {
					Accept: "application/json",
					"Content-Type": type,
			  };

		const requestOptions = {
			crossDomain: true,
			method: method,
			strictSSL: false, //borrar luego
			headers: reqHeader,
			body: reqBody,
		};
		try {
			const response = await fetch(`${BASE_URL}${url}`, requestOptions);
			const textBody = await response.text();
			const data = textBody.length > 0 ? JSON.parse(textBody) : null;
			return { response, data };
		} catch (error) {
			console.error(`fetchModule error -> ${error}`);
			return error;
		}
	} else {
		const reqHeader = {
			Authorization: `Bearer ${token}`,
			Accept: "application/json",
		};

		const requestOptions = {
			crossDomain: true,
			method: method,
			strictSSL: false, //borrar luego
			headers: reqHeader,
			body: payload,
		};
		try {
			const response = await fetch(`${BASE_URL}${url}`, requestOptions);
			const textBody = await response.text();
			const data = textBody.length > 0 ? JSON.parse(textBody) : null;
			return { response, data };
		} catch (error) {
			console.error(`fetchModule error -> ${error}`);
			return error;
		}
	}
};

// Fake backend
export const fakeFetchModule = async (
	url,
	token,
	method = "GET",
	payload = undefined,
	json = false,
) => {
	const type = json
		? "application/json"
		: "application/x-www-form-urlencoded;charset=UTF-8";
	const requestOptions = {
		crossDomain: true,
		method: method,
		headers: {
			Accept: "application/json",
			"Content-Type": type,
			"X-Auth-Token": token,
		},
		body: payload,
	};
	try {
		const response = await fetch(`${FAKE_BASE_URL}${url}`, requestOptions);
		const textBody = await response.text();
		const data = textBody.length > 0 ? JSON.parse(textBody) : null;
		return { response, data };
	} catch (error) {
		console.error(`fakefetchModule error -> ${error}`);
		return { response: { status: -1, debug: error }, data: -1 };
	}
};
