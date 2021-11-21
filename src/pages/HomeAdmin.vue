<template>
  <div class="row">
    <div class="col-4">
      <div class="q-pa-md">
        <div class="col" style="padding: 5px 100px 100px 100px">
          <q-card
            class="my-card text-white text-center"
            style="background: #d0dfe6; height: 100px; margin: 0 auto"
          >
          </q-card>
          <q-card
            class="my-card text-white text-center"
            style="
              background: linear-gradient(#032030 0%, #1794a5 100%);
              height: 500px;
              margin: 0 auto;
            "
          >
            <q-avatar
              class="q-mr-xs"
              id="image_profile"
              style="
                position: relative;
                width: 100px;
                height: 100px;
                top: -60px;
              "
            >
              <img src="../assets/man.png" style="" />
            </q-avatar>
            <div class="text-caption" id="" style="font-size: 20px">
              Manee Mebun
            </div>
            <div
              class="row justify-center"
              style="
                border-top: 3px solid #ffffff;
                padding: 10px;
                margin-top: 20px;
                width: 100%;
              "
            ></div>
            <div class="q-pa-md q-gutter-sm">
              <q-btn
                style="
                  background: #b42425;
                  color: white;
                  width: 90%;
                  bottom: 0px; ;
                "
                label="LOGOUT"
                @click="logout"
              />
            </div>
          </q-card>
          <div class="q-pa-md q-gutter-sm">
            <q-btn
              style="color: white; width: 100%; background: #b42425"
              label="IMPORT ALUMNI LIST"
              @click="dialog = true"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="col-8">
      <div class="q-pa-md">
        <q-card style="background: #d0dfe6">
          <div class="col" style="padding: 50px 50px 50px 50px">
            <q-card
              class="my-card text-white text-center"
              style="
                background: #8d949e;
                height: 200px;
                width: 100%;
                margin: 0 auto;
                margin: 0px 0px 20px 0px;
              "
            >
              <q-icon
                name="add_circle_outline"
                style="font-size: 50px; padding: 70px 50px 50px 50px"
                @click="createEvent()"
              >
              </q-icon>
            </q-card>
            <q-card
              v-for="(col, index) in events"
              :key="index"
              class="my-card text-black"
              style="
                background: white;
                width: 100%;
                margin: 0 auto;
                margin: 0px 0px 20px 0px;
              "
            >
              <div class="text-caption text-right" id="" style="">
                <q-icon
                  name="edit"
                  class="text-black"
                  style="font-size: 32px"
                  @click="showDialogEdit(this.events[index].public_relation_id)"
                />
                <q-icon
                  name="delete"
                  class="text-black"
                  style="font-size: 32px"
                  @click="showDialogDelete(this.events[index].public_relation_id)"
                />
              </div>
              <div style="margin-left: 10px; padding: 5px">
                <div
                  class="text-h6"
                  style="margin-top: -20px; margin-bottom: 10px"
                >
                  {{ this.events[index].title }}{{this.events[index].public_relation_id}}
                
                </div>

                <div class="row" style="margin-bottom: 10px">
                  <div class="col text-subtitle2">
                    start : {{this.events[index].start_activity}}
                  </div>
                  <div class="col text-subtitle2">
                    end : {{this.events[index].finish_activity}}
                  </div>
                </div>
                <div style="margin-bottom: 10px">
                  Detail : {{this.events[index].content}}
                </div>

                <q-btn
                  label="File"
                  class="full-width bg-secondary text-white"
                  style="font-size: 15px; max-width: 50px"
                />
              </div>
            </q-card>
          </div>
        </q-card>
      </div>
    </div>
  </div>

  <!-- alert import alumni list -->
  <q-dialog
    v-model="dialog"
    persistent
    :maximized="maximizedToggle"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="bg-white text-black">
      <q-bar>
        <q-space />
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <div class="text-h6">Import Alumni List</div>
      </q-card-section>

      <q-card-section class="">
        <q-input
          v-model="year"
          label="Graduation's year of alumni list"
          style="padding: 15px; margin-top: 50px"
          :rules="[
            (val) => val.length != 0 || 'year is required',
            (val) => val.length > 3 || 'Please input year',
            (val) => val.length < 5 || 'Please input year',
          ]"
        />

        <q-file
          v-model="files"
          label="Pick Alumni List File"
          outlined
          multiple
          accept=".jpg, image/*"
          max-files="1"
          style="padding: 15px; margin-top: 50px"
        />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="SAVE" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <!-- alert edit event -->

  <q-dialog
    v-model="editEvent"
    persistent
    :maximized="maximizedToggle"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <!-- bar -->
    <q-card class="bg-white text-black">
      <q-bar>
        <q-space />
        <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <div class="text-h6">Edit event</div>
      </q-card-section>

      <q-card-section class="">
        <!-- edit title -->

        <q-input
          color="cyan-8"
          outlined
          v-model="newTitle"
          label="Title"
          bg-color="white"
        >
        </q-input>

        <div style="padding: 20px 0px 0px 0px">
          <div class="row" style="margin-top: -7px">
            <q-input
              color="cyan-8"
              bg-color="white"
              outlined
              v-model="date_start"
              label="Select start Datetime"
              class="full-width"
              style="max-width: 800px"
            >
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="date_start" mask="YYYY-MM-DD HH:mm">
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

              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-time
                      v-model="date_start"
                      mask="YYYY-MM-DD HH:mm"
                      format24h
                    >
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-space />

            <q-input
              color="cyan-8"
              outlined
              bg-color="white"
              v-model="date_end"
              label="Select end Datetime"
              class="full-width"
              style="max-width: 800px"
            >
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="date_end" mask="YYYY-MM-DD HH:mm">
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

              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-time
                      v-model="date_end"
                      mask="YYYY-MM-DD HH:mm"
                      format24h
                    >
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
        <div style="padding: 20px 0px 0px 0px">
          <!-- edit file -->

          <q-input
            color="cyan-8"
            outlined
            type="file"
            bg-color="white"
            accept=".jpg, image/*"
          />
        </div>

        <div class="q-pa-md" style="padding: 20px 0px 0px 0px">
          <!-- edit detail -->
          <q-input
            v-model="newtext"
            color="cyan-8"
            outlined
            type="textarea"
            bg-color="white"
            label="Detail"
          />
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          flat
          label="SAVE"
          color="primary"
          v-close-popup
          @click="updateEvent()"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import { getAuth, signOut } from "firebase/auth";
