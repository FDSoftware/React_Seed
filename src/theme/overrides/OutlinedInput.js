import { brandColors } from "../colors/brandColors";
import { spacing } from "../spacing";
import { interfaceColors } from "../colors/interfaceColors";

const OutlinedInput = {
	root: {
		// color: brandColors.orange[700],
		borderRadius: "0.75rem",
		backgroundColor: brandColors.white[500],
		"& $notchedOutline": {
			borderWidth: "1px",
			borderRadius: "0.75rem",
			borderStyle: "solid",
			borderColor: brandColors.gray[400],
			"& $legend": {
				display: "none",
			},
		},
		"&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
			borderColor: brandColors.gray[500],
			"@media (hover: none)": {
				borderColor: brandColors.gray[500],
			},
		},
		"&$focused $notchedOutline": {
			borderColor: brandColors.orange[300],
			boxShadow: `0px 0px 0px 3px ${brandColors.gray[300]}`,
		},
		"&:error $notchedOutline": {
			borderColor: interfaceColors.red[500],
		},
		"&$disabled": {
			borderWidth: "1px",
			borderRadius: "0.75rem",
			borderColor: brandColors.gray[300],
			backgroundColor: brandColors.gray[100],
			color: brandColors.gray[500],
		},
		"&$disabled $notchedOutline": {
			borderColor: brandColors.gray[300],
		},
	},
	inputMarginDense: {
		padding: `${spacing.vertical[2]} ${spacing.horizontal[2]}}`,
	},
	inputMultiline: {
		padding: 0,
	},
	multiline: {
		padding: `${spacing.vertical[1.5]} ${spacing.horizontal[2]}}`,
	},
	input: {
		padding: `${spacing.vertical[2]} ${spacing.horizontal[2]}}`,
		lineHeight: spacing.vertical[1],
	},
};

export { OutlinedInput };
