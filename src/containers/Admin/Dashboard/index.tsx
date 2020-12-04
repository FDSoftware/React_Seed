// React
import React, { FC } from "react";
import { Switch } from "react-router-dom";
// Routes
import routes from "./routes";
// Types
import { DashboardContainerProps } from "./types";
// Components
import RouteWithSubRoutes from "components/_shared/RouteWithSubRoutes";

const DashboardContainer: FC<DashboardContainerProps> = () => (
	<Switch>
		{routes.map((route, i) => (
			<RouteWithSubRoutes key={`${i}_${route.path}`} {...route} />
		))}
	</Switch>
);

export default DashboardContainer;
