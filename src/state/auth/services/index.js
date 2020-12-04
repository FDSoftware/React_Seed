import httpModule from "common/http";

export const login = (payload) => httpModule.login("identity/connect/token", payload);

export const forgotPass = ({ payload }) =>
	httpModule.post("users/v1/user/forgotpassword", { email: payload });

export const newPass = ({ payload: { email, password, token } }) => {
	const _payload = {
		email: email,
		password: password,
		confirmPassword: password,
		token: token,
	};

	return httpModule.post("users/v1/user/resetpassword", _payload);
};

export const refreshToken = (payload) =>
	httpModule.post("identity/connect/token", payload, false);
