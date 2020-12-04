// React
import React, { FC, useState, useEffect } from "react";
// MUI Components
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableFooter,
	TableRow,
	Typography,
} from "@material-ui/core";

//Types:
import { IModularTable } from "./types";

import EnhancedTableHead from "./EnhancedTableHead";
import RenderSelectedRow from "./EnhancedTableRow";
import PaginationNew from "components/_shared/PaginationNew";
import "./styles.scss";

export const ModularTable: FC<IModularTable> = ({
	bodyData,
	headCells,
	Empty,
	rowsPerPage = 4,
	onPageChange = () => {},
	onSort = () => {},
	paginationData,
	rowActions,
	className = "",
}) => {
	// Table Options
	type Order = "asc" | "desc";
	const [order, setOrder] = useState<Order>("asc");
	const [orderBy, setOrderBy] = useState("");
	const { totalItems, totalPages, activePage } = paginationData;

	const [pageInfo, setPageInfo] = useState<{ from: number; to: number }>({
		from: 0,
		to: rowsPerPage,
	});

	const handleChangePage = (newPage: number) => {
		setPageInfo({
			from: rowsPerPage * (newPage - 1),
			to: rowsPerPage * (newPage - 1) + rowsPerPage,
		});
		onPageChange(newPage - 1);
	};
	// Calculo de paginas totales , en caso que no venga desde backend
	const getTotalPages = (total: number, pages: number) => {
		return total % pages !== 0
			? Math.floor(total / pages) + 1
			: Math.floor(total / pages);
	};

	useEffect(() => {
		setPageInfo({
			from: rowsPerPage * activePage,
			to: rowsPerPage * activePage + rowsPerPage,
		});
	}, [activePage, rowsPerPage]);

	// Table Sorting
	const handleRequestSort = (event: React.ChangeEvent<unknown>, property: string) => {
		const newOrder = orderBy === property && order === "asc" ? "desc" : "asc";
		setOrder(newOrder);
		setOrderBy(property);
		onSort(newOrder, property);
	};

	if (Object.keys(rowActions)[0] === "Skeleton") {
		bodyData = [];
		for (let i = 0; i < rowsPerPage; i++) {
			bodyData.push({ id: i });
		}
	}

	return (
		<>
			{bodyData?.length ? (
				<TableContainer className={`modular-table ${className}`}>
					<Table size="small">
						<EnhancedTableHead
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
							headData={headCells}
						/>
						<TableBody>
							{bodyData.slice(0, rowsPerPage).map((bodyRow: any, i: number) => (
								<RenderSelectedRow
									key={i}
									bodyRow={bodyRow}
									rowActions={rowActions}
									headSize={headCells?.length}
								/>
							))}
						</TableBody>
						{Object.keys(rowActions)[0] !== "Skeleton" && (
							<TableFooter className="modular-table__footer">
								<TableRow>
									<TableCell
										colSpan={
											headCells.length % 2
												? headCells.length / 2
												: Math.floor(headCells.length / 2) + (headCells.length % 2)
										}
									>
										<Typography
											variant="body1"
											component="p"
											className="modular-table__results-indicator"
										>
											{`Showing ${pageInfo.from}-${pageInfo.to} from ${totalItems} items`}
										</Typography>
									</TableCell>
									<TableCell
										padding="default"
										colSpan={
											headCells.length % 2
												? headCells.length / 2
												: Math.floor(headCells.length / 2)
										}
										align="right"
									>
										<PaginationNew
											count={totalPages || getTotalPages(totalItems, rowsPerPage)}
											onChange={handleChangePage}
											defaultPage={1}
											siblingCount={0}
											boundaryCount={1}
											showFirstButton={bodyData.id === 1}
											page={activePage + 1}
										/>
									</TableCell>
								</TableRow>
							</TableFooter>
						)}
					</Table>
				</TableContainer>
			) : (
				<div className="modular-table__empty">
					<img src={Empty.img} alt="emptyProducts" />
					<Typography className="modular-table__warning" variant="h4" component="p">
						{Empty.txt}
					</Typography>
				</div>
			)}
		</>
	);
};
export default ModularTable;
