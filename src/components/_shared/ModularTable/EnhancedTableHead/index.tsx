// React
import React, { FC } from "react";
// MUI Components
import { TableCell, TableHead, TableRow, TableSortLabel } from "@material-ui/core";
// Icons
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowUp";
//Types:
import "./styles.scss";
export interface IEnhancedTableHead {
	order: "asc" | "desc";
	orderBy: string;
	onRequestSort: (event: any, property: string) => void;
	headData: Array<any>;
}

const EnhancedTableHead: FC<IEnhancedTableHead> = ({
	order,
	orderBy,
	onRequestSort,
	headData,
}) => {
	const createSortHandler = (property: string) => (event: React.ChangeEvent<unknown>) => {
		onRequestSort(event, property);
	};
	return (
		<TableHead>
			<TableRow className="user-table__header-row">
				{headData.map((headCell: any) => (
					<TableCell
						className="user-table__header-cell"
						key={headCell.id}
						align="justify"
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							IconComponent={KeyboardArrowDownIcon}
							direction={orderBy === headCell.id ? order : "asc"}
							onClick={() => {
								if (headCell.sortable) createSortHandler(headCell.id);
							}}
							hideSortIcon={!headCell.sortable}
							className={`user-table__header-label ${
								headCell.sortable ? "" : "user-table__header-label--disabled"
							}`}
						>
							{headCell.label}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

export default EnhancedTableHead;
