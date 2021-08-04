import VueRouter from "vue-router";
import store from "../store";
import ViewMethodPicot from "../components/ViewMethodPicot.vue";
import ViewMethodSearch from "../components/ViewMethodSearch.vue";
import ViewMethodSearchDatabses from "../components/ViewMethodSearchDatabases.vue";
import ViewMethodSearchRegistries from "../components/ViewMethodSearchRegistries.vue";
import ViewMethodSearchPublicationType from "../components/ViewMethodSearchPublicationType.vue";
import ViewMethodSearchSupplementoryMethods from "../components/ViewMethodSearchSupplementoryMethods.vue";
import ViewMethodScreening from "../components/ViewMethodScreening.vue";
import ViewMethodDataExtraction from "../components/ViewMethodDataExtraction.vue";
import ViewMethodAssessmentOfTheRiskOfBias from "../components/ViewMethodAssessmentOfTheRiskOfBias.vue";
import ViewMethodMeasurementOfEffect from "../components/ViewMethodMeasurementOfEffect.vue";
import ViewMethodUnitOfAnalysis from "../components/ViewMethodUnitOfAnalysis.vue";
import ViewMethodDealingWithMissingData from "../components/ViewMethodDealingWithMissingData.vue";
import ViewMethodHeterogeneityPublicationBias from "../components/ViewMethodHeterogeneityPublicationBias.vue";
import ViewMethodSubgroupAndSensitivityAnalysis from "../components/ViewMethodSubgroupAndSensitivityAnalysis.vue";
import ViewTitlepage from "../components/ViewTitlepage.vue";
import ViewHome from "../components/ViewHome.vue";
import ViewOutput from "../components/ViewOutput.vue";

const routes = [
	{ name: "home", path: "", component: ViewHome },
	{ path: "/:projectId", component: ViewHome },
	{
		name: "titlepage",
		path: "/:projectId/titlepage",
		component: ViewTitlepage
	},
	{
		name: "picot",
		path: "/:projectId/method/picot",
		component: ViewMethodPicot
	},
	{ path: "/:projectId/method/search", component: ViewMethodSearch },
	{
		path: "/:projectId/method/search/bibliographic-databases",
		component: ViewMethodSearchDatabses
	},
	{
		path: "/:projectId/method/search/trial-registries",
		component: ViewMethodSearchRegistries
	},
	{
		path: "/:projectId/method/search/publication-type",
		component: ViewMethodSearchPublicationType
	},
	{
		path: "/:projectId/method/search/supplementory-methods",
		component: ViewMethodSearchSupplementoryMethods
	},
	{ path: "/:projectId/method/screening", component: ViewMethodScreening },
	{
		path: "/:projectId/method/data-extraction",
		component: ViewMethodDataExtraction
	},
	{
		path: "/:projectId/method/risk-of-bias",
		component: ViewMethodAssessmentOfTheRiskOfBias
	},
	{
		path: "/:projectId/method/measurement-of-effect",
		component: ViewMethodMeasurementOfEffect
	},
	{
		path: "/:projectId/method/unit-of-analysis",
		component: ViewMethodUnitOfAnalysis
	},
	{
		path: "/:projectId/method/missing-data",
		component: ViewMethodDealingWithMissingData
	},
	{
		path: "/:projectId/method/heterogeneity-publication-biases",
		component: ViewMethodHeterogeneityPublicationBias
	},
	{
		path: "/:projectId/method/subgroup-sensitivity-analysis",
		component: ViewMethodSubgroupAndSensitivityAnalysis
	},
	{
		path: "/:projectId/output",
		component: ViewOutput
	}
];

const router = new VueRouter({
	routes // short for `routes: routes`
});

// Initialize store before navigation
router.beforeEach((to, from, next) => {
	var projectId = to.query["project-id"] || to.params.projectId;
	if (projectId != store.state.projectId) {
		console.log("Initializing project ID:", projectId);
		store
			.dispatch("initialize", projectId)
			.then(() => {
				next();
			})
			.catch(err => {
				alert(err);
				console.error(err);
			});
	} else {
		next();
	}
});

export default router;
