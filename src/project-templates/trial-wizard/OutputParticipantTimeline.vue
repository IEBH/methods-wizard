<template>
	<div v-if="data.schematic">
		<p>
			{{
				selectRandom([
					"The following diagram shows the flow of participants through the trial:",
					"The participants will take part in the trial according to the following diagram:",
					"The participants will make their way through the trial following the diagram shown:",
					"The flow of participants through the trial will follow the diagram shown below:"
				])
			}}
		</p>
		<p>*INSERT SCHEMATIC DIAGRAM HERE*</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputParticipantTimeline",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>
