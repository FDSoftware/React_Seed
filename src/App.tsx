import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";

// Components
import RouteWithSubRoutes from "components/_shared/RouteWithSubRoutes";

// Containers
import AdminContainer from "containers/Admin";

const App: FC = () => (
	<Switch>
		{routes.map((route, i) => (
			<RouteWithSubRoutes key={`${i}_${route.path}`} {...route} />
		))}
		<Route
			path="/"
			render={() =>
				localStorage.getItem("access_token") ? (
					<AdminContainer />
				) : (
					<Redirect to="/login" />
				)
			}
		/>
		<Route path="*">
			<Redirect to="/" />
		</Route>
	</Switch>
);

export default App;
