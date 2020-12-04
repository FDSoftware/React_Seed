import { brandColors } from "../colors/brandColors";
import { spacing } from "../spacing";
import { customColors } from "../colors/customColors";
import { interfaceColors } from "../colors/interfaceColors";

const Alert = {
	root: {
		alignItems: "center",
		borderRadius: spacing.radius[1],
		borderStyle: "solid",
		borderWidth: "1px",
		boxShadow: customColors.shadow["boxShadow"],
		fontSize: "1rem",
		padding: `${spacing.vertical["0.5"]} ${spacing.horizontal["2"]}`,
		top: "5rem",
		width: "550px",
		"& .MuiAlert-icon": {
			marginLeft: spacing.horizontal["1"],
			marginRight: spacing.horizontal["3"],
		},
		"& .MuiAlert-action": {
			marginRight: spacing.horizontal["1"],
		},
	},
	message: {
		color: brandColors.gray[800],
	},
	standardInfo: {
		backgroundColor: brandColors.gray[100],
		borderColor: brandColors.gray[200],
		"& .MuiAlert-icon": {
			color: brandColors.orange[400],
		},
	},
	standardSuccess: {
		backgroundColor: interfaceColors.green[100],
		borderColor: interfaceColors.green[200],
		"& .MuiAlert-icon": {
			color: interfaceColors.green[400],
		},
		"& .MuiAlert-action": {
			color: interfaceColors.green[700],
		},
	},
	standardError: {
		backgroundColor: interfaceColors.red[100],
		borderColor: interfaceColors.red[200],
		"& .MuiAlert-icon": {
			color: interfaceColors.red[400],
		},
	},
	standardWarning: {
		backgroundColor: brandColors.yellow[100],
		borderColor: brandColors.yellow[200],
		"& .MuiAlert-icon": {
			color: brandColors.yellow[400],
		},
	},
};

export { Alert };
