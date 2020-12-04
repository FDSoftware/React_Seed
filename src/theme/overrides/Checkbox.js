import { brandColors } from "../colors/brandColors";
import { spacing } from "../spacing";

const Checkbox = {
	colorSecondary: {
		color: brandColors.gray[300],
		"&:hover": {
			color: brandColors.gray[400],
			backgroundColor: "transparent",
		},
		"&$checked": {
			color: brandColors.orange[500],
			backgroundColor: "transparent",
			"&:hover": {
				backgroundColor: "transparent",
				color: brandColors.orange[400],
			},
		},
		"&$disabled": {
			color: brandColors.gray[200],
			"&$checked .MuiSvgIcon-root": {
				borderRadius: spacing.horizontal[0.5],
				backgroundColor: brandColors.gray[400],
			},
		},
	},
};

export { Checkbox };
