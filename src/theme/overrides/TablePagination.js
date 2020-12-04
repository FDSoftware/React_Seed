import { brandColors } from "../colors/brandColors";

const TablePagination = {
	toolbar: {
		"& .MuiTablePagination-caption:first-of-type, $selectRoot": {
			display: "none",
		},
	},
	actions: {
		"& .MuiIconButton-root": {
			color: brandColors.orange[300],
		},
	},
};

export { TablePagination };
