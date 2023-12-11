import Vue from "vue";
import App from "./App.vue";

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
// FIX: Have to be explicit here to exactly what we're after as the older version of Vue-cli doesn't resolve it automatically
import TeraFy from '@iebh/tera-fy/lib/terafy.client.js';
import TerafyVue from '@iebh/tera-fy/plugins/vue2';
let terafy = new TeraFy()
	.set('devMode', true) // Uncomment this line if you want TeraFy to be chatty
	.set('siteUrl', 'http://localhost:8000/embed') // Uncomment this line if running TERA locally
	.use(TerafyVue) // Add the Vue plugin
	// NOTE: See bottom of file inside main async() init loop for when TeraFy actually boots

Vue.config.productionTip = false;

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

(async () => {
	const router = await initializeRouter();
	const app = new Vue({
		router,
		store,
		render: h => h(App)
	});
	app.$mount("#app");

	// Boot teraFy + require project + pull & subscribe to project data
	await terafy.init({app});
})();
