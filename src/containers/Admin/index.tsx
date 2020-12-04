// React
import React, { FC, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// Custom Components
import RouteWithSubRoutes from "components/_shared/RouteWithSubRoutes";
import SuspenseLoader from "components/_shared/SuspenseLoader";
/* import NavBar from "components/Admin/_shared/NavBar";
 */// Routes
import routes from "./routes";
/* import { mobileRoutes, desktopRoutes } from "./navbarRoutes";
 */// Types
import { AdminContainerProps } from "./types";
import { ReduxSnackbar } from "components/_shared/ReduxSnackbar";

const AdminContainer: FC<AdminContainerProps> = () => (
	<>
 	{/* <NavBar routes={{ mobileRoutes, desktopRoutes }}> */}
		<Suspense fallback={<SuspenseLoader />}>
			<Switch>
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={`${i}_${route.path}`} {...route} />
				))}
				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</Suspense>
		<ReduxSnackbar />
	{/* 	</NavBar> */}
</>
);

export default AdminContainer;
