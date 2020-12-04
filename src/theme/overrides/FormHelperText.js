import { brandColors } from "../colors/brandColors";
import { interfaceColors } from "../colors/interfaceColors";

const FormHelperText = {
	root: {
		color: brandColors.gray[500],
		"&.Mui-error": {
			color: interfaceColors.red[500],
		},
		"&.Mui-disabled": {
			color: brandColors.gray[600],
		},
	},
	contained: {
		marginLeft: 0,
	},
};

export { FormHelperText };
