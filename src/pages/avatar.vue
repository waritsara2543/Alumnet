<template>
  <q-page>
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <h5 class="text-bold" style="color: #014a88">Avatar</h5>

      <img src="../assets/man.png" alt="" style="width: 200px; padding: 5px" />

      <div class="q-pa-md text-center">
        <q-file
          v-model="files"
          label="Pick image"
          outlined
          multiple
          style="max-width: 800px"
          accept=".jpg, image/*"
          max-files="1"
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
import { updateprofile } from "../api/api";
export default {
  methods: {
    // backconfirmEmail() {
    //   this.$router.push({ name: "confirmEmail" });
    // },
    async tohomepage() {
      let profile = await updateprofile(this.files, this.student[0].student_id);
      this.$router.push({ name: "homepage" });
    },
  },
  async mounted() {
    const value = localStorage.getItem("student");
    this.student = JSON.parse(value);
    console.log(this.student[0].student_id);
  },
  data() {
    return {
      files: ref(null),
      student: [],
    };
  },
};
</script>