import planerDuck from ".";
import * as types from "./types";

export const plannerRequest = planerDuck.createAction(types.PLANNER_REQUEST);
export const plannerSuccess = planerDuck.createAction(types.PLANNER_SUCCESS);
export const plannerFailure = planerDuck.createAction(types.PLANNER_FAILURE);

export const plannerAddRequest = planerDuck.createAction(types.PLANNER_ADD_REQUEST);
export const plannerAddSuccess = planerDuck.createAction(types.PLANNER_ADD_SUCCESS);
export const plannerAddFailure = planerDuck.createAction(types.PLANNER_ADD_FAILURE);

export const plannerEditRequest = planerDuck.createAction(types.PLANNER_EDIT_REQUEST);
export const plannerEditSuccess = planerDuck.createAction(types.PLANNER_EDIT_SUCCESS);
export const plannerEditFailure = planerDuck.createAction(types.PLANNER_EDIT_FAILURE);

//Clear duck:
export const clearDuck = planerDuck.createAction(types.PLANNER_CLEAR_DUCK);
