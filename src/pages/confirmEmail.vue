<template>
  <q-page padding>
    <q-icon name="arrow_back" style="font-size: 32px" @click="backregisPage1" />
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <h2 class="text-bold" style="color: #014a88">Confirm your email</h2>
      <q-input
        outlined
        v-model="code"
        label=""
        hint="Type in the code we sent to your email"
        class="full-width"
        style=""
      ></q-input>
      <q-btn
        label="CONFIRM"
        class="full-width"
        style="
          font-size: 20px;
          background: linear-gradient(#b42425 0%, #b42425 100%);
        "
        @click="verify()"
      />
      <div class="row">
        <div class="col">
          <p style="color: #014a88">Didn't receive the code ?</p>
        </div>
        <div class="col">
          <p class="text-italic" style="color: #1794a5" @click="sendAgain">
            send again
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>
 <script>
import { ref } from "vue";
import { getAuth, sendEmailVerification } from "firebase/auth";
export default {
  methods: {
    backregisPage1() {
      this.$router.push({ name: "regist1" });
    },
    sendAgain() {},
    tostdIdSignup() {
      this.$router.push({ name: "stdIdSignup" });
    },
    verify() {
      

      const auth = getAuth();
      sendEmailVerification(auth.currentUser).then(() => {
        // Email verification sent!
        // ...
      });
    },
  },

  setup() {
    return {
      code: ref(""),
    };
  },
};
</script>