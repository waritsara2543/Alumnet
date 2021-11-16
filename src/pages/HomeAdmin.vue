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
                />
                <q-icon
                  name="delete"
                  class="text-white"
                  style="font-size: 32px"
                />
              </div>
            </q-card>
          </div>
        </q-card>
      </div>
    </div>
  </div>

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
    return {
      search: ref(""),
      files: ref(null),
      uploadProgress: ref([]),
      uploading: ref(null),
      dialog: ref(false),
      maximizedToggle: ref(true),
      year: ref(""),
      dense: ref(false),
    };
  },
};
</script>
