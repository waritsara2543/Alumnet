<template>
  <q-page padding>
    <q-icon
      name="arrow_back"
      style="font-size: 32px"
      @click="backconfirmEmail"
    />
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <h2 class="text-bold" style="color: #014a88">SIGN UP</h2>
      <h6 class="text-bold" style="color: #014a88">Please type your Student ID</h6>

      <q-input
        outlined
        v-model="student_id"
        label=""
        class="full-width"
        style=""
        id="student_id"
      ></q-input>
      <q-btn
        label="CONFIRM"
        class="full-width"
        style="
          font-size: 20px;
          background: linear-gradient(#b42425 0%, #b42425 100%);
        "
        @click="topersonalInform"
      />
    </div>
  </q-page>
</template>
 <script>
import { ref } from "vue";
export default {
  methods: {
    backconfirmEmail() {
      this.$router.push({ name: "confirmEmail" });
    },
    topersonalInform(){
        this.$router.push({name:"persenalInform"})
    },
  },

  setup() {
    return {
      student_id: ref(""),
    };
  },
};
</script>