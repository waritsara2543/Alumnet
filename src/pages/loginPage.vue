<template>
  <q-page padding>
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <img
        src="../assets/Alumnet.png"
        alt=""
        style="width: 200px; padding: 5px"
      />

      <h2 class="text-bold" style="color: #014a88">LOG IN</h2>

      <q-btn
        @click="singinGoogle()"
        label="log in with google"
        class="full-width"
        style="
          font-size: 0.5cm;
          background: linear-gradient(#014a88 0%, #1794a5 100%);
        "
      >
        <img
          src="../assets/google-logo.png"
          alt=""
          style="width: 40px; padding: 5px"
        />
      </q-btn>

      <h5 style="color: #014a88">or</h5>

      <q-input
        outlined
        v-model="username"
        type="email"
        label="Email"
        class="full-width"
        style=""
        :rules="[(val) => !!val || 'email is required']"
      ></q-input>
      <q-input
        v-model="password"
        outlined
        :type="isPwd ? 'password' : 'text'"
        label="Password"
        class="full-width"
        style=""
        :rules="[(val) => !!val || 'password is required']"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn
        @click="login()"
        label="login "
        class="full-width"
        style="
          font-size: 20px;
          background: linear-gradient(#b42425 0%, #b42425 100%);
        "
      />
     
      <div class="row">
        <div class="col">
          <p style="color: #014a88">no account?</p>
        </div>
        <div class="col">
          <p class="text-italic" style="color: #1794a5" @click="toRegist">
            create one
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>
<style>
</style>
<script>
import { ref } from "vue";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getStudentById } from "../api/api";
export default {
  methods: {
   

    toRegist() {
      this.$router.push({ name: "regist1" });
    },
    async tohome(email) {
      try {
        let value = await getStudentById(email);
        console.log(value);
        if (value.length == 0) {
          console.log("don't have database");
          localStorage.setItem("email", email);
          this.$router.push({ name: "stdIdSignup" });
        } else {
          localStorage.setItem("student", JSON.stringify(value));
          this.$router.push({ name: "homepage" });
        }
      } catch (e) {
        console.log(e);
        console.log("done");
      }
    },
    singinGoogle() {
      console.log("click");

      const auth = getAuth();

      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          this.$router.push({ name: "homepage" });
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          this.tohome();
          // ...
          // console.log(token);
          // console.log(user);
          // console.log(user.email);
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    },
    login() {
      const auth = getAuth();
      const email = this.username;
      const password = this.password;
      console.log("click");
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          console.log("login");
          console.log(auth.currentUser.emailVerified);
          console.log(auth.currentUser.email);
          if (auth.currentUser.emailVerified) {
            this.tohome(email);
          } else {
            alert("Please verify your email");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          alert("Email or Password is wrong")
        });
    },
  },
  setup() {
    return {
      password: ref(""),
      isPwd: ref(true),
      username: ref(""),
    };
  },
};
</script>