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
              class="my-card text-white text-right"
              style="
                background: linear-gradient(#032030 0%, #1794a5 100%);
                height: 200px;
                width: 100%;
                margin: 0 auto;
              "
            >
              <div class="text-caption" id="" style="">
                <q-icon
                  name="edit"
                  class="text-white"
                  style="font-size: 32px"
                  @click="editEvent = true"
                />
                <q-icon
                  name="delete"
                  class="text-white"
                  style="font-size: 32px"
                  @click="deleteEvent = true"
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
          <div class="row">
            <q-card
              class="my-card bg-white text-grey-7 max-width"
              style="height: 60px; margin: 0 auto; width: 1500px"
            >
              <q-card-section>
                <div class="row" style="margin-top: -7px">
                  <div
                    class="text-subtitle1 text-left"
                    style="margin-right: 20px"
                  >
                    Start
                  </div>

                  <!-- edit date time start -->

                  <q-btn icon="event" round color="black">
                    <q-popup-proxy
                      color="cyan-8"
                      @before-show="updateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="proxyDate">
                        <div class="row items-center justify-end q-gutter-sm">
                          <q-btn
                            label="Cancel"
                            color="cyan-8"
                            flat
                            v-close-popup
                          />
                          <q-btn
                            label="OK"
                            color="cyan-8"
                            flat
                            @click="save"
                            v-close-popup
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-btn>
                  <q-badge color="white" class="text-black">
                    {{ date }}
                  </q-badge>
                  <q-btn
                    icon="access_time"
                    round
                    color="black"
                    class="cursor-pointer"
                  >
                    <q-popup-proxy
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="cyan-8"
                            flat
                          />
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-btn>
                  <q-space />
                  <div
                    class="text-subtitle1 text-left"
                    style="margin-right: 20px"
                  >
                    End
                  </div>

                   <!-- edit date time start -->

                  <q-btn icon="event" round color="black">
                    <q-popup-proxy
                      color="cyan-8"
                      @before-show="updateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="proxyDate_end">
                        <div class="row items-center justify-end q-gutter-sm">
                          <q-btn
                            label="Cancel"
                            color="cyan-8"
                            flat
                            v-close-popup
                          />
                          <q-btn
                            label="OK"
                            color="cyan-8"
                            flat
                            @click="save"
                            v-close-popup
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-btn>
                  <q-badge color="white" class="text-black">
                    {{ date_end }}
                  </q-badge>
                  <q-btn
                    icon="access_time"
                    round
                    color="black"
                    class="cursor-pointer"
                  >
                    <q-popup-proxy
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
                            color="cyan-8"
                            flat
                          />
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-btn>
                </div>
              </q-card-section>
            </q-card>
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
        <q-btn flat label="SAVE" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";

export default {
  methods: {
    createEvent() {
      this.$router.push({ name: "createevent" });
    },
  },
  setup() {
    const date = ref("2019/03/01 12:44");
    const date_end = ref("2019/03/01 12:44");
    const proxyDate = ref("2019/03/01 12:44");
    const proxyDate_end = ref("2019/03/01 12:44");
    return {
      search: ref(""),
      files: ref(null),
      uploadProgress: ref([]),
      uploading: ref(null),
      dialog: ref(false),
      editEvent: ref(false),
      deleteEvent: ref(false),
      maximizedToggle: ref(true),
      year: ref(""),
      dense: ref(false),
      newTitle: "",
      newtext: "",
      time: ref(""),
      date: ref(""),
      date_end: ref(""),
      date,
      date_end,
      proxyDate,
      proxyDate_end,

      updateProxy() {
        proxyDate.value = date.value;
      },

      save() {
        date.value = proxyDate.value;
        date_end.value = proxyDate_end.value;
      },
    };
  },
};
</script>
