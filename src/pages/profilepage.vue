<template>
  <q-page padding>
    <!-- card profile -->

    <q-card
      v-for="(col, index) in person"
      :key="index"
      class="my-card text-white"
      style="height: 385px; margin-top: 90px ;background: linear-gradient(#032030 0%, #1794a5 100%);"
    >
      <q-card-section class="text-center">
        <!-- profile image -->

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
        <q-icon
          @click="toavatar"
          name="add_circle"
          style="position: relative; bottom: 20px; right: 20px; font-size: 30px"
        />

        <!-- show name -->

        <div class="text-h6" id="user_name" style="margin-top: -40px">
          {{ this.person[0].firstname }} {{ this.person[0].lastname }}
        </div>
      </q-card-section>

      <!-- profile data -->

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
            <q-icon name="edit" @click="editLocation" />
          </div>
        </div>

        <div class="row">
          <q-icon name="favorite" style="margin-right: 10px" />
          <div id="status" class="col">
            {{ this.person[0].status }}
            <q-icon name="edit" @click="editStatus = true" />
          </div>
        </div>

        <div class="row">
          <q-icon name="description" style="margin-right: 10px" />
          <div class="col" id="epigram">
            {{ this.person[0].epigram }}
            <q-icon name="edit" @click="editEpigram = true" />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- timeline -->

    <div style="margin-left: 15px; margin-right: 15px;">
      <q-timeline color="secondary">
        <q-timeline-entry :avatar="this.profile" class="text-h6">
          <div class="row justify-start">My Timeline</div>
          <div class="row justify-end">
            <q-icon
              style="font-size: 40px; margin-top: -35px; color: #032030"
              name="add_circle"
              @click="icon = true"
            />
          </div>
        </q-timeline-entry>

        <q-scroll-area style="height: 300px"
          ><div v-for="(col, index) in timeline" :key="index">
            <q-timeline-entry
              :subtitle="getDate(this.timeline[index].start_work)"
            >
              <q-card class="text-white" style="background: linear-gradient(#032030 0%, #1794a5 100%);">
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

    <div class="row">
      <div class="col" style="padding: 5px 5px 10px 0px">
        <q-card
          @click="accountSetting()"
          class="my-card text-white text-center"
          style="
            background: linear-gradient(#032030 0%, #1794a5 100%);
            height: 100px;
            margin: 0 auto;
          "
        >
          <q-icon style="font-size: 40px; margin-top: 20px" name="lock" />
          <div class="text-caption" id="" style="">Account</div>
        </q-card>
      </div>
      <div class="col" style="padding: 5px 0px 10px 5px">
        <q-card
          @click="contactChannel()"
          class="my-card text-white text-center"
          style="
            background: linear-gradient(#032030 0%, #1794a5 100%);
            height: 100px;
            margin: 0 auto;
          "
        >
          <q-icon
            style="font-size: 40px; margin-top: 20px"
            name="attach_file"
          />
          <div class="text-caption" id="" style="">Contact channel</div>
        </q-card>
      </div>
    </div>

    <q-btn
      @click="logout"
      label="LOGOUT "
      class="full-width"
      style="
        font-size: 15px;
        color: white;
        background: linear-gradient(#b42425 0%, #b42425 100%);
      "
    />

    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Edit</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="address"
            autofocus
            @keyup.enter="prompt = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add address" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- alert add timeline -->
    <q-dialog
      v-model="icon"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card style="background: white">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Add Timeline</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
           <q-checkbox right-label v-model="currentJob" label="Current Job" style=" margin-top: 50px"/>
          <q-input
            v-model="workplace_name"
            id="workplace_name"
            label="Company name"
            :dense="dense"
            style="padding: 15px;"
            :rules="[(val) => !!val || 'Company name is required']"
          />

          <q-input
            v-model="position"
            id="position"
            label="Position"
            :dense="dense"
            style="padding: 15px"
            :rules="[(val) => !!val || 'Position is required']"
          />

          <q-input
            label="start date"
            v-model="startdate"
            mask="date"
            :rules="['date']"
            style="padding: 15px"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="startdate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
         

          <div v-if="currentJob === false">
            <q-input
              label="end date"
              v-model="enddate"
              mask="date"
              :rules="['date']"
              style="padding: 15px"
              ><template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="enddate">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            flat
            label="SAVE"
            color="primary"
            v-close-popup
            @click="addWorkplace"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!--Alert Edit Satatus -->

    <q-dialog v-model="editStatus" persistent>
      <q-card style="min-width: 350px; background: white">
        <q-card-section>
          <div class="text-h6">Edit Status</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="newStatus"
            autofocus
            @keyup.enter="prompt = false"
          ></q-input>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Save" v-close-popup @click="updateStatus" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!--Alert Edit Epigram -->

    <q-dialog v-model="editEpigram" persistent>
      <q-card style="min-width: 350px; background: white">
        <q-card-section>
          <div class="text-h6">Edit Epigram</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="newEpigram"
            autofocus
            @keyup.enter="prompt = false"
          ></q-input>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Save" v-close-popup @click="updateEpigram" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
 <script>
import { ref } from "vue";
import {
  getProfileById,
  getTimelineById,
  updateinformation,
  createworkplace,
  createworkplacebefore
} from "../api/api";
import { getAuth, signOut } from "firebase/auth";
import moment from "moment";
import { date } from "quasar";
export default {
  methods: {
    // backconfirmEmail() {
    //   this.$router.push({ name: "confirmEmail" });
    // },
    async addWorkplace() {
     
      
      if (this.currentJob == true) {
        // ไม่มี finish_work
        let work = await createworkplace(
          this.workplace_name,
          this.position,
          this.student[0].student_id,
          date.formatDate(this.startdate, "YYYY-MM-DD")
        );
        console.log("current job");
      } else {
        let workbefore = await createworkplacebefore(
          this.workplace_name,
          this.position,
          this.student[0].student_id,
          date.formatDate(this.startdate, "YYYY-MM-DD"),
          date.formatDate(this.enddate, "YYYY-MM-DD")
        );
        // มี finish_work
        console.log("old job");
      }
    },
    editLocation() {
      this.$router.push({ name: "pinLocation" });
    },
    async updateStatus() {
      console.log(this.person[0].status);
      console.log(this.newStatus);
      let updateStatus = await updateinformation(
        this.newEpigram,
        this.newStatus,
        this.student[0].student_id
      );
    },
    async updateEpigram() {
      console.log(this.newEpigram);
      let updateEpigram = await updateinformation(
        this.newEpigram,
        this.newStatus,
        this.student[0].student_id
      );
    },
    getDate: function (date) {
      return moment(date, "YYYY-MM-DD").format("DD MMMM YYYY");
    },
    contactChannel() {
      this.$router.push({ name: "contactChannel" });
    },
    accountSetting() {
      this.$router.push({ name: "accountSetting" });
    },
    toavatar() {
      this.$router.push({ name: "toavatar" });
    },
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          localStorage.clear();
          this.$router.push({ name: "loginPage" });
        })
        .catch((error) => {
          // An error happened.
        });
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
    this.newEpigram = this.person[0].epigram;
    this.newStatus = this.person[0].status;
  },

  data() {
    return {
      prompt: ref(false),
      address: ref(""),
      person: [],
      timeline: [],
      student: [],
      profile: ref(""),
      showdate: "",
      icon: ref(false),
      currentJob: ref(true),
      workplace_name: "",
      position: ref(""),
      dense: ref(false),
      startdate: ref(""),
      enddate: ref(""),
      maximizedToggle: ref(true),
      editStatus: ref(false),
      editEpigram: ref(false),
      newStatus: "",
      newEpigram: "",
    };
  },
};
</script>