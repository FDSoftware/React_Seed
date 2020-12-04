import { IRowActions } from "./EnhancedTableRow";

export interface IHeadCells {
	id: string;
	label: string;
	sortable: boolean;
}

export interface IPagination {
	activePage: number;
	totalPages?: number;
	totalItems: number;
}

export interface IModularTable {
	Empty: {
		img: string;
		txt?: string | JSX.Element;
	};
	rowsPerPage?: number;
	paginationData: IPagination;
	bodyData?: any;
	pageInfo?: any;
	onPageChange?: any;
	onSort?: any;
	headCells: Array<IHeadCells>;
	rowActions: IRowActions;
	className?: string;
}
