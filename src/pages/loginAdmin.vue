<template>
  <q-page >
    <div class="q-pa-md q-gutter-sm text-center" style="max-width: 800px ; margin:0 auto;">
      <img
        src="../assets/Alumnet.png"
        alt=""
        style="width: 200px; padding: 5px"
      />
   
        <h3 class="text-bold" style="color: #014a88">LOG IN</h3>
      <p class="text-bold" style="color: #014a88;">for admin</p>
   
      

      <q-input  outlined
          v-model="username" 
          type="email"
          label="Username"
          class="full-width"
          style=""></q-input>
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
    </div>
  </q-page>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      password: ref(""),
      isPwd: ref(true),
      username: ref(""),
    };
  },
};
</script>