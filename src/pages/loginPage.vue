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
<<<<<<< HEAD
=======
        :rules="[(val) => !!val || 'email is required']"
>>>>>>> waritsarabranch
      ></q-input>
      <q-input
        v-model="password"
        outlined
        :type="isPwd ? 'password' : 'text'"
        label="Password"
        class="full-width"
        style=""
<<<<<<< HEAD
=======
        :rules="[(val) => !!val || 'password is required']"
>>>>>>> waritsarabranch
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
<<<<<<< HEAD
        label="log in "
=======
        @click="login()"
        label="login "
>>>>>>> waritsarabranch
        class="full-width"
        style="
          font-size: 20px;
          background: linear-gradient(#b42425 0%, #b42425 100%);
        "
        @click="datalocal()"
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
<<<<<<< HEAD
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { put_workplace_history } from "../api/api";
=======
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
>>>>>>> waritsarabranch
export default {
  methods: {
    toRegist() {
      this.$router.push({ name: "regist1" });
    },
<<<<<<< HEAD
   async datalocal(){
      // const obj = {name: "John", age: 30, city: "New York"};
      // localStorage.setItem('peple', JSON.stringify(obj));
      // const cat = JSON.parse(localStorage.getItem('peple'));
      // console.log(cat);
      // console.log(cat.name);
      // localStorage.removeItem('myCat');
      // localStorage.clear();

        try {
                  let res = await this.$axios
        .get("http://localhost:3000/api/student/kooku190642@gmail.com")
        console.log(res.data.results[0].student_id);
        console.log(res.data.results);

        const obj = JSON.stringify(res.data.results[0]);
        console.log(obj);
        localStorage.setItem('student',obj);
        let student = localStorage.getItem('student');
        if (student != null) {
          let parseJSON = JSON.parse(student);
          console.log(parseJSON);
          console.log(parseJSON.student_id);
          put_workplace_history(parseJSON)
          
        }
        else {
          console.log("have not data");
        }
        
        } catch (error) {
          console.log(error);
        }

    },
      singinGoogle() {
      console.log("click");

      // import {
      //   getAuth,
      //   signInWithPopup,
      //   GoogleAuthProvider,
      // } from "firebase/auth";

      const auth = getAuth();
      // console.log(this.$auth);
      // console.log(this.$axios);
      // console.log(this.$api);

      // let res = await this.$axios
      //   .get("https://arcane-headland-24567.herokuapp.com/api/users")
      //   console.log(res.data.results[0].student_id);
      //   console.log(res.data.results);

      //         this.$axios
      //   .get("https://arcane-headland-24567.herokuapp.com/api/users")
      //   .then(function (response) {
      //     // handle success
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     // handle error
      //     console.log(error);
      //   })
      //   .then(function () {
      //     // always executed
      //   });
=======
    tohome() {
      this.$router.push({ name: "homepage" });
    },
    singinGoogle() {
      console.log("click");

      const auth = getAuth();
>>>>>>> waritsarabranch

      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
<<<<<<< HEAD
         
          console.log(token);
          console.log(user);
          console.log(user.email);
=======
          // console.log(token);
          // console.log(user);
          // console.log(user.email);
>>>>>>> waritsarabranch
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
<<<<<<< HEAD
=======
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
          if (auth.currentUser.emailVerified) {
            this.tohome();
          } else {
            alert("Please verify your email");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
>>>>>>> waritsarabranch
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