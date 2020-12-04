import { createSelector } from "reselect";

const notifs = ({ Images }) => Images;

export const UploadImageSelector = createSelector([notifs], (Images) =>
	Images.upload ? Images.upload : {},
);
