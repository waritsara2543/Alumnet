<template>
  <q-page>
    <inputsearchComponent></inputsearchComponent>
    <resultsearchComponent></resultsearchComponent>
  </q-page>
</template>
 <script>
import { ref } from "vue";
import inputsearchComponent from "../components/inputsearch.vue";
import resultsearchComponent from "../components/resultsearch.vue";
export default {
  components: {
    inputsearchComponent,
    resultsearchComponent,
  },
  methods: {},

  setup() {
    return {
      search: ref(""),
    };
  },
};
</script>