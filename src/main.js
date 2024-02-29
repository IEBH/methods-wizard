import VueInstance from "vue";
import App from "./App.vue";

// Keep a closure open for this instance (used later in async boot)
const Vue = VueInstance;

// Disable Vue chattyness
Vue.config.productionTip = false;

// Setup vue router
import VueRouter from "vue-router";
Vue.use(VueRouter);
import initializeRouter from "./router";

// Import the store
import store from "./store";

// Setup the sidebar menu
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
Vue.use(VueSidebarMenu);

// Setup toast
import ToastService from "primevue/toastservice";
Vue.use(ToastService);

//import element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// Import $tera / @iebh/Tera-fy global service
// NOTE: See bottom of file inside main async() init loop for when TeraFy actually boots
import TeraFy from '@iebh/tera-fy/dist/terafy.es2019.js'; // FIX: Use annoyingly old and specific version as Babel struggles with ESNEXT class imports
import TerafyVue from '@iebh/tera-fy/dist/plugin.vue2.es2019.js';

let terafy = new TeraFy()
	.set('devMode', process.env.VUE_APP_TERAFY_DEV == 1)
	.setIfDev('siteUrl', process.env.VUE_APP_TERAFY_URL)
	.use(TerafyVue) // Add the Vue plugin

// Register all Input/Base Components Globally {{{
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
	// The relative path of the components folder
	"./components",
	// Whether or not to look in subfolders
	false,
	// The regular expression used to match base component filenames
	/(Input|Base)[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
	// Get component config
	const componentConfig = requireComponent(fileName);

	// Get PascalCase name of component
	const componentName = upperFirst(
		camelCase(
			// Gets the file name regardless of folder depth
			fileName
				.split("/")
				.pop()
				.replace(/\.\w+$/, "")
		)
	);

	// Register component globally
	Vue.component(
		componentName,
		// Look for the component options on `.default`, which will
		// exist if the component was exported with `export default`,
		// otherwise fall back to module's root.
		componentConfig.default || componentConfig
	);
});
// }}}

// Boot Vue + Tera
(async () => {
	const router = await initializeRouter();
	const app = new Vue({
		router,
		store,
		render: h => h(App)
	});

	// Boot teraFy + require project + pull & subscribe to project data
	await terafy.init({
		app, // Provide app to bind against
		Vue, // Provide the vue version to use
	});

	app.$mount("#app");
})();
