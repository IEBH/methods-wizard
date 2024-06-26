<template>
	<div>
		<h1>Output</h1>

		<p>
			<b>Select sections to include in output</b>
		</p>
		<div style="text-align: center;">
			<Button
				label="Select All"
				@click="selectAll()"
				class="p-mr-2 p-mb-2 btsyleblue"
			/>
			<Button
				label="Deselect All"
				@click="deselectAll()"
				class="p-mr-2 p-mb-2 btsyleblue"
			/>
		</div>

		<div
			v-for="(option, index) of outputOptions"
			:key="index"
			class="p-field-checkbox"
		>
			<Checkbox :id="index" :binary="true" v-model="option.include" />
			<label :for="index">{{ option.label }}</label>
		</div>

		<div class="p-mt-3 p-d-flex p-jc-center">
			<Button class="btsyleblue" label="Generate Output" @click="openModal()" />
		</div>

		<!-- Modal to display output -->
		<Dialog
			header="Methods Section"
			:visible.sync="displayModal"
			:style="{ width: '80vw' }"
			:modal="true"
		>
			<div id="output">
				<h1>Methods</h1>
				<h2>Introduction</h2>
				<OutputIntroduction
					v-if="outputOptions[0].include"
					:key="monitorChange"
				/>
				<h2>Eligibility Criteria</h2>
				<OutputPicot v-if="outputOptions[1].include" :key="monitorChange + 1" />
				<h2>Search strategy</h2>
				<OutputSearchStrategy
					v-if="outputOptions[2].include"
					:key="monitorChange + 2"
				/>
				<h2>Search Strings</h2>
				<OutputSearchStrings
					v-if="outputOptions[3].include"
					:key="monitorChange + 3"
				/>
				<h3>Screening</h3>
				<OutputScreening
					v-if="outputOptions[4].include"
					:key="monitorChange + 4"
				/>
				<h3>Data extraction</h3>
				<OutputDataExtraction
					v-if="outputOptions[5].include"
					:key="monitorChange + 5"
				/>
				<h2>Assessment of the RoB</h2>
				<OutputAssessmentOfTheRiskOfBias
					v-if="outputOptions[6].include"
					:key="monitorChange + 6"
				/>
				<h2>Measurement of effect</h2>
				<OutputMeasurementOfEffect
					v-if="outputOptions[7].include"
					:key="monitorChange + 7"
				/>
				<h2>Unit of analysis</h2>
				<OutputUnitOfAnalysis
					v-if="outputOptions[8].include"
					:key="monitorChange + 8"
				/>
				<h2>Dealing with missing data</h2>
				<OutputDealingWithMissingData
					v-if="outputOptions[9].include"
					:key="monitorChange + 9"
				/>
				<h2>Assessment of heterogeneity</h2>
				<OutputHeterogeneity
					v-if="outputOptions[10].include"
					:key="monitorChange + 10"
				/>
				<h2>Assessment of publication biases</h2>
				<OutputPublicationBias
					v-if="outputOptions[11].include"
					:key="monitorChange + 11"
				/>
				<h2>Subgroup and sensitivity analysis</h2>
				<OutputSubgroupAndSensitivityAnalysis
					v-if="outputOptions[12].include"
					:key="monitorChange + 12"
				/>
				<h2>Contributions</h2>
				<OutputContributions
					v-if="outputOptions[13].include"
					:key="monitorChange + 13"
				/>
				<h2>Acknowledgement</h2>
				<OutputAcknowledgement
					v-if="outputOptions[14].include"
					:key="monitorChange + 14"
				/>
			</div>
			<template #footer>
				<Button
					class="btsyleblue"
					label="Copy Methods to Clipboard"
					@click="copy"
				/>
				<Button class="btsyleblue" label="Rewrite Methods" @click="reload" />
			</template>
		</Dialog>
	</div>
</template>

<script>
import OutputAcknowledgement from "./OutputAcknowledgement.vue";
import OutputAssessmentOfTheRiskOfBias from "./OutputAssessmentOfTheRiskOfBias.vue";
import OutputContributions from "./OutputContributions.vue";
import OutputDataExtraction from "./OutputDataExtraction.vue";
import OutputDealingWithMissingData from "./OutputDealingWithMissingData.vue";
import OutputHeterogeneity from "./OutputHeterogeneity.vue";
import OutputIntroduction from "./OutputIntroduction.vue";
import OutputMeasurementOfEffect from "./OutputMeasurementOfEffect.vue";
import OutputPicot from "./OutputPicot.vue";
import OutputPublicationBias from "./OutputPublicationBias";
import OutputScreening from "./OutputScreening.vue";
import OutputSearchStrategy from "./OutputSearchStrategy.vue";
import OutputSearchStrings from "./OutputSearchStrings.vue";
import OutputSubgroupAndSensitivityAnalysis from "./OutputSubgroupAndSensitivityAnalysis.vue";
import OutputUnitOfAnalysis from "./OutputUnitOfAnalysis.vue";

import CopyMixin from "@/mixins/CopyMixin.js";

import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Checkbox from "primevue/checkbox";

export default {
	name: "ViewMethodSearch",
	mixins: [CopyMixin],
	components: {
		Button,
		Dialog,
		Checkbox,
		OutputPicot,
		OutputIntroduction,
		OutputScreening,
		OutputDataExtraction,
		OutputAssessmentOfTheRiskOfBias,
		OutputMeasurementOfEffect,
		OutputUnitOfAnalysis,
		OutputDealingWithMissingData,
		OutputHeterogeneity,
		OutputSubgroupAndSensitivityAnalysis,
		OutputAcknowledgement,
		OutputContributions,
		OutputPublicationBias,
		OutputSearchStrategy,
		OutputSearchStrings
	},
	data() {
		return {
			monitorChange: 0,
			outputOptions: [
				{ label: "Introduction", include: true },
				{ label: "PICOT", include: true },
				{ label: "Search Strategy", include: true },
				{ label: "Search Strings", include: true },
				{ label: "Study Selection and Screening", include: true },
				{ label: "Data Extraction", include: true },
				{ label: "Assessment of the Risk of Bias", include: true },
				{ label: "Measurment of Effect", include: true },
				{ label: "Unit of Analysis", include: true },
				{ label: "Dealing with Missing Data", include: true },
				{ label: "Heterogeneity", include: true },
				{ label: "Publication Bias", include: true },
				{ label: "Subgroup and Sensitivity Analysis", include: true },
				{ label: "Contributions", include: true },
				{ label: "Acknowledgement", include: true }
			],
			selectedOptions: [],
			displayModal: false
		};
	},
	methods: {
		openModal() {
			this.displayModal = true;
		},
		closeModal() {
			this.displayModal = false;
		},
		selectAll() {
			this.outputOptions.forEach(option => (option.include = true));
		},
		deselectAll() {
			this.outputOptions.forEach(option => (option.include = false));
		},
		reload() {
			this.monitorChange = this.monitorChange + 1;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btsyleblue {
	margin: 10px;
	/* width: 100px; */
	background-color: #83bfed;
	border-radius: 20px;
	/* box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset, rgba(44, 187, 99, .15) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px; */
	color: #05305f;
	cursor: pointer;
	display: inline-block;
	font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
	padding: 7px 20px;
	text-align: center;
	text-decoration: none;
	/* transition: all 250ms; */
	border: 0;
	font-size: 16px;

	&:hover {
		/* box-shadow: 0 0 10px 0 #28a745 inset, 0 0 10px 4px #28a745; */
		/* background-color: #0069d9 !important; */
		background-color: #437fbe !important;

		border: 2px solid #5679a2 !important;
	}
}
</style>
