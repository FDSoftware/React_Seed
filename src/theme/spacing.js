import { toRem } from "utils/toRem";

const spacing = {
	vertical: {
		"0.25": toRem("2px"),
		"0.5": toRem("4px"),
		"1": toRem("8px"),
		"1.5": toRem("12px"),
		"2": toRem("16px"),
		"3": toRem("24px"),
		"4": toRem("32px"),
	},
	horizontal: {
		"0.25": toRem("2px"),
		"0.5": toRem("4px"),
		"1": toRem("8px"),
		"2": toRem("16px"),
		"3": toRem("24px"),
		"4": toRem("32px"),
		"5": toRem("40px"),
		"6": toRem("48px"),
		"7": toRem("56px"),
		"8": toRem("80px"),
	},
	radius: {
		"1": toRem("5px"),
	},
};

export { spacing };
