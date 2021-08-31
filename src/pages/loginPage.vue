<template>
  <q-page padding >
    <div class="q-pa-md q-gutter-sm text-center">
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
    </div>
    
     
       
   
  </q-page>
</template>
<style>
</style>
<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      password: ref(""),
      isPwd: ref(true),
    };
  },
};
</script>