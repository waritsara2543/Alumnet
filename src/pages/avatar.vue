<template>
  <q-page>
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <h5 class="text-bold" style="color: #014a88">Avatar</h5>

      <div v-if="imageProfile === ''">
        <img
          src="../assets/man.png"
          alt=""
          style="width: 200px; padding: 5px"
          id="imageurl"
        />
      </div>

      <div v-if="imageProfile === this.imageProfile">
        <img
          :src="this.imageProfile"
          alt=""
          style="width: 200px; padding: 5px"
          id="imageurl"
        />
      </div>

      <div class="q-pa-md text-center">
        <q-file
          v-model="files"
          label="Pick image"
          outlined
          multiple
          style="max-width: 800px"
          accept=".jpg, image/*"
          max-files="1"
        />

        <div class="col" style="padding: 20px">
          <q-btn
            @click="getImage"
            rounded
            label="UPLOAD"
            class="full-width"
            style="
              font-size: 15px;
              background: linear-gradient(#b42425 0%, #b42425 100%);
            "
          />
        </div>
      </div>
    </div>
  </q-page>
</template>
 <script>
// import { ref } from "vue";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getAuth } from "firebase/auth";

import { updateprofile, getDetailById } from "../api/api";
export default {
  methods: {
    // backconfirmEmail() {
    //   this.$router.push({ name: "confirmEmail" });
    // },
    async tohomepage(url) {
      let profile = await updateprofile(url, this.student[0].student_id);
      this.$router.push({ name: "homepage" });
   
    },
    async getImage() {

      const auth = getAuth();
      const files = this.files;
      const user = auth.currentUser;

      if(files != null){
        
      
        /** @type {any} */
        const metadata = {
          contentType: "image/png",
        };

        const storage = getStorage();
        const imageRef = ref(storage, "images/" + files[0].name);
        uploadBytesResumable(imageRef, files[0], metadata)
          .then((snapshot) => {
            
            getDownloadURL(snapshot.ref).then((url) => {
              
             
              this.tohomepage(url);
            });
          })
          .catch((error) => {
            console.error("Upload failed", error);
          });

      }else{

        this.nourl =this.student[0].image_profile;
        this.tohomepage(this.nourl);

      }

     
    },
  },
  async mounted() {
    const value = localStorage.getItem("student");
    this.student = JSON.parse(value);
    this.imageProfile = this.student[0].image_profile;
    let detail = await getDetailById(this.student[0].email);
    localStorage.setItem("detail", JSON.stringify(detail));
  },

  data() {
    return {
      files: null,
      url: [],
      student: [],
      imageProfile: "",
      nourl:''
    };
  },
};
</script>