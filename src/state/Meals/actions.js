import mealsDuck from ".";
import * as types from "./types";

export const mealsRequest = mealsDuck.createAction(types.MEALS_REQUEST);
export const mealsSuccess = mealsDuck.createAction(types.MEALS_SUCCESS);
export const mealsFailure = mealsDuck.createAction(types.MEALS_FAILURE);

export const mealsAddRequest = mealsDuck.createAction(types.MEALS_ADD_REQUEST);
export const mealsAddSuccess = mealsDuck.createAction(types.MEALS_ADD_SUCCESS);
export const mealsAddFailure = mealsDuck.createAction(types.MEALS_ADD_FAILURE);

export const mealsEditRequest = mealsDuck.createAction(types.MEALS_EDIT_REQUEST);
export const mealsEditSuccess = mealsDuck.createAction(types.MEALS_EDIT_SUCCESS);
export const mealsEditFailure = mealsDuck.createAction(types.MEALS_EDIT_FAILURE);

//Clear duck:
export const clearDuck = mealsDuck.createAction(types.MEALS_CLEAR_DUCK);
