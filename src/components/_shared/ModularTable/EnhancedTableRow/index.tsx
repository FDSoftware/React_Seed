import React, { FC } from "react";
//Rows:
import { OrdersRow, IOrdersActions } from "./OrdersRow";
import { MealsRow, IMealsActions } from "./MealsRow";
import { GenericRow, IGenericActions } from "./GenericRow";
import { SkeletonRow } from "./SkeletonRow";

/* import { HistoricRow, IHistoricActions } from "./HistoricRow";
import { BillsRow } from "./BillsRow";
import { IProductsActions } from "./ProductsRow/types";
import { IBillsActions } from "./BillsRow";
import { RecordsHistoryRow } from "./RequestsRow";
import { IRequestsActions } from "./RequestsRow";
 */
export enum TableType {
	Orders = "Orders",
	Generic = "Generic",
	Skeleton = "Skeleton",
	Meals = "Meals",
}

export type IRowActions =
	| IGenericActions
	| IOrdersActions
	| IMealsActions
	| { [TableType.Skeleton]: any };

interface IRenderSelectedRow {
	bodyRow: any;
	rowActions: IRowActions;
	headSize?: number;
}

const RenderSelectedRow: FC<IRenderSelectedRow> = ({ bodyRow, rowActions, headSize }) => {
	return {
		/* 	Products: () => (
			<ProductsRow data={bodyRow} rowActions={rowActions as IProductsActions} />
		), */
		Generic: () => <GenericRow data={bodyRow} />,
		Skeleton: () => <SkeletonRow headSize={headSize} />,
		Orders: () => <OrdersRow data={bodyRow} rowActions={rowActions as IOrdersActions} />,
		Meals: () => <MealsRow data={bodyRow} rowActions={rowActions as IMealsActions} />,
	}[Object.keys(rowActions)[0] as TableType]();
};

export default RenderSelectedRow;
