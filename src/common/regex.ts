export const regex = {
	name: /\b[A-Za-z]+\b/,
	lastname: /\b[A-Za-z]+\b/,
	dni: /(^\d{7,8}$)/, //DNI con puntos => /(^\d{1,2}\.?\d{3}\.?\d{3}$)/
	phone: /(^\d{5,11}$)/,
	email: /^(([a-z]|[0-9]){1,30}(.|-|_)?)+@([a-z])+(\.[a-z]+){1,3}$/,
	occupation: /d/,
	user: /^(\w|\d|\.){2,15}$/,
};
