<template>
	<div>
		<h1>Acknowledgement</h1>

		<InputSelectMultiWithoutOthers
			question="Was help provided to design the search?"
			v-model="$tera.state.designhelp"
			:options="this.dsAcknowledgementAuthors"
		/>

		<InputSelectMultiWithoutOthers
			question="Was help provided with the statistical analysis?"
			v-model="$tera.state.statistical"
			:options="this.dsAcknowledgementAuthors"
		/>

		<InputSelectMultiWithoutOthers
			question="Was feedback provided on a draft of the manuscript?"
			v-model="$tera.state.manuscript"
			:options="this.dsAcknowledgementAuthors"
		/>

		<PreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
import InputSelectMultiWithoutOthers from "@/components/InputSelectMultiWithoutOther.vue";
//import deepstreamMixin from "@/mixins/DeepstreamMixin";
import PreviewOutput from "@/components/BasePreviewOutput.vue";
import OutputAcknowledgement from "./OutputAcknowledgement.vue";

export default {
	name: "ViewAcknowledgement",

	components: {
		InputSelectMultiWithoutOthers,
		PreviewOutput
	},
	computed: {
		dsAcknowledgementAuthors() {
			let da = this.$tera.state.acknowledgements?.map(el => {
				return { label: el };
			});
			return da;
		}
	},
	data() {
		return {
			outputComponent: OutputAcknowledgement
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
