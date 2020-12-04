import { brandColors } from "../colors/brandColors";
import { customColors } from "../colors/customColors";
import { spacing } from "../spacing";

const ExpansionPanel = {
	root: {
		border: `1px solid ${brandColors.gray[300]}`,
		borderRadius: spacing.radius[1],
		boxShadow: customColors.shadow.boxShadow,
	},
};

export { ExpansionPanel };
