// React
import React, { FC } from "react";
// MUI Components
import { TableCell, TableRow } from "@material-ui/core";
import { TableType } from "..";

export type IGenericActions = { [TableType.Generic]: any };

export const GenericRow: FC<{ data: any }> = ({ data }) => {
	return (
		<TableRow key={data.id}>
			{Object.keys(data.cells).map((cell, index) => (
				<TableCell key={index} align="left">
					{data.cells[cell]}
				</TableCell>
			))}
		</TableRow>
	);
};

export default GenericRow;
