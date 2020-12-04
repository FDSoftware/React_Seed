// import { interfaceColors } from "./theme/colors/interfaceColors";
import { createMuiTheme } from "@material-ui/core/styles";
import PoppinsMedium from "./assets/fonts/poppins-medium-webfont.woff";
import PoppinsLight from "./assets/fonts/poppins-light.woff";
import PoppinsRegular from "./assets/fonts/poppins-regular-webfont.woff";
import { enUS } from "@material-ui/core/locale";

import {
	Alert,
	Autocomplete,
	Button,
	Card,
	Checkbox,
	CircularProgress,
	ExpansionPanel,
	FormControlLabel,
	FormHelperText,
	FormLabel,
	InputAdornment,
	InputBase,
	InputLabel,
	Link,
	OutlinedInput,
	Paper,
	PrivateNotchedOutline,
	Radio,
	Select,
	Snackbar,
	Switch,
	TableCell,
	TablePagination,
	Typography,
} from "./theme/overrides/_overrides";

// Fonts
const poppins = {
	fontFamily: "Poppins",
	src: `
    local('Poppins'),
    local('Poppins-Regular'),
    url(${PoppinsRegular}) format('woff')
  `,
	unicodeRange:
		"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const poppinsMedium = {
	fontFamily: "Poppins Medium",
	src: `
    local('Poppins'),
    local('Poppins-Medium'),
    url(${PoppinsMedium}) format('woff')
  `,
	unicodeRange:
		"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const poppinsLight = {
	fontFamily: "Poppins Light",
	src: `
    local('Poppins'),
    local('Poppins-Light'),
    url(${PoppinsLight}) format('woff')
  `,
	unicodeRange:
		"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const themeGeneral = createMuiTheme({
	palette: {
		primary: {
			main: "#FF8F48",
			contrastText: "#FFF",
		},
		secondary: {
			main: "#F15059",
			contrastText: "#fff",
		},
		tertiary: {
			main: "#FFC737",
			contrastText: "#000000",
		},
		error: {
			main: "#F15059",
		},
		success: {
			main: "#1fab46",
			light: "#e9f7ed",
		},
		background: {
			default: "#F9F9F9",
		},
		warning: {
			main: "#39a0ff",
			light: "#e2f1ff",
		},
		black: "#000",
		white: "#FFF",
		gray1: "#576069",
		gray2: "#969ba0",
		gray3: "#c5c7c9",
		gray4: "#e7e7e7",
		gray5: "#f5f5f5",
	},
	text: {
		primary: "#000", // black
		secondary: "#969ba0", // gray2
	},
	typography: {
		fontFamily: "Poppins, 'Poppins Light', 'Poppins Medium', Arial",
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
	},
});
const themeOverrides = createMuiTheme(
	{
		...themeGeneral,
		overrides: {
			MuiCssBaseline: {
				"@global": {
					"@font-face": [poppinsLight, poppins, poppinsMedium],
				},
			},
			MuiExpansionPanel: ExpansionPanel,
			// Alerts
			MuiAlert: Alert,
			MuiSnackbar: Snackbar,
			// Buttons
			MuiButton: Button,
			// Links
			MuiLink: Link,
			// Checkbox
			MuiCheckbox: Checkbox,
			// Helpers
			MuiFormHelperText: FormHelperText,
			// Input
			MuiInputBase: InputBase,
			// Input - Outlined Input + Dropdown Select
			MuiOutlinedInput: OutlinedInput,
			// Select
			MuiSelect: Select,
			// Línea del input que se retrae al hacer focus
			PrivateNotchedOutline: PrivateNotchedOutline,
			// Autocomplete
			MuiAutocomplete: Autocomplete,
			// Circular Progress
			MuiCircularProgress: CircularProgress,
			// Input - Outlined Input Label
			MuiInputLabel: InputLabel,
			// Input decorative icons
			MuiInputAdornment: InputAdornment,
			// Pop-over / Paper (dropdowns)
			MuiPaper: Paper,
			// Input Switch
			MuiSwitch: Switch,
			// Radio Buttons
			MuiRadio: Radio,
			// Labels
			MuiFormControlLabel: FormControlLabel,
			MuiFormLabel: FormLabel,
			// Tables
			MuiTableCell: TableCell,
			MuiTablePagination: TablePagination,
			// Cards
			MuiCard: Card,
			// Typography
			MuiTypography: Typography,
		},
	},
	enUS,
);

export default themeOverrides;
