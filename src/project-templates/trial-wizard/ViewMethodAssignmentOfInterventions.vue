<template>
	<div>
		<h1>Assignment Of Interventions</h1>

		<InputSelectDropdown
			question="What was the ratio of randomization between groups?"
			:options="ratioRandomizationOptions"
			:value="assignmentOfInterventions.ratioRandomization"
			@input="updateField('ratioRandomization', $event)"
		/>

		<i
			>Sequence generation: Method of generating the allocation sequence (eg,
			computer-generated random numbers), and list of any factors for
			stratification. To reduce predictability of a random sequence, details of
			any planned restriction (eg, blocking) should be provided in a separate
			document that is unavailable to those who enrol participants or assign
			interventions</i
		>
		<InputSelectMulti
			question="How was the sequence of participant allocation generated?"
			:options="sequenceGenOptions"
			:value="assignmentOfInterventions.sequenceGen"
			@input="updateField('sequenceGen', $event)"
		/>

		<i
			>Allocation concealment mechanism: Mechanism of implementing the
			allocation sequence (eg, central telephone; sequentially numbered, opaque,
			sealed envelopes), describing any steps to conceal the sequence until
			interventions are assigned</i
		>
		<InputTextSingleLine
			question="How was the allocation of participants concealed?"
			placeholder="e.g. centralised randomisation via a telephone by an independent consultant"
			:value="assignmentOfInterventions.concealment"
			@input="updateField('concealment', $event)"
		/>

		<!--New added-->
		<i>Mechanism of implementing the allocation sequence</i>
		<InputSelectDropdown
			question="What was the mechanism of implementing the allocation sequence?"
			:options="mechanismOptions"
			:value="assignmentOfInterventions.mechanism"
			@input="updateField('mechanism', $event)"
		/>

		<InputTextSingleLine
			question="Describe any steps to conceal the sequence until interventions are assigned"
			placeholder="e.g. The laboratory technician performing the assay was blinded to all personal and medical characteristics of the patient"
			:value="assignmentOfInterventions.concealSteps"
			@input="updateField('concealSteps', $event)"
		/>
		<!-- <i
			>Blinding: Who will be blinded after assignment to interventions (eg,
			trial participants, care providers, outcome assessors, data analysts), and
			how. If blinded, circumstances under which unblinding is permissible, and
			procedure for revealing a participant's allocated intervention during the
			trial</i
		>
		<InputTextSingleLine
			question="Who generated the allocation sequence?"
			placeholder="e.g. Daily check-ups"
			:value="assignmentOfInterventions.adherenceMaintained"
			@input="updateField('adherenceMaintained', $event)"
		/>

		<InputTextSingleLine
			question="Who enrolled participants in the trial?"
			placeholder="e.g. Daily check-ups"
			:value="assignmentOfInterventions.adherenceMaintained"
			@input="updateField('adherenceMaintained', $event)"
		/>

		<InputTextSingleLine
			question="Who assigned participants to the interventions?"
			placeholder="e.g. Daily check-ups"
			:value="assignmentOfInterventions.adherenceMaintained"
			@input="updateField('adherenceMaintained', $event)"
		/> -->

		<div class="p-mt-6">
			<i
				>Blinding: Who will be blinded after assignment to interventions (eg,
				trial participants, care providers, outcome assessors, data analysts),
				and how. If blinded, circumstances under which unblinding is
				permissible, and procedure for revealing a participant's allocated
				intervention during the trial</i
			>
		</div>

		<InputSelectMulti
			question="The following people were blinded after assignment to interventions"
			:options="blindedPeopleOptions"
			:value="assignmentOfInterventions.blindedPeople"
			@input="updateField('blindedPeople', $event)"
		/>

		<InputTextSingleLine
			question="People were blinded using the following method"
			placeholder="e.g. the placebo being identical in shape and color to the intervention pill"
			:value="assignmentOfInterventions.blindedMethod"
			@input="updateField('blindedMethod', $event)"
		/>

		<InputSelectMulti
			question="Unblinding was permissible under the following circumstances"
			:options="unblindingOptions"
			:value="assignmentOfInterventions.unblinding"
			@input="updateField('unblinding', $event)"
		/>

		<BasePreviewOutput
			:component="outputComponent"
			:data="assignmentOfInterventions"
		/>
	</div>
</template>

<script>
import OutputAssignmentOfInterventions from "./OutputAssignmentOfInterventions.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	mixins: [deepstreamMixin("assignmentOfInterventions")],
	data() {
		return {
			outputComponent: OutputAssignmentOfInterventions,
			ratioRandomizationOptions: ["1:1", "2:1", "3:1", "other"],
			sequenceGenOptions: [
				{ label: "blocking" },
				{ label: "minimization" },
				{ label: "stratification" }
			],
			blindedPeopleOptions: [
				{ label: "trial participants" },
				{ label: "care providers" },
				{ label: "data analysts" },
				{ label: "outcome assessors" }
			],
			unblindingOptions: [
				{ label: "serious adverse event" },
				{ label: "physician request" }
			],
			//new added
			mechanismOptions: [
				"central telephone",
				"sequentially numbered",
				"opaque",
				"sealed envelopes",
				"other"
			]
		};
	}
};
</script>
