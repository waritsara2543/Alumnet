<template>
  <q-page padding >
    <q-icon name="arrow_back" style="font-size: 32px;" @click="backLogin" />
    <div class="q-pa-md q-gutter-sm text-center"  style="max-width: 800px ; margin:0 auto;">
      <h2 class="text-bold" style="color: #014a88">SIGN UP</h2>
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
       @click="toConfirmEmail"
        label="JOIN "
        class="full-width"
        style="
          
          font-size:20px;
          background: linear-gradient(#B42425 0%, #B42425 100%);
        "
      />
      <h5 style="color: #014a88">or</h5>
       <q-btn
        label="sign up with google"
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
     
  
      

    </div>
    
     
       
   
  </q-page>
</template>
<script>
import { ref } from "vue";
export default {
    methods :{
    toConfirmEmail(){
      this.$router.push({name:"confirmEmail"})
    },
    backLogin(){
      this.$router.push({name:"loginPage"})
    },
   
  },
    
  setup() {
    return {
        username: ref(''),
      password: ref(""),
      isPwd: ref(true),
      confirmpassword: ref(''),
      isconfirmPwd: ref(true),
      

    };
  },
};
</script>