import { brandColors } from "../colors/brandColors";

const FormControlLabel = {
	root: {
		color: brandColors.orange[800],
	},
	label: {
		"&$disabled": {
			color: brandColors.gray[500],
		},
	},
};

export { FormControlLabel };
