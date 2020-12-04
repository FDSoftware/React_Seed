import { lazy } from "react";

// Containers
const DashboardView = lazy(() => import("views/Admin/Dashboard"));

const defExp = [
	{
		path: "/",
		component: DashboardView,
	},
];

export default defExp;
