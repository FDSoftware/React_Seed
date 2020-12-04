import { brandColors } from "../colors/brandColors";

const Link = {
	root: {
		color: brandColors.gray[500],
		fontFamily: "Poppins Medium",
		fontWeight: 500,
		fontSize: "1rem",
		lineHeight: "1.1875rem",
		cursor: "pointer",
		"&:hover": {
			color: brandColors.gray[400],
		},
	},
	underlineHover: {
		"&:hover": {
			textDecoration: "none",
		},
	},
};

export { Link };
