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
        label="log in with google"
        class="full-width"
        style="
          font-size: 0.5cm;
          background: linear-gradient(#014a88 0%, #1794a5 100%);
        "
        @click="singinGoogle()"
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
        label="Username"
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
      <q-btn
        label="log in "
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
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export default {
  methods: {
    toRegist() {
      this.$router.push({ name: "regist1" });
    },
     async singinGoogle() {
      console.log("click");

      // import {
      //   getAuth,
      //   signInWithPopup,
      //   GoogleAuthProvider,
      // } from "firebase/auth";

      const auth = getAuth();
      console.log(this.$auth);
      console.log(this.$axios);
      console.log(this.$api);

      let res = await this.$axios
        .get("https://arcane-headland-24567.herokuapp.com/api/users")
        console.log(res.data.results[0].student_id);
        console.log(res.data.results);

              this.$axios
        .get("https://arcane-headland-24567.herokuapp.com/api/users")
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
          console.log(token);
          console.log(user);
          console.log(user.email);
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