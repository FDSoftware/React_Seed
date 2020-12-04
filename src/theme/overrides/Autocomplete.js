import { brandColors } from "../colors/brandColors";
import { spacing } from "../spacing";
import { customColors } from "../colors/customColors";

const Autocomplete = {
	inputRoot: {
		width: "100%",
		"& .MuiAutocomplete-input:first-child": {
			padding: "0 !important",
			paddingRight: `${spacing.horizontal[3]} !important`,
		},
		"&[class*=MuiOutlinedInput-root]": {
			padding: `${spacing.vertical[1.5]} ${spacing.horizontal[2]}}`,
		},
	},
	noOptions: {
		padding: `${spacing.vertical[2]} ${spacing.horizontal[3]} ${spacing.vertical[2]} ${spacing.horizontal[2]} `,
		color: brandColors.gray[500],
	},
	loading: {
		color: brandColors.gray[500],
	},
	popper: {
		display: "block !important",
		border: `1px solid ${brandColors.gray[200]}`,
		boxShadow: `${customColors.shadow.boxShadow} !important`,
		borderRadius: spacing.radius[1],
		"& .MuiAutocomplete-paper": {
			"& .MuiAutocomplete-listbox": {
				padding: "0",
				"& .MuiAutocomplete-option": {
					padding: `${spacing.vertical[2]} ${spacing.horizontal[3]} ${spacing.vertical[2]} ${spacing.horizontal[2]} `,
					color: brandColors.gray[500],
					borderBottom: `1px solid ${brandColors.gray[200]}`,
				},
			},
		},
	},
	paper: {
		marginBottom: "0",
	},
	option: {
		"&[aria-selected=true]": {
			backgroundColor: brandColors.gray[300],
		},
		"&[data-focus=true]": {
			backgroundColor: brandColors.gray[200],
		},
	},
};

export { Autocomplete };
