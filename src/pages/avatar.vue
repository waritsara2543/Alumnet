<template>
  <q-page>
    <q-icon name="arrow_back" style="font-size: 32px" />
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <h5 class="text-bold" style="color: #014a88">Avatar</h5>

      <div class="q-pa-md text-center">
        <q-file
          v-model="files"
          label="Pick image"
          outlined
          multiple
          style="max-width: 800px"
        />

        <div class="col" style="padding: 20px">
          <q-btn
            @click="tohomepage"
            rounded
            label="UPLOAD"
            class="full-width"
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
    tohomepage() {
      this.$router.push({ name: "homepage" });
    },
  },

  setup() {
    return {
      code: ref(""),
      files: ref(null),
    };
  },
};
</script>