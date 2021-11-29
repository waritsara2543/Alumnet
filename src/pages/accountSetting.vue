<template>
  <q-page padding>
    <div style="">
      <q-toolbar class="text-white rounded-borders" style="background: #032030">
        <q-btn
          round
          dense
          flat
          class="q-mr-xs"
          icon="arrow_back"
          @click="back()"
        ></q-btn>

        <p class="text-bold text-h6" style="margin-top: 12px">Account</p>
        <q-icon style="font-size: 25px; margin-bottom: 2px" name="lock" />
      </q-toolbar>

      <q-card
        class="my-card text-white full-width"
        style="background: #032030; margin-top: 10px"
       
      >
        <q-card-section class="">
          <div class="row">
            <div class="col-3">
              <div class="text-subtitle2">Email:</div>
            </div>
            <div class="col">
              <div class="text-subtitle2" style="" id="Email">
                {{this.newemail}}
              </div>
            </div>
            <div class="col-1">
              <q-btn
                round
                dense
                flat
                style="margin-top: -5px"
                @click="editemail = true"
              >
                Edit</q-btn
              >
            </div>
          </div>
        </q-card-section>
      </q-card>

      <q-card
        class="my-card text-white full-width"
        style="background: #032030; margin-top: 10px"
      >
        <q-card-section class="">
          <div class="row">
            <div class="col-3">
              <div class="text-subtitle2">Password:</div>
            </div>
            <div class="col">
              <div class="text-subtitle2" style="" id="password">
                **********
              </div>
            </div>
            <div class="col-1">
              <q-btn
                round
                dense
                flat
                style="margin-top: -5px"
                @click="editpassword = true"
              >
                Edit</q-btn
              >
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <!-- dialog  Edit Email-->

    <q-dialog v-model="editemail" persistent>
      <q-card style="min-width: 350px; background: white">
        <q-card-section>
          <div class="text-h6">Update Email</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            square
            outlined
            v-model="newemail"
            label="email"
            @keyup.enter="editemail = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Update" v-close-popup @click="updateMyEmail" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- dialog  Edit Password-->

    <q-dialog v-model="editpassword" persistent>
      <q-card style="min-width: 350px; background: white">
        <q-card-section>
          <div class="text-h6">Update Password</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            :type="isPwd ? 'password' : 'text'"
            square
            outlined
            v-model="password"
            label="password"
            @keyup.enter="editpassword = false"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              /> </template
          ></q-input>
          <q-input
            :type="isPwd ? 'password' : 'text'"
            square
            outlined
            v-model="repassword"
            label="confirm password"
            style="margin-top: 10px"
            ><template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              /> </template
          ></q-input>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Update" v-close-popup @click="updatePass" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
 <script>
import { ref } from "vue";
import { getAuth, updateEmail, updatePassword,sendEmailVerification } from "firebase/auth";
import { confirmEmaill } from "../api/api";

export default {
  methods: {
    back() {
      this.$router.push({ name: "profilepage" });
    },
    async updateEmailSuccess(email){
      let update = await confirmEmaill(email,this.student[0].student_id);
    },

    updateMyEmail() {
      const newemail = this.newemail;

      const auth = getAuth();
      // console.log(auth);
      updateEmail(auth.currentUser, newemail)
        .then(() => {
          sendEmailVerification(auth.currentUser)
          .then(() => {
           this.updateEmailSuccess(newemail)
          // console.log("Email updated!");
            });

         
         
        })
        .catch((error) => {
          // An error occurred
          // console.log(error);
          // ...
        });
    },
    updatePass() {
      if (this.password !== this.repassword) {
        alert("password and confirm password is not equal");
      } else {
        const auth = getAuth();

        const user = auth.currentUser;
        const newPassword = this.password;

        updatePassword(user, newPassword)
          .then(() => {
            // Update successful.
            // console.log("Update successful");
          })
          .catch((error) => {
            // An error ocurred
            // ...
          });
      }
    },
  },
  mounted(){
    const studentvalue = localStorage.getItem("student");
     this.student = JSON.parse(studentvalue);
    //  console.log(this.student[0].student_id);
     this.newemail = this.student[0].email
     },

  data() {
    return {
      editpassword: ref(false),
      editemail: ref(false),

      newemail: ref(""),
      password: "",
      repassword: "",
      isPwd: ref(true),
      student:[]
    };
  },
};
</script>