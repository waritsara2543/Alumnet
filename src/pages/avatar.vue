<template>
  <q-page>
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <h5 class="text-bold" style="color: #014a88">Avatar</h5>

      
     <img src="../assets/man.png"  alt="" style="width: 200px; padding: 5px" id="imageurl">
    
    

    


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
export default {
  methods: {
    
    // backconfirmEmail() {
    //   this.$router.push({ name: "confirmEmail" });
    // },
    async tohomepage() {
      let profile = await updateprofile(this.files, this.student[0].student_id);
      this.$router.push({ name: "homepage" });
    },
    getImage() {
      const files = this.files;
      

      // Create the file metadata
      /** @type {any} */
      const metadata = {
        contentType: "image/png",
      };

      const storage = getStorage();
      const imageRef = ref(storage, "images/" + files[0].name);
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
           this.tohomepage()
            
            
          });
        })
        .catch((error) => {
          console.error("Upload failed", error);
          
        });
      
    },
  },


  data() {
    return {
      files: null,
      url:[],
    };
  },
};
</script>