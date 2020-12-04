// React
import React from "react";
// MUI Components
import { TableCell, TableRow } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export const SkeletonRow = ({ headSize }) => {
	return (
		<TableRow>
			<TableCell colSpan={headSize}>
				<Skeleton variant="text" animation="wave" height="80px" width="100%" />
			</TableCell>
		</TableRow>
	);
};

export default SkeletonRow;
