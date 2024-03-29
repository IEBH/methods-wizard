<template>
	<div>
		<h1>Eligibility Criteria</h1>

		<i
			>Inclusion and exclusion criteria for participants. If applicable,
			eligibility criteria for study centres and individuals who will perform
			the interventions (eg, surgeons, psychotherapists).</i
		>

		<InputSelectMulti
			question="What age groups are eligible participants in?"
			:options="ageOptions"
			:value="eligibilityCriteria.ages"
			@input="updateField('ages', $event)"
		/>

		<InputTextSingleLine
			question="What age bracket are eligible participants in?"
			placeholder="18-25 years"
			:value="eligibilityCriteria.ageBracket"
			@input="updateField('ageBracket', $event)"
		/>

		<InputSelectMulti
			question="What sexes are eligible for inclusion?"
			:options="sexOptions"
			:value="eligibilityCriteria.sexes"
			@input="updateField('sexes', $event)"
		/>

		<InputSelectMulti
			question="What conditions are eligible for study?"
			:options="conditionOptions"
			:value="eligibilityCriteria.conditions"
			@input="updateField('conditions', $event)"
		/>

		<InputSelectMulti
			question="What severity of condition is eligible? (optional)"
			:options="severityOptions"
			:value="eligibilityCriteria.severity"
			@input="updateField('severity', $event)"
		/>

		<InputSelectMulti
			question="What other factors are eligible for inclusion?"
			:options="otherOptions"
			:value="eligibilityCriteria.others"
			@input="updateField('others', $event)"
		/>

		<InputSelectMulti
			question="What other factors are excluded from the study?"
			:options="otherOptions"
			:value="eligibilityCriteria.othersExcluded"
			@input="updateField('othersExcluded', $event)"
		/>

		<InputSelectMulti
			question="What measurements were performed on participants at baseline (start of study)?"
			:options="measurementOptions"
			:value="eligibilityCriteria.baselineMeasurements"
			@input="updateField('baselineMeasurements', $event)"
		/>

		<BasePreviewOutput
			:component="outputComponent"
			:data="eligibilityCriteria"
		/>
	</div>
</template>

<script>
import OutputEligibilityCriteria from "./OutputEligibilityCriteria.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	mixins: [deepstreamMixin("eligibilityCriteria")],
	data() {
		return {
			ageOptions: [
				{ label: "Infants" },
				{ label: "Children" },
				{ label: "Adolescents" },
				{ label: "Adults" },
				{ label: "Elderly" }
			],
			conditionOptions: [
				{ label: "Healthy" },
				{ label: "Diabetic" },
				{ label: "Demented" },
				{ label: "Immunocompromised" }
			],
			severityOptions: [
				{ label: "Mild" },
				{ label: "Moderate" },
				{ label: "Severe" }
			],
			measurementOptions: [
				{ label: "Blood glucose level" },
				{ label: "Blood pressure" },
				{ label: "Pulse" }
			],
			otherOptions: [
				{ label: "Pregnant" },
				{ label: "Smoking" },
				{ label: "Non-smoking" },
				{ label: "Obese" },
				{ label: "Overweight" },
				{ label: "Institutionalised" }
			],
			outputComponent: OutputEligibilityCriteria,
			sexOptions: [{ label: "Female" }, { label: "Male" }]
		};
	}
};
</script>
