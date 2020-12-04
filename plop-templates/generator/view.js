/* eslint-disable no-unused-vars */
module.exports = (viewGenerator) => {
	return {
		description: "Create a view",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is your view name?",
			},
		],
		actions: function (data) {
			var actions = [];
			actions.push({
				type: "add",
				path: "src/views/Admin/{{pascalCase name}}/index.tsx",
				templateFile: "plop-templates/Component.js.hbs",
			});
			actions.push({
				type: "add",
				path: "src/views/Admin/{{pascalCase name}}/types.ts",
				templateFile: "plop-templates/Types.js.hbs",
			});
			actions.push({
				type: "add",
				path: "src/views/Admin/{{pascalCase name}}/styles.scss",
				templateFile: "plop-templates/Styles.js.hbs",
			});
			return actions;
		},
	};
};
