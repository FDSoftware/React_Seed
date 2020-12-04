import { brandColors } from "../colors/brandColors";
import { spacing } from "../spacing";

const Switch = {
	root: {
		width: spacing.horizontal[5],
		height: spacing.horizontal[3],
		margin: spacing.horizontal[2],
		padding: 0,
		alignItems: "center",
		justifyContent: "center",
	},
	thumb: {
		width: spacing.horizontal[2],
		height: spacing.horizontal[2],
		boxShadow: "none",
		"&:hover": {
			border: "none",
		},
	},
	track: {
		borderRadius: spacing.horizontal[3],
		border: "none",
		backgroundColor: brandColors.gray[400],
		opacity: 1,
	},
	input: {
		left: "unset",
		width: "unset",
	},
	switchBase: {
		marginLeft: spacing.horizontal[0.5],
		top: "unset",
		padding: 1,
		"&$disabled + $track": {
			opacity: 1,
		},
		"&.MuiSwitch-colorSecondary$checked": {
			color: brandColors.white[500],
			transform: `translateX(${spacing.horizontal[2]})`,
			"& + $track": {
				border: "none",
				opacity: 1,
				backgroundColor: brandColors.orange[500],
			},
			"&$disabled": {
				color: brandColors.gray[400],
				"& + $track": {
					backgroundColor: brandColors.gray[200],
				},
			},
		},
	},
	colorSecondary: {
		"&$disabled": {
			color: brandColors.gray[400],
		},
		"&$disabled + $track": {
			backgroundColor: brandColors.gray[200],
		},
	},
};

export { Switch };
