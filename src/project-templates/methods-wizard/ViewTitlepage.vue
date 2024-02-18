<template>
	<div>
		<h1>Title Page</h1>
		<InputTextSingleLine
			v-model="$tera.state.name"
			question="What is the title of the study?"
			placeholder="e.g. Blue-light therapy for acne vulgaris: a systematic review and meta-analysis"
		/>
		<InputTextSingleLine
			v-model="$tera.state.nameShort"
			question="What is the short title for the study?"
			placeholder="e.g. Blue-light"
		/>

		<InputTextNumber
			v-model="$tera.state.year"
			question="What year will study be published?"
		/>

		<pre>$TERA.state: {{$tera.state}}</pre>
	</div>
</template>

<script>
import InputTextNumber from "@/components/InputTextNumber.vue";
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";

export default {
	name: "ViewMethodPicot",
	components: {
		InputTextSingleLine,
		InputTextNumber
	},
};
</script>