import { useQuasar } from "quasar";
import { getEvent } from "../api/api";
export default {
  methods: {
    createEvent() {
      this.$router.push({ name: "createevent" });
    },
    updateEvent(index) {
      console.log("Update Event");
    },
    deleteThisEvent() {
      console.log("Delete Event");
    },
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          localStorage.clear();
          this.$router.push({ name: "loginAdmin" });
        })
        .catch((error) => {
          // An error happened.
        });
    },

    showDialogEdit(index) {
      this.editEvent = true;
      console.log(index);
    },
  },
  async mounted() {
    const adminvalue = localStorage.getItem("admin");
    this.admin = JSON.parse(adminvalue);
    this.events = await getEvent(this.admin[0].faculty_id);
    console.log(this.admin[0].faculty_id);
    console.log(this.events);
  },
  data() {
    const $q = useQuasar();

    return {
      admin:[],
      events: [],
      search: ref(""),
      files: ref(null),
      uploadProgress: ref([]),
      uploading: ref(null),
      dialog: ref(false),
      editEvent: ref(false),
      maximizedToggle: ref(true),
      year: ref(""),
      dense: ref(false),
      newTitle: "",
      newtext: "",
      time: ref(""),
      date_end: "",
      date_start: "",
      updateProxy() {
        proxyDate.value = date.value;
      },

      save() {
        date.value = proxyDate.value;
        date_end.value = proxyDate_end.value;
      },

      showDialogDelete(index) {
        $q.dialog({
          title: "Delete",
          message: "Are you sure to delete this event ?",
        })
          .onOk(() => {
            console.log(index);
          })
          .onCancel(() => {
            console.log("Cancel");
          })
          .onDismiss(() => {
            // console.log('I am triggered on both OK and Cancel')
          });
      },
    };
  },
};
</script>
