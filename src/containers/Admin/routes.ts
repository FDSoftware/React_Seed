import { lazy } from "react";

// Containers
const DashboardContainer = lazy(() => import("containers/Admin/Dashboard"));
const OrdersContainer = lazy(() => import("containers/Admin/Orders"));
const MealsContainer = lazy(() => import("containers/Admin/Meals"));
const CustomersContainer = lazy(() => import("containers/Admin/Customers"));
const AnalyticsContainer = lazy(() => import("containers/Admin/Analytics"));

const defExp = [
	{
		path: "/",
		component: DashboardContainer,
		exact: true,
	},

	{
		path: "/orders",
		component: OrdersContainer,
	},

	{
		path: "/Meals",
		component: MealsContainer,
	},
	{
		path: "/customers",
		component: CustomersContainer,
	},
	{
		path: "/analytics",
		component: AnalyticsContainer,
	},
];

export default defExp;
