export const passwordValidation = (value: string) => {
	if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/.test(value)) {
		return true;
	} else {
		return false;
	}
};

export const numberValidation = (value: string) => {
	if (/^([0-9]\d*(\.)\d*|0?(\.)\d*[0-9]\d*|[0-9]\d*)$/.test(value)) {
		return true;
	} else {
		return false;
	}
};

export const integerValidation = (value: string) => {
	if (/(^\d{0,9}$)/.test(value)) {
		return true;
	} else {
		return false;
	}
};

export const userRegex: any = {
	firstname: /^[\s\w]{2,20}/,
	lastname: /^[\s\w]{2,20}/,
	idDocument: /(^\d{7,8}$)/,
	email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/,
	phoneNumber: /(^\d{5,11}$)/,
	occupation: /^[\s\w]{1,20}/,
};
