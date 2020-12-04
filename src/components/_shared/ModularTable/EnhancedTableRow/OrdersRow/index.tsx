// React
import React, { FC } from "react";
// MUI Components
import { TableCell, TableRow, Button } from "@material-ui/core";
import { TableType } from "..";

import { OrderStatus } from "./OrderStatus";
import { Eye } from "react-feather";
import { IMeal, OrderTypes } from "common/types/IMeal";

export type IOrdersActions = {
	[TableType.Orders]: { onClick?: (data: IOrdersRow) => void | any };
};

export interface MealDetails {
	ID: string;
	MealName: string;
	MealURL?: string;
	price: number;
}

export interface IOrdersRow {
	OrderID: string;
	OrderDate: string | Date;
	CustomerName: string;
	MainMeal: string; // nombre de la primer comida?
	Details?: Array<IMeal>;
	Amount: string;
	Status: OrderTypes;
}

export const OrdersRow: FC<{
	data: IOrdersRow;
	rowActions: { Orders: { onClick?: (data: IOrdersRow) => void | any } };
}> = ({ data, rowActions: { Orders: actions } }) => {
	const { OrderID, OrderDate, CustomerName, MainMeal, Status, Amount } = data;
	const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
	const _date = new Date(OrderDate);

	return (
		<TableRow key={OrderID} className="order-row">
			<TableCell key={`${OrderID}-ID`} className="order-row__id" scope="row">
				{OrderID}
			</TableCell>
			<TableCell key={`${OrderID}-${Date}`} className="order-row__date" align="justify">
				{_date.toLocaleString("en-US", options)}
			</TableCell>
			<TableCell
				key={`${OrderID}-${CustomerName}`}
				className="order-row__customername"
				align="justify"
			>
				{CustomerName}
			</TableCell>
			<TableCell
				key={`${OrderID}-${MainMeal}`}
				className="order-row__meal"
				align="justify"
			>
				<div className="order-row__meal-text-wrapper">
					<div className="order-row__meal-text" title={MainMeal}>
						{MainMeal}
					</div>
				</div>
			</TableCell>
			<TableCell
				key={`${OrderID}-${Amount}`}
				className="order-row__amount"
				align="justify"
			>
				{Amount}
			</TableCell>
			<TableCell key={`${OrderID}-${Status}`} /*  align="justify" */>
				<div className="order-row__actions">
					<OrderStatus type={Status} />
					<Button
						className="order-row__actions--button"
						variant="text"
						color="primary"
						startIcon={<Eye />}
						onClick={() => actions.onClick!(data)}
					>
						Detail
					</Button>
				</div>
			</TableCell>
		</TableRow>
	);
};

export default OrdersRow;
