<template>
  <q-page>
    <link
      href="https://fonts.googleapis.com/css?family=Josefin+Sans"
      rel="stylesheet"
    />

    <div class="q-pa-md">
      <div class="col">
        <h3 style="text-bold">Create an event</h3>
        <q-card
          class="my-card text-white text-center"
          style="background: #1794a5; height: 500px; margin: 0 auto"
        >
          <div style="padding: 50px 100px 100px 100px">
            <q-input
              color="cyan-8"
              outlined
              v-model="Title"
              label="Title"
              bg-color="white"
            >
            </q-input>

            <div style="padding: 20px 0px 0px 0px">
              <div class="row">
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
              <q-input
                color="cyan-8"
                outlined
                type="file"
                bg-color="white"
                accept=""
                v-model="file"
              />
            </div>

            <div class="q-pa-md" style="padding: 20px 0px 0px 0px">
              <q-input
                v-model="text"
                color="cyan-8"
                outlined
                type="textarea"
                bg-color="white"
                label="Detail"
              />
            </div>
            <div style="margin-top: 20px">
              <q-btn
                style="
                  font-size: 15px;
                  background: linear-gradient(#b42425 0%, #b42425 100%);
                "
                class="full-width"
                label="Submit"
                @click="getFile() ;showLoading()"
              />
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { createEvent } from "../api/api";
import {
  getStorage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
} from "firebase/storage";
import { getAuth } from "firebase/auth";
import { useQuasar, QSpinnerGears } from 'quasar'
import { onBeforeUnmount } from 'vue'

export default {
  methods: {
    async create(url) {
      let create = await createEvent(this.Title,this.text,url,this.date_start,this.date_end,1);
      this.$router.push({ name: "homeadmin" });
    },

    async getFile() {
      const auth = getAuth();
      const files = this.file;
      const user = auth.currentUser;

      if (user) {
        
        console.log("sign in");
        // Create the file metadata
        /** @type {any} */
        const metadata = {
          contentType: "",
        };
        console.log(files);
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
              this.create(url);
            });
          })
          .catch((error) => {
            console.error("Upload failed", error);
          });
      } else {
      }
    },
  },
  mounted(){
    const adminvalue = localStorage.getItem("admin");
    console.log(adminvalue);
  },

  data() {
    const $q = useQuasar()
    let timer

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer)
        $q.loading.hide()
      }
    })
    return {
      text: "",
      time: "",
      date: "",
      date_end: "",
      date_start: "",
      Title: "",
      
      file: "",
      showLoading () {
        $q.loading.show({
          message: 'Creating event. Please wait...',
          boxClass: 'bg-grey-2 text-grey-9',
          spinnerColor: 'primary'
        })

        // hiding in 3s
        timer = setTimeout(() => {
          $q.loading.hide()
          timer = void 0
        }, 20000)
      }
    
  
     
    };
  },
};
</script>
<style>
body {
  font-family: "Josefin Sans", sans-serif;
  box-sizing: border-box;
}
</style>