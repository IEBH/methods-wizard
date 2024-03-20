<template>
  <div>
    <h1>People</h1>

    <InputTextSingleLineMulti
      question="Who are the authors in the study?"
      :value="$tera.state.author"
      placeholder="e.g. Justin Clark"
    />

    <InputTextSingleLineMulti
      question="Who else helped with the study? (Acknowledgements)"
      :value="$tera.state.acknowledgements"
      placeholder="e.g. Justin Clark"
    />
  </div>
</template>
<script>
import InputTextSingleLineMulti from "@/components/InputTextSingleLineMulti.vue";

export default {
  name: "ViewTitlePagePeople",

  components: {
    InputTextSingleLineMulti
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
