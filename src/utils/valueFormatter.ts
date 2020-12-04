/**
 *	## dateFormatter
 * Toma un objeto Date y extrae los parámetros y devuelve un objeto con los mismos
 *
 * @param date fecha a formatear
 * @returns \{ year, month, day, hours, minutes, seconds \} ex => \{"2020", "5", "20", "18", "30", "15" \}
 */

const dateFormatter = (date: Date) => {
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const year = date.getUTCFullYear();
	const month = date.getUTCMonth() + 1;
	const monthStr = monthNames[date.getUTCMonth()];
	const day = date.getUTCDate();
	const hours = date.getUTCHours();
	const minutes = date.getUTCMinutes();
	const seconds = date.getUTCSeconds();
	return { year, month, monthStr, day, hours, minutes, seconds };
};

/**
 *	## numberFormatter
 * formatea un numero al esquema planteado en el figma,
 * para evitar usar locates se hace manualmente, para eso se realiza lo siguiente
 *
 * 	1- almacena las fraciones en "fractions", y se agrega padding en caso que sea necesario
 * 	2- para las unidades, se tiene que dar vuelta el numero con la reverse() (5000 pasa a 0005)
 * 	3- utiliza separe() para devolver un array con el numero separado en tokens de 3 digitos
 * 	4- realiza un .join() para introducir el punto
 * 	5- utiliza reverse() para devolver el numero en el formato correcto
 *
 * @param input numero a formatear ex => 5000.65
 * @returns [digit, fractions] ex=> ['5.000' '65']
 */

const numberFormatter = (input: number) => {
	const fractions = Math.round((input - Math.floor(input)) * 100)
		.toString()
		.padStart(2, "0");

	const reverse = (input: string) => input.split("").reverse().join("");
	const separe = (input: string) => input.split(/(.{3})/).filter((O) => O);

	const digit = reverse(separe(reverse(Math.floor(input).toString())).join("."));
	return [digit, fractions];
};

export { numberFormatter, dateFormatter };
