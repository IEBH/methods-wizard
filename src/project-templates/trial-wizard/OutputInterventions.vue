<template>
	<div>
		<p>
			{{
					selectRandom([
						"There are ",
						"This trial has "
					])
			}}	
			{{ data.interventions ? data.interventions.length : "BLANK" }}
			{{
					selectRandom([
						"intervention arms: the ",
						"arms for the intervention "
					])
			}}		
			{{
				data.interventions
					? joinArrayWithAnd(data.interventions.map(el => el.name + " group"))
					: "BLANK"
			}}
		</p>
		<p v-for="(intervention, index) of data.interventions" :key="index">
			{{
					selectRandom([
						"Participants in the ",
						"The participants assigned to the "
					])
			}}	
			 {{ intervention.name }} 
			{{
					selectRandom([
						"group received ",
						"group, were given "
					])
			}}			 
			{{ intervention.materials }}.
			<span v-if="intervention.instructions"
				>They were instructed to {{ intervention.instructions }}.</span
			>
		</p>
		<p>
			{{
					selectRandom([
						"Treatment was discontinued or modified if ",
						"Treatment of participants was stopped or changed if "
					])
			}}	
			{{ joinArrayWithOr(formatSelectMulti(data.discontinued)) }} 
			{{
					selectRandom([
						"occured.",
						"happened."
					])
			}}
		</p>
		<p>
			{{
					selectRandom([
						"Adherence to intervention protocols were maintained by ",
						"Ensuring intervention protocols were followed was done by "
					])
			}}
			{{ data.adherenceMaintained }}. 
			{{
					selectRandom([
						"Adherence was monitored by ",
						"Compliance with intervention protocols was checked by "
					])
			}}
			{{ joinArrayWithAnd(formatSelectMulti(data.adherenceMonitored)) }}.
		</p>
		<p>
			{{
					selectRandom([
						"Both groups received ",
						"All groups in the trial were given "
					])
			}}
			{{ data.allInstructions }}. 
			{{
					selectRandom([
						"Interventions such as: ",
						"Interventions which involved "
					])
			}}
			{{ data.prohibitedInterventions }}
			{{
					selectRandom([
						" were not allowed for the duration of the study.",
						" could not be given during the trial."
					])
			}}
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputInterventions",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>