import { createSelector } from "reselect";

const notifs = ({ Meals }) => Meals;

export const mealsSelector = createSelector([notifs], (mealsData) =>
	mealsData.meals ? mealsData.meals : {},
);

export const mealsAddSelector = createSelector([notifs], (mealsData) =>
	mealsData.meals_add ? mealsData.meals_add : {},
);

export const mealsEditSelector = createSelector([notifs], (mealsData) =>
	mealsData.meals_edit ? mealsData.meals_edit : {},
);
