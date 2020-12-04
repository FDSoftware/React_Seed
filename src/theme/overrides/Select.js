import { spacing } from "../spacing";

const Select = {
	select: {
		"&:focus": {
			backgroundColor: "transparent",
		},
		"&.MuiSelect-outlined": {
			padding: `${spacing.vertical[1.5]} ${spacing.horizontal[2]}}`,
		},
	},
	outlined: {
		"&.MuiSelect-outlined": {
			paddingRight: spacing.horizontal[6],
		},
	},
};

export { Select };
