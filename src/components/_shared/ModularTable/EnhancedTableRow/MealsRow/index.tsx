// React
import React, { FC } from "react";
// MUI Components
import {
	TableCell,
	TableRow,
	Button,
	FormControlLabel,
	Checkbox,
} from "@material-ui/core";
import { TableType } from "..";
import "./styles.scss";

import { Edit3 } from "react-feather";
import { IMeal } from "common/types/IMeal";

export type IMealsActions = {
	[TableType.Meals]: {
		onEdit?: (data: IMeal) => void | any;
		onStatusChange?: (data: IMeal) => void | any;
	};
};

export interface MealDetails {
	ID: string;
	MealName: string;
	MealURL?: string;
	price: number;
}

export const MealsRow: FC<{
	data: IMeal;
	rowActions: {
		Meals: {
			onEdit?: (data: IMeal) => void | any;
			onStatusChange?: (data: IMeal) => void | any;
		};
	};
}> = ({ data, rowActions: { Meals: actions } }) => {
	const { ID, MealName, price, Category, Status } = data;

	const id = String(ID);
	return (
		<TableRow key={ID} className="meal">
			<TableCell key={`${ID}-ID`} className="order-id" scope="row">
				{id.substring(0, 6)}
			</TableCell>
			<TableCell key={`${ID}-${MealName}`} className="meal-name" align="justify">
				{MealName}
			</TableCell>
			<TableCell key={`${ID}-${Category}`} className="order-category" align="justify">
				{Category}
			</TableCell>
			<TableCell key={`${ID}-${price}`} className="order-amount" align="justify">
				{price}
			</TableCell>
			<TableCell key={`${ID}-foo`} className="order-amount" align="justify">
				<FormControlLabel
					control={<Checkbox name="checkedB" color="primary" />}
					label="Active"
				/>
			</TableCell>
			<TableCell key={`${ID}-${Status}`}>
				<div className="order-actions">
					<Button
						className="order-actions--button"
						variant="text"
						startIcon={<Edit3 />}
						onClick={() => actions.onEdit!(data)}
					>
						Edit
					</Button>
				</div>
			</TableCell>
		</TableRow>
	);
};

export default MealsRow;
