<template>
  <q-page>
    <inputsearchComponent></inputsearchComponent>
    <!-- <resultsearchComponent @click="result"></resultsearchComponent> -->
  </q-page>
</template>
 <script>
import { ref } from "vue";
import { getSearch } from '../api/api'
import inputsearchComponent from "../components/inputsearch.vue";
import resultsearchComponent from "../components/resultsearch.vue";
export default {
  components: {
    inputsearchComponent,
    resultsearchComponent,
  },
  methods: {
        //     async searchs(){
        //    let testcase =  await getSearch(this.search,this.search)
        //    console.log(testcase);
        //     console.log(this.search);
        // }
    // },
    async result(){
      let testcase =  await getSearch(this.search,this.search)
      console.log(testcase);
      console.log(this.search);
      // this.$router.push({ name: "resultSearch" });
    }
    ,
  },

  data() {
    return {
      search: ref(""),
    };
  },
};
</script>