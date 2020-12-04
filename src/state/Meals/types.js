import mealsDuck from ".";

export const MEALS_REQUEST = mealsDuck.defineType("MEALS_REQUEST");
export const MEALS_SUCCESS = mealsDuck.defineType("MEALS_SUCCESS");
export const MEALS_FAILURE = mealsDuck.defineType("MEALS_FAILURE");

export const MEALS_ADD_REQUEST = mealsDuck.defineType("MEALS_ADD_REQUEST");
export const MEALS_ADD_SUCCESS = mealsDuck.defineType("MEALS_ADD_SUCCESS");
export const MEALS_ADD_FAILURE = mealsDuck.defineType("MEALS_ADD_FAILURE");

export const MEALS_EDIT_REQUEST = mealsDuck.defineType("MEALS_EDIT_REQUEST");
export const MEALS_EDIT_SUCCESS = mealsDuck.defineType("MEALS_EDIT_SUCCESS");
export const MEALS_EDIT_FAILURE = mealsDuck.defineType("MEALS_EDIT_FAILURE");


export const MEALS_CLEAR_DUCK = mealsDuck.defineType("MEALS_CLEAR_DUCK");
