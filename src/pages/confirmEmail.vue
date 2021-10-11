<template>
<<<<<<< HEAD
  <q-page padding>
    <q-icon name="arrow_back" style="font-size: 32px" @click="backregisPage1" />
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <h2 class="text-bold" style="color: #014a88">Confirm your email</h2>
      <q-input
        outlined
        v-model="code"
        label=""
        hint="Type in the code we sent to your email"
        class="full-width"
        style=""
      ></q-input>
      <q-btn
        label="CONFIRM"
=======
  <q-page padding >
      
    <q-icon name="arrow_back" style="font-size: 32px;"  />
    
    <h1>
      Please verify your email
    </h1>
    <q-btn
        @click="verify()"
        label="OK"
>>>>>>> waritsarabranch
        class="full-width"
        style="
          font-size: 20px;
          background: linear-gradient(#b42425 0%, #b42425 100%);
        "
<<<<<<< HEAD
        @click="verify()"
      />
      <div class="row">
        <div class="col">
          <p style="color: #014a88">Didn't receive the code ?</p>
        </div>
        <div class="col">
          <p class="text-italic" style="color: #1794a5" @click="sendAgain">
            send again
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>
 <script>
import { ref } from "vue";
import { getAuth, sendEmailVerification } from "firebase/auth";
export default {
  methods: {
    backregisPage1() {
      this.$router.push({ name: "regist1" });
    },
    sendAgain() {},
    tostdIdSignup() {
      this.$router.push({ name: "stdIdSignup" });
    },
    verify() {
      

      const auth = getAuth();
      sendEmailVerification(auth.currentUser).then(() => {
        // Email verification sent!
        // ...
      });
=======
      />
  </q-page>
</template>
 <script>
 import { ref } from "vue";
import {
  getAuth,
  sendEmailVerification,
  createUserWithEmailAndPassword,
} from "firebase/auth";
export default {
  methods: {
    toConfirmEmail() {
      this.$router.push({ name: "confirmEmail" });
    },
    
    verify() {
            const auth = getAuth();
            const user = auth.currentUser;
            const email_verified = auth.currentUser.emailVerified;
            console.log(email_verified);
   
>>>>>>> waritsarabranch
    },
  },

  setup() {
    return {
<<<<<<< HEAD
      code: ref(""),
=======
      username: ref(""),
      password: ref(""),
      isPwd: ref(true),
      confirmpassword: ref(""),
      isconfirmPwd: ref(true),
>>>>>>> waritsarabranch
    };
  },
};
</script>