<template>
  <q-page>
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

        <!-- -----------------------title ----------------------------------------------------->
        <q-card class="my-card text-white full-width" style="background: linear-gradient(#032030 0%, #1794a5 100%);">
          <q-card-section class="text-left">
            <div class="text-h6" id="title_content">title</div>
          </q-card-section>
        </q-card>

        <div class="row">
          <!-- -----------------------start date----------------------------------------------------->
          <div class="col" style="margin-right: 5px">
            <q-card class="my-card text-white full-width" style="background: linear-gradient(#032030 0%, #1794a5 100%);">
              <q-card-section class="text-left">
                <div class="text-subtitle2" id="start_date">start date</div>
              </q-card-section>
            </q-card>
          </div>

          <!-- -----------------------start time----------------------------------------------------->
          <div class="col" style="margin-left: 5px">
            <q-card class="my-card text-white full-width" style="background: linear-gradient(#032030 0%, #1794a5 100%);">
              <q-card-section class="text-left">
                <div class="text-subtitle2" id="start_time">start time</div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <div class="row" style="margin-top: -2px">
          <!-- -----------------------end date----------------------------------------------------->
          <div class="col" style="margin-right: 5px">
            <q-card class="my-card text-white full-width" style="background: linear-gradient(#032030 0%, #1794a5 100%);">
              <q-card-section class="text-left">
                <div class="text-subtitle2" id="end_date">end date</div>
              </q-card-section>
            </q-card>
          </div>

          <!-- -----------------------end time----------------------------------------------------->
          <div class="col" style="margin-left: 5px">
            <q-card class="my-card text-white full-width" style="background: linear-gradient(#032030 0%, #1794a5 100%);">
              <q-card-section class="text-left">
                <div class="text-subtitle2" id="end_time">end time</div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- -----------------------detail ----------------------------------------------------->
        <q-card class="my-card text-white full-width" style="margin-top: -2px;background: linear-gradient(#032030 0%, #1794a5 100%);">
          <q-card-section class="text-left">
            <div class="text-body" id="detail">
              detail : Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </q-card-section>
        </q-card>

         <!-- -----------------------files ----------------------------------------------------->
         

      </div>
    </div>
  </q-page>
</template>
 <script>
import { ref } from "vue";
export default {
  methods: {
    back() {
      this.$router.push({ name: "notificationpage" });
    },
  },
  mounted(){
    console.log(this.public_relation_id);
  },

  data() {
    return {
      search: ref(""),
      public_relation_id : this.$route.params.public_relation_id, 
    };
  },
};
</script>