<template>
  <q-page>
    <q-icon name="arrow_back" style="font-size: 32px" />
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <h5 class="text-bold" style="color: #014a88">Working Information</h5>

      <div class="q-pa-md">
        <q-input
          v-model="workplace_name"
          id="workplace_name"
          label="Company name"
          :dense="dense"
          style="padding: 15px; margin-top: -50px"
        />

        <q-input
          v-model="position"
          id="position"
          label="Position"
          :dense="dense"
          style="padding: 15px"
        />

        <div style="padding: 15px">
          <q-btn
            @click="toavatar"
            rounded
            label="CONTINUE"
            class="full-width text-white"
            style="
              font-size: 15px;
              background: linear-gradient(#b42425 0%, #b42425 100%);
            "
          />
        </div>
      </div>
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
    toavatar() {
      this.$router.push({ name: "toavatar" });
    },
  },

  setup() {
    return {
      workplace_name: ref(""),
      position: ref(""),
      dense: ref(false),
    };
  },
};
</script>