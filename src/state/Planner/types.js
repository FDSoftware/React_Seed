import plannerDuck from ".";

export const PLANNER_REQUEST = plannerDuck.defineType("PLANNER_REQUEST");
export const PLANNER_SUCCESS = plannerDuck.defineType("PLANNER_SUCCESS");
export const PLANNER_FAILURE = plannerDuck.defineType("PLANNER_FAILURE");

export const PLANNER_ADD_REQUEST = plannerDuck.defineType("PLANNER_ADD_REQUEST");
export const PLANNER_ADD_SUCCESS = plannerDuck.defineType("PLANNER_ADD_SUCCESS");
export const PLANNER_ADD_FAILURE = plannerDuck.defineType("PLANNER_ADD_FAILURE");

export const PLANNER_EDIT_REQUEST = plannerDuck.defineType("PLANNER_EDIT_REQUEST");
export const PLANNER_EDIT_SUCCESS = plannerDuck.defineType("PLANNER_EDIT_SUCCESS");
export const PLANNER_EDIT_FAILURE = plannerDuck.defineType("PLANNER_EDIT_FAILURE");


export const PLANNER_CLEAR_DUCK = plannerDuck.defineType("PLANNER_CLEAR_DUCK");
