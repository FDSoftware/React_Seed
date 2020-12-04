export type RouteDefinition = {
	path?: string;
	component?: any;
	props?: any;
	routes?: Array<RouteDefinition>;
};
