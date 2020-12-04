import { brandColors } from "../colors/brandColors";
import { interfaceColors } from "../colors/interfaceColors";

const FormLabel = {
	root: {
		color: brandColors.orange[800],
		"&:hover": {
			color: brandColors.orange[800],
		},
		"&.Mui-focused": {
			color: brandColors.orange[800],
		},
		"&.Mui-error": {
			color: interfaceColors.red[500],
		},
		"&.Mui-focused.Mui-error": {
			color: interfaceColors.red[500],
		},
		"&.Mui-disabled": {
			color: brandColors.gray[600],
		},
	},
};

export { FormLabel };
