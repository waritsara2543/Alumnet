<template>
  <q-page>
    <q-icon name="arrow_back" style="font-size: 32px" />
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <h5 class="text-bold" style="color: #014a88">Persenal Information</h5>

      <div v-for="(col, index) in person" :key="index" class="q-pa-md">
        <div
          class="text-subtitle1 text-left"
          style="padding: 20px 20px 20px 15px"
          id="student_id"
        >
          {{ this.person[0].student_id }}
        </div>
        <div class="row">
          <div class="col" style="padding: 20px 20px 20px 15px">
            <div class="text-subtitle1 text-left" id="firstname">
              {{ this.person[0].firstname }}
            </div>
          </div>

          <div class="col" style="padding: 20px 15px 20px 20px">
            <div class="text-subtitle1 text-left" id="lastname">
              {{ this.person[0].lastname }}
            </div>
          </div>
        </div>

        <div
          class="text-subtitle1 text-left"
          style="padding: 20px 20px 20px 15px"
          id="faculty"
        >
          {{ this.person[0].campus }}
        </div>

        <div
          class="text-subtitle1 text-left"
          style="padding: 20px 20px 20px 15px"
          id="major"
        >
                   {{ this.person[0].major }}
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
import {
  getPersonInformation,
  createinformation,
  updateinformation,
} from "../api/api";
export default {
  methods: {
    // backconfirmEmail() {
    //   this.$router.push({ name: "confirmEmail" });
    // },
    async workingInform() {
      
        let test = await createinformation(this.student[0].student_id,this.phone);
        let information = await updateinformation(this.epigram,this.status,this.student[0].student_id)
        this.$router.push({ name: "workingInform" });
     
    },
    async personInformation() {
      this.person = await getPersonInformation(this.student[0].student_id);
    },
  },
  async mounted() {
    const value = localStorage.getItem("student");
    this.student = JSON.parse(value);
    await this.personInformation();
  },

  data() {
    return {
      contact: ref(""),
      model: ref(null),
      contacts: ["Facebook", "LINE", "Email", "Phone"],
      
      status: ref(""),
      epigram: ref(""),
      dense: ref(false),
      person: [],
      student: [],
    };
  },
};
</script>