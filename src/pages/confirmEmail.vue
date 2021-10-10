<template>
  <q-page padding >
      
    <q-icon name="arrow_back" style="font-size: 32px;"  />
    
    <h1>
      Please verify your email
    </h1>
    <q-btn
        @click="verify()"
        label="OK"
        class="full-width"
        style="
          font-size: 20px;
          background: linear-gradient(#b42425 0%, #b42425 100%);
        "
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
   
    },
  },

  setup() {
    return {
      username: ref(""),
      password: ref(""),
      isPwd: ref(true),
      confirmpassword: ref(""),
      isconfirmPwd: ref(true),
    };
  },
};
 </script>