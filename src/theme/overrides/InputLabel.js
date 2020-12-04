import { brandColors } from "../colors/brandColors";
import { spacing } from "../spacing";

const InputLabel = {
	root: {
		color: brandColors.orange[800],
		marginBottom: spacing.vertical["2"],
		"&$focused": {
			color: brandColors.orange[800],
		},
		"&[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::placeholder": {
			opacity: "1 !important",
			color: brandColors.gray[500],
		},
	},
	shrink: {
		transform: "translate(0,1.5px) ",
	},
	outlined: {
		zIndex: 0,
		transform: "translate(0,1.5px) ",
		"&$shrink": {
			transform: "translate(0,1.5px) ",
		},
		"&.MuiInputLabel-marginDense": {
			transform: "translate(0,1.5px) ",
		},
	},
	formControl: {
		position: "relative",
		transform: "none",
	},
};

export { InputLabel };
