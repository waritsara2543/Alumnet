<template>
  <q-page padding>
      <q-btn
            round
            dense
            flat
            class="q-mr-xs"
            icon="arrow_back"
            @click="backtosearch()"
          ></q-btn>
    <q-card
      v-for="(col, index) in person"
      :key="index"
      class="my-card text-white"
      style="height: 385px; margin-top: 30px"
    >
      <q-card-section class="text-center">
        <q-avatar
          class="q-mr-xs"
          id="image_profile"
          style="
            position: relative;
            width: 100px;
            height: 100px;
            top: -60px;
            left: 10px;
            background: white;
          "
        >
          <img :src="this.profile" style="border-style: solid" />
        </q-avatar>

        <div class="text-h6" id="user_name" style="margin-top: -40px">
          {{ this.person[0].firstname }} {{ this.person[0].lastname }}
        </div>
        <div
          class="text-h6"
          style="border-top: 3px solid #ffffff; margin-top: 20px"
        ></div>
      </q-card-section>
      <q-card-section class="text-left">
        <div class="row">
          <q-icon name="school" style="margin-right: 10px" />

          <div id="graduate" class="col">
            Graduation {{ this.person[0].major }}
            {{ this.person[0].graduate_year }} at {{ this.person[0].campus }}
            
          </div>
        </div>

        <div class="row">
          <q-icon name="business_center" style="margin-right: 10px" />

          <div id="workplace" class="col">
            {{ this.person[0].position }} at {{ this.person[0].workplace }}
            
          </div>
        </div>

        <div class="row">
          <q-icon name="location_on" style="margin-right: 10px" />

          <div id="province" class="col">
            Lives in {{ this.person[0].province }},
            {{ this.person[0].country }}
          </div>
        </div>

        <div class="row">
          <q-icon name="favorite" style="margin-right: 10px" />

          <div id="status" class="col">
            {{ this.person[0].status }} 
          </div>
        </div>

        <div class="row">
          <q-icon name="description" style="margin-right: 10px" />

          <div class="col" id="epigram">
            {{ this.person[0].epigram }}
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- timeline -->

    <div style="margin-left: 15px; margin-right: 15px">
      <q-timeline color="secondary">
        <q-timeline-entry :avatar="this.profile" class="text-h6">
          My Timeline
        </q-timeline-entry>
        <q-scroll-area style="height: 200px"
          ><div v-for="(col, index) in timeline" :key="index">
            <q-timeline-entry :subtitle="getDate (this.timeline[index].start_work)">
              <q-card class="text-white">
                <div style="text-align: center">
                  <div>
                    <q-icon name="business_center" />
                  </div>
                  {{ this.timeline[index].position }} at
                  {{ this.timeline[index].name }}
                </div>
              </q-card>
            </q-timeline-entry>
          </div>
        </q-scroll-area>
      </q-timeline>
    </div>

   
  </q-page>
</template>
 <script>
import { ref } from "vue";
import { getProfileById, getTimelineById } from "../api/api";
import { getAuth, signOut } from "firebase/auth";
import moment from 'moment';
export default {
  methods: {
    // backconfirmEmail() {
    //   this.$router.push({ name: "confirmEmail" });
    // },
    backtosearch() {
      this.$router.push({ name: "searchPage" });
    },
    getDate : function (date) {
                return moment(date, 'YYYY-MM-DD').format('DD MMMM YYYY');
            },
    
   
    
    async detailstudent() {
      this.person = await getProfileById(this.student[0].student_id);
      this.timeline = await getTimelineById(this.student[0].student_id);
      console.log(this.timeline);
      console.log(this.person);
    },
  },
  
  async mounted() {
    const value = localStorage.getItem("student");
    this.student = JSON.parse(value);
    await this.detailstudent(this.student[0].student_id);
    this.profile = this.student[0].image_profile;
    
  },

  data() {
    return {
      prompt: ref(false),
      address: ref(""),
      person: [],
      timeline: [],
      student: [],
      profile: ref(""),
      showdate:("")
    };
  },
};
</script>