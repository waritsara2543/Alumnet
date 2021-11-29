<template>
  <q-page padding>
    <q-icon name="arrow_back" style="font-size: 32px" @click="backLogin" />
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <h2 class="text-bold" style="color: #014a88">SIGN UP</h2>
      <q-input
        outlined
        v-model="username"
        type="email"
        label="Email"
        class="full-width"
        style=""
        :rules="[(val) => !!val || 'Email is required']"
      ></q-input>
      <q-input
        v-model="password"
        outlined
        :type="isPwd ? 'password' : 'text'"
        label="Password"
        class="full-width"
        style=""
        :rules="[
          (val) =>
            !!val ||
            ('Password is required' && val.length >= 3) ||
            'Please use minimum 3 characters',
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-input
        v-model="confirmpassword"
        outlined
        :type="isconfirmPwd ? 'password' : 'text'"
        label="Confirm Password"
        class="full-width"
        style=""
        :rules="[
          (val) =>
            !!val ||
            ('Confirm Password is required' && val == password) ||
            'Your password is incorrect',
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isconfirmPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isconfirmPwd = !isconfirmPwd"
          />
        </template>
      </q-input>
      <q-btn
        @click="signUp()"
        label="JOIN"
        class="full-width"
        style="
          font-size: 20px;
          background: linear-gradient(#b42425 0%, #b42425 100%);
        "
      />
    </div>
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
    backLogin() {
      this.$router.push({ name: "loginPage" });
    },
    signUp() {
      const auth = getAuth();
      const email = this.username;
      const password = this.password;
      const confirmpassword = this.confirmpassword;
      if (confirmpassword == "" || confirmpassword != password) {
        alert("confirmpassword is not equal with password")
      } else {
      
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            sendEmailVerification(auth.currentUser).then(() => {
              alert("Please verify your email and login again")
              const email_verified = auth.currentUser.emailVerified;
              
              this.backLogin();

            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }
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