import { brandColors } from "../colors/brandColors";
import { spacing } from "../spacing";
import { customColors } from "../colors/customColors";

const Paper = {
	root: {
		border: `1px solid ${brandColors.gray[200]}`,
		boxShadow: `${customColors.shadow.boxShadow} !important`,
		borderRadius: spacing.radius[1],
		marginTop: "0 !important",
		"& .MuiList-root": {
			padding: "0px !important",
			"& .MuiListItem-root": {
				padding: `${spacing.vertical[2]} ${spacing.horizontal[2]}}`,
				// color: brandColors.orange[700],
				"&.Mui-selected, &.Mui-selected:hover": {
					backgroundColor: brandColors.gray[300],
				},
				"&:hover, &:focus": {
					backgroundColor: brandColors.gray[200],
				},
				"&:active": {
					backgroundColor: brandColors.gray[300],
				},
			},
			"& .MuiButtonBase-root": {
				borderBottom: `1px solid ${brandColors.gray[200]}`,
			},
			"& .MuiListItem-button": {
				borderBottom: `1px solid ${brandColors.gray[200]}`,
			},
		},
	},
	rounded: {
		borderRadius: spacing.radius[1],
	},
};

export { Paper };
