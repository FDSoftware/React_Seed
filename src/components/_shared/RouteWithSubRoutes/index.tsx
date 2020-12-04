// React
import React from "react";
// Custom Components
import { Route } from "react-router-dom";
// Types
import { RouteDefinition } from "./types";

const RouteWithSubRoutes = (route: RouteDefinition) => {
	return (
		<Route
			path={route.path}
			render={(props) => (
				<route.component {...props} props={route?.props} routes={route.routes} />
			)}
		/>
	);
};

export default RouteWithSubRoutes;
