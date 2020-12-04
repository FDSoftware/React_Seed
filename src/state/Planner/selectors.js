import { createSelector } from "reselect";

const notifs = ({ Planner }) => Planner;

export const plannerSelector = createSelector([notifs], (plannerData) =>
	plannerData.planner ? plannerData.planner : {},
);

export const plannerAddSelector = createSelector([notifs], (plannerData) =>
	plannerData.planner_add ? plannerData.planner_add : {},
);

export const plannerEditSelector = createSelector([notifs], (plannerData) =>
	plannerData.planner_edit ? plannerData.planner_edit : {},
);
