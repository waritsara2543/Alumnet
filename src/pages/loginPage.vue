<template>
  <q-page padding >
    <div class="q-pa-md q-gutter-sm text-center"  style="max-width: 800px ; margin:0 auto;">
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
          
          font-size:20px;
          background: linear-gradient(#B42425 0%, #B42425 100%);
        "
      />
      <div class="row">
      <div class="col">
          <p style="color: #014a88">no account?</p>
      </div>
      <div class="col">
        <p class="text-italic" style="color: #1794a5" @click="toRegist">create one</p>
      </div>
    </div>
    <p class="text-bold" style="color: #014a88" @click="toLoginAdmin">For admin click here</p>
    </div>
    
     
       
   
  </q-page>
</template>
<style>

</style>
<script>
import { ref } from "vue";
export default {
    methods :{
    toRegist(){
      this.$router.push({name:"regist1"})
    },
    toLoginAdmin(){
      this.$router.push({name:"loginAdmin"})
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