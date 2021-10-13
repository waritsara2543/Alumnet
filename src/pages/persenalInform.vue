<template>
  <q-page>
    <q-icon name="arrow_back" style="font-size: 32px" />
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <h5 class="text-bold" style="color: #014a88">Persenal Information</h5>

      <div class="q-pa-md">
        <q-input
          v-model="student_id"
          id="student_id"
          label="Student ID"
          :dense="dense"
          style="padding: 15px; margin-top: -50px"
          :rules="[
            (val) => !!val || '* Required',
            (val) => val.length == 10 || 'Please type correct student id',
          ]"
        />
        <div class="row">
          <div class="col" style="padding: 20px 20px 20px 15px">
            <q-input
              v-model="firstname"
              label="Firstname"
              id="firstname"
              :dense="dense"
              :rules="[(val) => !!val || '* Required']"
            />
          </div>
          <div class="col" style="padding: 20px 15px 20px 20px">
            <q-input
              v-model="lastname"
              label="Lastname"
              id="lastname"
              :dense="dense"
              :rules="[(val) => !!val || '* Required']"
            />
          </div>
        </div>
        <q-select
          v-model="faculty"
          :options="faculties"
          label="Faculty"
          id="faculty"
          style="padding: 15px"
          :rules="[(val) => !!val || '* Required']"
        />
        <q-select
          v-model="major"
          :options="majors"
          label="Major"
          id="major"
          style="padding: 15px"
          :rules="[(val) => !!val || '* Required']"
        />
        <q-input
          v-model="phone"
          label="Phone number"
          id="phone"
          :dense="dense"
          style="padding: 15px"
          :rules="[
            (val) => !!val || '* Required',
            (val) => val.length == 10 || 'Please type correct phone number',
          ]"
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
import { getPersonInformation } from "../api/api";
export default {
  methods: {
    // backconfirmEmail() {
    //   this.$router.push({ name: "confirmEmail" });
    // },
    workingInform() {
      // const student_id = this.student_id;
      // const firstname = this.firstname;
      // const lastname = this.lastname;
      // const faculty = this.faculty;
      // const major = this.major;
      // const phone = this.phone
      if(student_id == "" || student_id.length != 10  || firstname == "" ||  lastname == "" || faculty == "" || major == "" || phone == "" || phone.length != 10){

      }else{
        this.$router.push({ name: "workingInform" });
      }
      
    },
    
  },

  setup() {
    return {
      student_id: ref(""),
      firstname: ref(""),
      lastname: ref(""),
      faculty: ref(null),
      faculties: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      major: ref(null),
      majors: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      phone: ref(""),
      status: ref(""),
      epigram: ref(""),
      dense: ref(false),
    };
  },
};
</script>