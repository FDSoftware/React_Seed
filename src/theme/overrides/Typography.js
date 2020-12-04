import { brandColors } from "../colors/brandColors";
// import { spacing } from "../spacing";
// import { customColors } from "../colors/customColors";
// import { interfaceColors } from "../colors/interfaceColors";

const Typography = {
	root: {
		"&:focus": {
			outline: "none",
		},
	},
	h1: {
		fontStyle: "normal",
		fontWeight: 300,
		fontSize: "3rem",
		lineHeight: "3.5rem",
	},
	h2: {
		fontStyle: "normal",
		fontWeight: 300,
		fontSize: "2.5rem",
		lineHeight: "3rem",
	},
	h3: {
		fontStyle: "normal",
		fontWeight: 300,
		fontSize: "2rem",
		lineHeight: "2.375rem",
	},
	h4: {
		fontStyle: "normal",
		fontWeight: 300,
		fontSize: "1.5rem",
		lineHeight: "1.75rem",
	},
	subtitle1: {
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: "1.5rem",
		lineHeight: "1.875rem",
	},
	body1: {
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: "1rem",
		lineHeight: "1.5rem",
	},
	subtitle2: {
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: "0.75rem",
		lineHeight: "1rem",
	},
	body2: {
		fontStyle: "normal",
		fontWeight: 300,
		fontSize: "0.75rem",
		lineHeight: "1rem",
		letterSpacing: "0.03rem",
	},
	caption: {
		color: brandColors.gray[800],
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: "0.75rem",
		lineHeight: "0.875rem",
		textTransform: "uppercase",
		letterSpacing: "1.13px",
	},
};

export { Typography };
