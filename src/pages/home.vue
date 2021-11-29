<template>
  <q-page>
    <!-- {{ student }} <br>
    <div v-for="(col,index) in student" :key="index">
      {{ col.student_id }}
    </div> -->
    <!-- {{ timeline }} -->
    <div class="q-pa-md" style="background: #d0dfe6">
      <div class="q-gutter-y-md column" style="max-width: 100%">
        <q-toolbar
          v-for="(col, index) in student"
          :key="index"
          class="text-white rounded-borders"
          style="background: #032030"
        >
          <q-avatar class="q-mr-xs q-ml-md" id="image_profile">
            <img :src="this.profile" />
          </q-avatar>
          <p style="padding: 15px 0px 0px 20px; font-size: 15px" id="user_name">
            {{ this.student[0].firstname }} {{ this.student[0].lastname }}
          </p>

          <q-space />

          <q-icon name="search" @click="searchPage()" style="font-size: 25px" />
        </q-toolbar>

        <q-card
          v-for="(col, index) in details"
          :key="index"
          class="my-card text-black full-width"
          style="background: white; margin: 0 auto; margin-top: 20px"
        >
          <q-card-section>
            <div class="row" style="text-align: center">
              <q-avatar
                class="q-mr-xs"
                id="image_profile"
                style="margin-right: 20px"
              >
                <img :src="this.details[index].image_profile" />
              </q-avatar>

              <div class="col">
                <img src="../assets/confetti.png" style="width: 30px" />
                <div class="text-subtitle2" id="student_name">
                  Congratulate
                  {{ this.details[index].firstname }}
                  {{ this.details[index].lastname }}
                </div>

                <!-- <q-icon name="business_center" /> -->

                for starting a new position as
                {{ this.details[index].position }} at
                {{ this.details[index].workplace }}

                <div class="" style="font-size: 12px" id="update_date">
                  {{ getDate(this.details[index].start_work) }}
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
import {
  getFeedById,
  createToken,
  getTokenID,
  updateToken,
  getTokenOnlyByadmiin,
} from "../api/api";
import moment from "moment";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { initializeApp } from "firebase/app";
export default {
  // async getFeed(major_id,faculty_id,campus_id,graduate_year){

  //   await getFeedById(major_id,faculty_id,campus_id,graduate_year)
  // },

  async mounted() {
    const studentvalue = localStorage.getItem("student");
    const detailvalue = localStorage.getItem("detail");
    this.student = JSON.parse(studentvalue);
    this.detail = JSON.parse(detailvalue);
    this.details = await getFeedById(
      this.detail[0].major_id,
      this.detail[0].faculty_id,
      this.detail[0].campus_id,
      this.detail[0].graduate_year
    );
    this.token = await getTokenOnlyByadmiin(
      this.detail[0].campus_id,
      this.detail[0].major_id
    );
    console.log(this.token);
    this.profile = this.student[0].image_profile;

    // await this.timelinefeed();

    const messaging = getMessaging();
    getToken(messaging, {
      vapidKey:
        "BOhHaLekJ-yRU8irFFqEfMubAczwPG8kF5xixND5nmvWYYHy0BY5HVM9IOnlCEEtkRCnCqXq4FqG04kpSwheRa8",
    })
      .then((currentToken) => {
        if (currentToken) {
          // These registration tokens come from the client FCM SDKs.

          // Send the token to your server and update the UI if necessary
          // ...
          console.log(currentToken);
          this.checkToken(currentToken);

          // const messaging = getMessaging();
          onMessage(messaging, (payload) => {
            this.content = payload.notification.body;
            this.title = payload.notification.title;
            alert(this.title + " : " + this.content);

            // ...
          });
        } else {
          // Show permission request UI
          // ...
        }
      })
      .catch((err) => {
        // ...
      });
  
  },
  methods: {
    async checkToken(token) {
      this.token = await getTokenID(this.student[0].student_id);
      if (this.token.length == 0) {
        this.addToken(this.student[0].student_id, token);
      } else {
        await updateToken(token);
      }
    },
    searchPage() {
      this.$router.push({ name: "searchPage" });
    },
    getDate: function (date) {
      return moment(date, "YYYY-MM-DD").format("DD MMMM YYYY");
    },
    async addToken(student_id, token) {
      this.value = await createToken(student_id, token);
    },
  },

  data() {
    return {
      search: ref(""),
      test: [],
      student: [],
      details: [],
      timeline: [],
      title: "",
      content: "",
      profile: ref(""),
      value: [],
      token: [],
      get:[],
    };
  },
};
</script>