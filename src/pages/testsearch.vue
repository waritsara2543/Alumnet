<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-input v-model="search" filled type="search" hint="Search">
        <template v-slot:append>
          <q-icon name="search" @click="searchs" />
        </template>
      </q-input>
    </div>

    <q-card
      v-for="(col, index) in value"
      :key="index"
      class="my-card text-black full-width"
      style="background: white; margin: 0 auto; margin-top: 20px"
    >
      <q-card-section>
        <div class="row" style="text-align: center">
          {{ col }} <br />
          Firstname: {{ col[1] }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { ref } from "vue";
import { getSearch, getDatainGoogleSheets ,createstudentgooglesheet} from "../api/api";

export default {
  methods: {
    async searchs() {
      let testcase = await getSearch(this.search, this.search);
     
    },
  },
  async mounted() {
    this.value = await getDatainGoogleSheets();
   
    for (let i = 0; i < this.value.length; i++) {
      const element = this.value[i];
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
        dob: '2021-11-11',
        sex: element[3],
        email: "",
        epigram: "",
        status: "",
        education_status: element[4],
        graduate_year: element[5],
        major_id: major_id,
        public_relation_id: null,
        image_profile: null
      };
      await createstudentgooglesheet(javascripts)
     
    }
  },
  data() {
    return {
      value: [],
      search: ref(""),
    };
  },
};
</script>