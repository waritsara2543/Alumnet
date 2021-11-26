<template>
  <q-page>
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <img
        src="../assets/Alumnet.png"
        alt=""
        style="width: 200px; padding: 5px"
      />

      <h3 class="text-bold" style="color: #014a88">LOG IN</h3>
      <p class="text-bold" style="color: #014a88">for admin</p>

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
        @click="login"
        label="log in "
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
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getadminbyemail } from "../api/api";
import { LocalStorage } from 'quasar';
export default {
  methods: {
    login() {
      if(this.username ==='admin@phuket.psu.ac.th'){
      const auth = getAuth();
      const email = this.username;
      const password = this.password;
      console.log("click");
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.tohome(email);
          console.log("login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Email or Password is wrong")
        });
        }else{
          alert("Email or Password is wrong")
        }
    },
    async tohome(email) {
      try {
        
        let value = await getadminbyemail(email);
        // if (value.length == 0) {
        //   console.log("don't have database");
          localStorage.setItem("admin", JSON.stringify(value));
          this.$router.push({ name: "homeadmin" });
        // } else {

        // localStorage.setItem("admin", JSON.stringify(value));
        // this.$router.push({ name: "home" });
        // }
      } catch (e) {
        console.log(e);
        console.log("done");
      }
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