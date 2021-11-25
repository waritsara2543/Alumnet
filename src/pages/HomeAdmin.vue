<template>
  <div class="row">
    <div class="col-4">
      <div class="q-pa-md">
        <div
          class="col"
          style="padding: 5px 100px 100px 100px"
          v-for="(col, index) in admin"
          :key="index"
        >
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
              {{ this.admin[0].firstname }} {{ this.admin[0].lastname }}
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
                  @click="showDialogEdit(index)"
                />
                <q-icon
                  name="delete"
                  class="text-black"
                  style="font-size: 32px"
                  @click="showDialogDelete(index)"
                />
              </div>
              <div style="margin-left: 10px; padding: 5px">
                <div
                  class="text-h6"
                  style="margin-top: -20px; margin-bottom: 10px"
                >
                  {{ this.events[index].title }}
                </div>

                <div class="row" style="margin-bottom: 10px">
                  <div class="col text-subtitle2">
                    start : {{ getDateTime(this.events[index].start_activity) }}
                  </div>
                  <div class="col text-subtitle2">
                    end : {{ getDateTime(this.events[index].finish_activity) }}
                  </div>
                </div>
                <div style="margin-bottom: 10px">
                  Detail : {{ this.events[index].content }}
                </div>

                <q-btn
                  v-if="this.events[index].image != ''"
                  type="a"
                  :href="this.events[index].image"
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
          v-model="file"
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
            v-model="file"
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
          @click="getNewFile()"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
// import { ref } from "vue";
import moment from "moment";
import { getAuth, signOut } from "firebase/auth";
import { useQuasar } from "quasar";
import { getEvent, updateEvent, deleteEvent } from "../api/api";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import {
  getStorage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
} from "firebase/storage";

export default {
  methods: {
    getDateTime: function (date) {
      return moment(date, "YYYY-MM-DD HH:mm").format("DD MMMM YYYY HH:mm");
    },
    getDate: function (date) {
      return moment(date, "YYYY-MM-DD").format("YYYY-MM-DD");
    },
    createEvent() {
      this.$router.push({ name: "createevent" });
    },
    async updateEv(url) {
      let update = await updateEvent(
        this.newTitle,
        this.newtext,
        url,
        this.date_start,
        this.date_end,
        this.admin[0].faculty_id,
        this.public_relation_id
      );
      console.log(this.newTitle);
      console.log("Update Event");
      location.reload();
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

    async showDialogEdit(index) {
      this.editEvent = true;
      this.newTitle = this.events[index].title;
      this.date_start = moment(
        this.events[index].start_activity,
        "YYYY-MM-DD HH:mm "
      ).format("YYYY-MM-DD HH:mm ");
      this.date_end = moment(
        this.events[index].finish_activity,
        "YYYY-MM-DD HH:mm "
      ).format("YYYY-MM-DD HH:mm ");
      this.newtext = this.events[index].content;
      this.oldfile = this.events[index].image;
      this.public_relation_id = this.events[index].public_relation_id;
    },

    async getNewFile() {
      const auth = getAuth();
      const files = this.file;
      const user = auth.currentUser;
      console.log("click");

      console.log("sign in");
      // Create the file metadata
      /** @type {any} */
      const metadata = {
        contentType: "",
      };
      if (this.file == "") {
        this.updateEv(this.oldfile);
      } else {
        const storage = getStorage();
        const imageRef = ref(storage, "eventFile/" + files[0].name);
        uploadBytesResumable(imageRef, files[0], metadata)
          .then((snapshot) => {
            // console.log(files[0]);
            // console.log("Uploaded", snapshot.totalBytes, "bytes.");
            // console.log("File metadata:", snapshot.metadata);
            // Let's get a download URL for the file.
            getDownloadURL(snapshot.ref).then((url) => {
              console.log("File available at", url);
              // var img = document.getElementById("imageurl");
              //   console.log(img.getAttribute("src"));
              this.updateEv(url);
            });
          })
          .catch((error) => {
            console.error("Upload failed", error);
          });
      }
    },
  },
  async mounted() {
    const adminvalue = localStorage.getItem("admin");
    this.admin = JSON.parse(adminvalue);
    this.events = await getEvent(this.admin[0].faculty_id);

    const messaging = getMessaging();
    getToken(messaging, {
      vapidKey:
        "BOhHaLekJ-yRU8irFFqEfMubAczwPG8kF5xixND5nmvWYYHy0BY5HVM9IOnlCEEtkRCnCqXq4FqG04kpSwheRa8",
    })
      .then((currentToken) => {
        if (currentToken) {
          console.log(currentToken);
          console.log("currentToken");

          const registrationTokens = [currentToken];

          getMessaging()
            .subscribeToTopic(registrationTokens, topic)
            .then((response) => {
              console.log("Successfully subscribed to topic:", response);
            })
            .catch((error) => {
              console.log("Error subscribing to topic:", error);
            });
        } else {
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });
  },
  data() {
    const $q = useQuasar();

    return {
      public_relation_id: [],
      oldfile: "",
      admin: [],
      events: [],
      search: "",
      file: "",
      uploadProgress: [],
      uploading: null,
      dialog: false,
      editEvent: false,
      maximizedToggle: true,
      year: "",
      dense: false,
      newTitle: "",
      newtext: "",
      time: "",
      date_end: "",
      date_start: "",
      updateProxy() {
        proxyDate.value = date.value;
      },

      save() {
        date.value = proxyDate.value;
        date_end.value = proxyDate_end.value;
      },
      async deleteThisEvent(index) {
        let deleteEv = await deleteEvent(this.events[index].public_relation_id);
        console.log("Delete Event");
        location.reload();
      },

      async showDialogDelete(index) {
        $q.dialog({
          title: "Delete",
          message: "Are you sure to delete this event ?",
          cancel: true,
        })
          .onOk(() => {
            console.log(index);
            this.deleteThisEvent(index);
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
