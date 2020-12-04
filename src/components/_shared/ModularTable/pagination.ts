export const paginationHandler = (data: Array<any>, rows: number) => (
	newpage: number,
) => {
	if (!newpage) return data?.slice(0, rows);
	return data?.slice(rows * newpage, rows * newpage + rows);
};
