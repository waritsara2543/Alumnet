<template>
  <q-page padding>
    <q-icon name="arrow_back" style="font-size: 32px" @click="backLogin" />
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <h2 class="text-bold" style="color: #014a88">SIGN UP</h2>
      <q-form action="https://some-url.com" method="post">
        <q-input
          outlined
          v-model="username"
          type="email"
          label="Email"
          class="full-width"
          style=""
        ></q-input>
        <q-input
          v-model="password"
          outlined
          :type="isPwd ? 'password' : 'text'"
          label="Password"
          class="full-width"
          style=""
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
          label="JOIN "
          class="full-width"
          style="
            font-size: 20px;
            background: linear-gradient(#b42425 0%, #b42425 100%);
          "
        />
      </q-form>
    </div>
  </q-page>
</template>
<script>
import { ref } from "vue";

import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
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
      console.log(email);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          this.toConfirmEmail();
          const user = userCredential.user;
          sendEmailVerification(auth.currentUser).then(() => {
            // Email verification sent!
            // ...
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
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