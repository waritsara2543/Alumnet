<template>
  <q-page>
    <q-icon name="arrow_back" style="font-size: 32px" />
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <h5 class="text-bold" style="color: #014a88">Persenal Information</h5>

      <div class="q-pa-md">
        <div
          class="text-subtitle1 text-left"
          style="padding: 20px 20px 20px 15px"
          id="student_id"
        >
          6130613003
        </div>
        <div class="row">
          <div class="col" style="padding: 20px 20px 20px 15px">
            <div class="text-subtitle1 text-left" id="firstname">Waritsara</div>
          </div>

          <div class="col" style="padding: 20px 15px 20px 20px">
            <div class="text-subtitle1 text-left" id="lastname">
              Wichiansrang
            </div>
          </div>
        </div>

        <div
          class="text-subtitle1 text-left"
          style="padding: 20px 20px 20px 15px"
          id="faculty"
        >
          College Of Computing
        </div>

        <div
          class="text-subtitle1 text-left"
          style="padding: 20px 20px 20px 15px"
          id="major"
        >
          Software Engineering
        </div>
        <q-select
          v-model="model"
          :options="contacts"
          label="Contact"
          bottom-slots
          hint="Choose a convenient channel for contact."
          style="padding: 20px 20px 20px 15px"
        />
        <q-input
          v-model="contact"
          label="Please specify your contact"
          id="contact"
          :dense="dense"
          style="padding: 20px 20px 20px 15px"
        />
        <q-input
          v-model="status"
          label="Status"
          id="status"
          :dense="dense"
          style="padding: 15px"
        />
        <q-input
          v-model="epigram"
          label="Epigram"
          id="epigram"
          :dense="dense"
          style="padding: 15px"
        />

        <div style="padding: 15px">
          <q-btn
            @click="workingInform"
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
    workingInform() {
      this.$router.push({ name: "workingInform" });
    },
  },

  setup() {
    return {
      contact: ref(""),
      status: ref(""),
      epigram: ref(""),
      dense: ref(false),
      model: ref(null),
      contacts: ["Facebook", "LINE", "Email", "Phone"],
    };
  },
};
</script>