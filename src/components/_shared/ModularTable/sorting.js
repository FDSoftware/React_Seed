const stableSortHelper = (e) => String(e).toLowerCase();

export function stableSort(array, orderDir, orderBy) {
	// creamos un nuevo array con el indice del original y el campo a comparar
	const mapped = array.map((el, i) => {
		return { index: i, value: stableSortHelper(el[orderBy]) };
	});
	// comparamos los campos
	mapped.sort((a, b) => {
		if (orderDir === "desc") return descendingComparator(a.value, b.value);
		return -descendingComparator(a.value, b.value);
	});
	// creamos nuevo array a base del indice comparado anteriormente
	const result = mapped.map(function (el) {
		return array[el.index];
	});
	return result;
}

export function descendingComparator(a, b) {
	if (b < a) return -1;
	if (b > a) return 1;
	return 0;
}
