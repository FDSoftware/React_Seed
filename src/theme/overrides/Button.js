import { brandColors } from "../colors/brandColors";
import { spacing } from "../spacing";

const Button = {
	root: {
		fontFamily: "Poppins Medium",
		// fontWeight: 500,
		textTransform: "unset",
		fontSize: "1rem",
		flexShrink: "0",
		// height: spacing.horizontal[5],
		borderRadius: "12px",
		padding: `12px 32px`,
	},
	label: {
		fontFamily: "Poppins",
		fontWeight: 300,
	},
	sizeSmall: {
		padding: `0 ${spacing.horizontal[3]} 0 ${spacing.horizontal[3]}`,
		// height: spacing.horizontal[4],
	},
	sizeLarge: {
		padding: `18px 24px`,
		// height: spacing.horizontal[5],
	},
	text: {
		// color: brandColors.orange.base,
		padding: "1rem 2rem",
		"&:hover": {
			// backgroundColor: "transparent",
		},
	},
	outlined: {
		// color: brandColors.orange.base,
		padding: `0 ${spacing.horizontal[4]} 0 ${spacing.horizontal[4]}`,
		border: `2px solid ${brandColors.orange.base}`,
		borderRadius: "12px",
		"&:hover": {
			// backgroundColor: brandColors.yellow[600],
		},
	},
	contained: {
		// backgroundColor: brandColors.orange.base,
		// color: brandColors.orange.base,
		boxShadow: "none",
		"&:hover": {
			// backgroundColor: brandColors.yellow[600],
			boxShadow: "none",
		},
		"&:active": {
			// backgroundColor: brandColors.yellow[600],
			boxShadow: "none",
		},
		"&:disabled": {
			// backgroundColor: brandColors.gray[500],
			// color: brandColors.white[500],
		},
		"&:not(:disabled)[type=submit]": {
			// backgroundColor: brandColors.orange[500],
		},
	},
};

export { Button };
