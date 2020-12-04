import { createSelector } from "reselect";

const reducer = ({ SnackBar }) => SnackBar;

export const SnackBarSelector = createSelector([reducer], (SnackBar) => SnackBar);
