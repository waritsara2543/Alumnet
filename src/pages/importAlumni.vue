<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm">
      <h3 class="text-weight-bold">Import alumni list</h3>

      <q-btn
        color="green"
        icon="description"
        glossy
        label="1.delete google sheet"
        @click="deleteSheet"
      />

      <q-btn
        color="green"
        icon="description"
        glossy
        label="1.Open google sheet"
        @click="opennewtap"
      />

      <q-btn
        color="blue"
        glossy
        icon="cloud_download"
        label="2.Download data from google sheet"
        @click="getgoogleSheet"
      />
      <q-btn
        color="amber"
        glossy
        icon="cloud_upload"
        label="3.Upload result"
        @click="uploadgooglesheet"
      />
      <q-table
        title="Alumni List"
        :rows="rows"
        :columns="columns"
        row-key="name"
      />
      <!-- <q-tr v-for="col in this.value" :key="col" >
        {{ col[0]}}
        {{col[1]}}
      </q-tr> -->
    </div>
  </q-page>
</template>
<script>
import {
  getDatainGoogleSheets,
  createstudentgooglesheet,
  deleteGoogleSheet,
} from "../api/api";

export default {
  methods: {
    opennewtap() {
      window.open(
        "https://docs.google.com/spreadsheets/d/1L0p43e9RCRS_0sjcz7xz35Uoi5Ev2PxklGUGHeLPSlA/edit#gid=0"
      );
    },

    async deleteSheet(){
      await deleteGoogleSheet();
    },


    async getgoogleSheet() {
      this.value = await getDatainGoogleSheets();
      console.log(this.sheet);
      for (let index = 0; index < this.value.length; index++) {
        const element = this.value[index];
        let row = {
          Student_id: element[0],
          Firstname: element[1],
          Lastname: element[2],
        };
        this.rows.push(row);
      }
    },
    async uploadgooglesheet() {
      this.sheet = await getDatainGoogleSheets();
      // let valtime = 0;
      // let time = date.format(valtime,'YYYY-MM-DD');
      for (let i = 0; i < this.sheet.length; i++) {
        const element = this.sheet[i];
        let valtime = 0;
        // let time = date.format(valtime,'YYYY-MM-DD');

        let major_id = 0;
        if (element[6] == "Software Engineering") {
          major_id = 1;
        }
        if (element[6] == "Information Technology") {
          major_id = 2;
        }
        if (element[6] == "Electronic Business") {
          major_id = 3;
        }
        let javascripts = {
          student_id: element[0],
          firstname: element[1],
          lastname: element[2],
          dob: "1000-01-01 00:00:00.000000",
          sex: element[3],
          email: "",
          epigram: "",
          status: "",
          education_status: element[4],
          graduate_year: element[5],
          major_id: major_id,
          public_relation_id: null,
          image_profile: null,
        };
        await createstudentgooglesheet(javascripts);
        console.log(javascripts);
      }
    },
  },

  data() {
    return {
      value: [],
      columns: [
        {
          name: "Student_id",
          label: "Student_id",
          field: "Student_id",
          align: "left",
        },
        { name: "Firstname", label: "Firstname", field: "Firstname" },
        { name: "Lastname", label: "Lastname", field: "Lastname" },
      ],
      rows: [],
      sheet: [],
    };
  },
};
</script>