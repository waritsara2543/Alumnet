<template>
  <q-page padding>
    <q-icon
      name="arrow_back"
      style="font-size: 32px"
      
    />
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <h5 class="text-bold" style="color: #014a88">Persenal Information</h5>

  <div class="q-pa-md">

    <div class="row" style="">
      <div class="col">
        Student ID
      </div>
      <div class="col" style="">
        <q-input
        outlined
        v-model="code"
        label=""
        class=""
        style="height: 50px;"
      ></q-input>
      </div>
    </div>

    

  </div>

      <!-- <q-input
        outlined
        v-model="code"
        label=""
        class="full-width"
        style=""
      ></q-input>
      <q-btn
        label="CONFIRM"
        class="full-width"
        style="
          font-size: 20px;
          background: linear-gradient(#b42425 0%, #b42425 100%);
        "
      
      /> -->
    </div>
  </q-page>
</template>
 <script>
import { ref } from "vue";
export default {
  methods: {
    // backconfirmEmail() {
    //   this.$router.push({ name: "confirmEmail" });
    // },
    // topersonalInform(){
    //     this.$router.push({name:"persenalInform"})
    // },
  },

  setup() {
    return {
      code: ref(""),
    };
  },
};
</script>