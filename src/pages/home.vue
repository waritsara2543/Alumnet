<template>
  <q-page>
    <!-- {{ student }} <br>
    <div v-for="(col,index) in student" :key="index">
      {{ col.student_id }}
    </div> -->
    <!-- {{ timeline }} -->
    <div class="q-pa-md">
      <div class="q-gutter-y-md column" style="max-width: 100%">
        <q-toolbar  v-for="(col, index) in student" :key="index" 
          class="text-white rounded-borders"
          style="background: #032030"
        >
          <q-avatar class="q-mr-xs q-ml-md" id="image_profile">
            <img :src="this.profile" >
          </q-avatar>
          <p  style="padding: 15px 0px 0px 20px; font-size: 15px" id="user_name">
            {{ this.student[0].firstname }} {{ this.student[0].lastname }}
          </p>

          <q-space />


          <q-icon name="search" @click="searchPage()" style="font-size: 25px" />
        </q-toolbar>

        <q-card
          v-for="(col, index) in details"
          :key="index"
          class="my-card text-white"
          style="
            background: linear-gradient(#032030 0%, #1794a5 100%);
            height: 120px;
            width: 345px;
            margin: 0 auto;
            margin-top: 20px;
          "
        >
          <q-card-section>
            <div class="row">
              <div class="col-3">
                <q-avatar class="q-mr-xs" id="image_profile">
                  <img :src="this.details[index].image_profile" />
                </q-avatar>
              </div>
              <div class="col">
                <div class="text-subtitle2" id="student_name">
                  {{ this.details[index].firstname }} {{ this.details[index].lastname }}
                </div>
                <div class="" style="font-size: 10px" id="date">18 May</div>
                <div style="text-align: center">
                  <q-icon name="business_center" />
                </div>
                <div class="" style="text-align: center" id="update_working">
                  {{ this.details[index].position }} {{ this.details[index].workplace }}
                </div>
                <div
                  class=""
                  style="font-size: 12px; text-align: center"
                  id="update_date"
                >
                  {{ this.details[index].start_work }}
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
 <script>
import { ref } from "vue";
import { getFeedById } from "../api/api";
export default {
  methods: {
    // async timelinefeed() {
    //   console.log(this.student[0].student_id);
    //   this.timeline = await getTimelineById(this.student[0].student_id,this.student[0].major_id,
    //   this.student[0].faculty_id,this.student[0].campus_id,this.student[0].graduate_year);

    //   console.log("timeline");
    //   console.log(this.timeline);
    // },
    searchPage() {
      this.$router.push({ name: "searchPage" });
      console.log("hhikk");
    },
  },

// async getFeed(major_id,faculty_id,campus_id,graduate_year){

//   await getFeedById(major_id,faculty_id,campus_id,graduate_year)
// },

  async mounted() {
    const studentvalue = localStorage.getItem("student");
    const detailvalue = localStorage.getItem("detail");
    this.student = JSON.parse(studentvalue);
    this.detail = JSON.parse(detailvalue);
    this.details = await getFeedById(this.detail[0].major_id,this.detail[0].faculty_id,this.detail[0].campus_id,this.detail[0].graduate_year);
    console.log(this.student[0].image_profile);
    console.log(this.student);
    console.log(this.detail);
    this.profile = this.student[0].image_profile
    // await this.timelinefeed();
  },

  data() {
    return {
      search: ref(""),
      test:[],
      student: [],
      details: [],
      timeline: [],
      profile:ref("")
    };
  },
};
</script>