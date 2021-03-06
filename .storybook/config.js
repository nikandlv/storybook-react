import { configure, addParameters } from "@storybook/react";

// Import all stories
const imports = require.context("../stories", true, /.stories.js$/);
function loadStories() {
	imports.keys().forEach(filename => imports(filename));
}
addParameters({
	options: {
		showDownPanel: false,
		showAddonPanel: false,
		isToolshown: false,
	},
});
configure(loadStories, module);
