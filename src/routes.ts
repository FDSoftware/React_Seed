// Routes
import sessionRoutes from "containers/Session/routes";

// Containers
import SessionContainer from "containers/Session";

const defExp = [
	{
		path: "/login",
		component: SessionContainer,
		routes: sessionRoutes,
	},
];

export default defExp;
