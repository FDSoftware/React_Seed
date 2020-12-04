// React
import React, { FC } from "react";
// MUI Components
import { TableCell, TableRow, Button } from "@material-ui/core";
import { TableType } from "..";

import { ChevronDown, Calendar, Edit3 } from "react-feather";
import { IMeal, OrderTypes } from "common/types/IMeal";

interface Actions {
	onEdit?: (data: IPlannerRow) => void | any;
	onCheck?: (data: IPlannerRow) => void | any;
}

export type IOrdersActions = {
	[TableType.Orders]: Actions;
};

const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

export interface IPlannerRow {
	PlannerID: string;
	PlannerDates: Array<string | Date>;
	Category: string;
	DailyAmmount: string;
	Meal: IMeal;
	Price: number;
}

export const OrdersRow: FC<{
	data: IPlannerRow;
	rowActions: IOrdersActions;
}> = ({ data, rowActions: { Orders: actions } }) => {
	const { PlannerID, PlannerDates, Price, Meal, DailyAmmount, Category } = data;

	const from = new Date(PlannerDates[0]).toLocaleString("en-US", options);
	const to = new Date(PlannerDates[1]).toLocaleString("en-US", options);

	return (
		<TableRow key={PlannerID}>
			<TableCell key={`${PlannerID}-ID`} className="Order-ID" scope="row">
				{PlannerID}
			</TableCell>

			<TableCell key={`${PlannerID}-ID`} className="Order-ID" scope="row">
				{PlannerID}
			</TableCell>

			<TableCell
				key={`${PlannerID}-${Meal.ID}`}
				className="Order-CustomerName"
				align="justify"
			>
				{Meal.MealName}
			</TableCell>
			<TableCell key={`${PlannerID}-${Category}`} className="Order-Meal" align="justify">
				{Category}
			</TableCell>
			<TableCell
				key={`${PlannerID}-${DailyAmmount}`}
				className="Order-Amount"
				align="justify"
			>
				{DailyAmmount}
			</TableCell>
			<TableCell key={`${PlannerID}-${Date}`} className="Order-Date" align="justify">
				{`From: '${from}' to: '${to}'.`}
			</TableCell>
			<TableCell key={`${PlannerID}-${Price}`} className="Order-Amount" align="justify">
				{Price}
			</TableCell>
			<TableCell key={`${PlannerID}-actions`}>
				<div className="Order-Actions">
					<Button
						className="Order-Actions--button"
						variant="text"
						startIcon={<Edit3 />}
						onClick={() => actions.onEdit!(data)}
					>
						Detail
					</Button>
				</div>
			</TableCell>
		</TableRow>
	);
};

export default OrdersRow;
