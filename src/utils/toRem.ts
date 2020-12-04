const toRem = (unit: string) => {
	const unitConverted = parseInt(unit);
	return `${unitConverted / 16}rem`;
};

export { toRem };
