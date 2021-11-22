<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 100%">
      <q-toolbar class="text-white rounded-borders" style="background: #032030">
        <q-input
          dark
          dense
          standout
          v-model="search"
          input-class="text-left"
          class="q-ml-md"
          style="width: 1000px; max-width: 100%"
        >
          <template v-slot:append>
            <q-icon  name="search" @click="clicksearch" />
          </template>
        </q-input>

        <q-space />

        <q-btn
          round
          dense
          flat
          class="q-mr-xs"
          style="margin-left: 20px"
          @click="backtohome()"
          >cancle</q-btn
        >
      </q-toolbar>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  methods: {
    backtohome() {
      this.$router.push({ name: "homepage" });
    },
    clicksearch(){
      console.log(this.search);
    }
  },

  setup() {
    return {
      search: ref(""),
    };
  },
};
</script>