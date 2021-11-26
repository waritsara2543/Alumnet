<template>
  <q-page style="background: #d0dfe6">
    <div class="q-pa-md">
      <div class="q-gutter-y-md column">
        <q-toolbar
          class="text-white rounded-borders"
          style="background: #032030"
        >
          <q-btn
            round
            dense
            flat
            class="q-mr-xs"
            icon="arrow_back"
            @click="back()"
          ></q-btn>

          <p style="padding: 15px 0px 0px 20px; font-size: 15px" id="user_name">
            Detail
          </p>
        </q-toolbar>

        <div v-for="(col, index) in detail_event" :key="index" >
          <!-- -----------------------title ----------------------------------------------------->
          <q-card
            class="my-card text-white full-width"
            style="background: linear-gradient(#032030 0%, #1794a5 100%);margin:10px"
          >
            <q-card-section class="text-left">
              <div class="text-h6" id="title_content">
                {{ this.detail_event[0].title }}
              </div>
            </q-card-section>
          </q-card>

          <div class="row">
            <!-- -----------------------start date----------------------------------------------------->
            <div class="col" style="margin-right: 5px">
              <q-card
                class="my-card text-white full-width"
                style="background: linear-gradient(#032030 0%, #1794a5 100%);margin:10px"
              >
                <q-card-section class="text-left">
                  <div class="text-subtitle2" id="start_date">start date : {{ getDate(this.detail_event[0].start_activity)}}</div>
                </q-card-section>
              </q-card>
            </div>

            <!-- -----------------------start time----------------------------------------------------->
            <div class="col-5" style="margin-left: 5px">
              <q-card
                class="my-card text-white full-width"
                style="background: linear-gradient(#032030 0%, #1794a5 100%);margin:10px"
              >
                <q-card-section class="text-left">
                  <div class="text-subtitle2" id="start_time">start time : {{ getTime(this.detail_event[0].start_activity)}}</div>
                </q-card-section>
              </q-card>
            </div>
          </div>

          <div class="row" style="margin-top: -2px">
            <!-- -----------------------end date----------------------------------------------------->
            <div class="col" style="margin-right: 5px">
              <q-card
                class="my-card text-white full-width"
                style="background: linear-gradient(#032030 0%, #1794a5 100%);margin:10px"
              >
                <q-card-section class="text-left">
                  <div class="text-subtitle2" id="end_date">end date : {{ getDate(this.detail_event[0].finish_activity)}}</div>
                </q-card-section>
              </q-card>
            </div>

            <!-- -----------------------end time----------------------------------------------------->
            <div class="col-5" style="margin-left: 5px">
              <q-card
                class="my-card text-white full-width"
                style="background: linear-gradient(#032030 0%, #1794a5 100%);margin:10px"
              >
                <q-card-section class="text-left">
                  <div class="text-subtitle2" id="end_time">end time : {{ getTime(this.detail_event[0].finish_activity)}}</div>
                </q-card-section>
              </q-card>
            </div>
          </div>

          <!-- -----------------------detail ----------------------------------------------------->
          <q-card
            class="my-card text-white full-width"
            style="
              margin-top: -2px;
              background: linear-gradient(#032030 0%, #1794a5 100%);margin:10px;
            "
          >
            <q-card-section class="text-left">
              <div class="text-body" id="detail">
                {{ this.detail_event[0].content }}
              </div>
              <q-btn
                  v-if="this.detail_event[0].image != ''"
                  type="a"
                  :href="this.detail_event[0].image"
                  label="File"
                  class="full-width bg-secondary text-white"
                  style="font-size: 15px; max-width: 50px;margin-top:10px;"
                />
            </q-card-section>
          </q-card>

          <!-- -----------------------files ----------------------------------------------------->
        </div>
      </div>
    </div>
  </q-page>
</template>
 <script>
import { ref } from "vue";
import { getEventBypublicid } from "../api/api";
import moment from "moment";
export default {
  methods: {
    back() {
      this.$router.push({ name: "notificationpage" });
    },
    getDate: function (date) {
      return moment(date, "YYYY-MM-DD").format("YYYY-MM-DD");
    },
    getTime: function (date) {
      return moment(date, "HH:mm").format("HH:mm");
    },
  },
  async mounted() {
    const detailvalue = localStorage.getItem("detail");
    this.detail = JSON.parse(detailvalue);
    this.detail_event = await getEventBypublicid(
      this.detail[0].faculty_id,
      this.public_relation_id
    );
    
  },

  data() {
    return {
      search: ref(""),
      public_relation_id: this.$route.params.public_relation_id,
      detail_event: [],
      detail: [],
    };
  },
};
</script>