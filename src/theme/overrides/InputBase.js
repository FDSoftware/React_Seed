import { brandColors } from "../colors/brandColors";
import { spacing } from "../spacing";

const InputBase = {
	root: {
		padding: 0,
		lineHeight: spacing.vertical[1],
		"& .MuiChip-label": {
			lineHeight: "2rem",
		},
	},
	input: {
		animation: "none",
		height: "auto",
		lineHeight: spacing.vertical[3],
		"&::placeholder": {
			color: brandColors.gray[500],
			opacity: "1",
		},
		"&:focus::placeholder": {
			color: "transparent",
		},
	},
	inputMultiline: {
		padding: "0 !important",
		lineHeight: spacing.vertical[3],
	},
	inputMarginDense: {
		fontSize: spacing.vertical[3],
		lineHeight: `${spacing.vertical[4]} !important`,
	},
};

export { InputBase };
