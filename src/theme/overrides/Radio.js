import { brandColors } from "../colors/brandColors";
import { spacing } from "../spacing";

const Radio = {
	root: {
		color: brandColors.gray[500],
	},
	colorSecondary: {
		padding: spacing.horizontal[1],
		marginRight: spacing.horizontal[1],
		"&.Mui-focusVisible": {
			backgroundColor: brandColors.gray[300],
		},
		"&$checked": {
			color: brandColors.orange[500],
		},
		"&$checked:hover": {
			backgroundColor: "transparent!important",
		},
		"& .MuiTouchRipple-root": {
			display: "none",
		},
	},
};

export { Radio };
