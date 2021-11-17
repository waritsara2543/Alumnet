<template>
  <q-page>
    <Approve></Approve>
  </q-page>
</template>
 <script>
import { ref } from "vue";
import Approve from "../components/Approve.vue";
export default {
  components: {
    Approve,
  },
  methods: {},

  setup() {
    return {
      search: ref(""),
    };
  },
};
</script>