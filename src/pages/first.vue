<template>
  <q-page padding class="bg-image">
    <div class="row">
      <div class="col-3"></div>
      <div class="col">
        <div class="q-pa-md" style="">
          <div class="q-gutter-md" style="max-width: 1000px">
            <div class="column">
              <div class="col-6" style="padding: 20px">
                <div class="text-h4">Search for Alumni</div>
              </div>
              <div class="col-6">
                <q-input
                  standout="bg-white text-black"
                  bg-color="white"
                  rounded
                  outlined
                  label="Search"
                />
              </div>
              <div class="col-6" style="padding: 20px">
                <q-card
                  class="my-card text-white"
                  style="
                    background: linear-gradient(#014a88 0%, #1794a5 100%);
                    max-width: 1000px;
                    border-radius: 15px;
                  "
                >
                  <q-card-section>
                    <div class="text-h6">Our Changing Planet</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </q-card-section>

                  <q-separator inset />

                  <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4"></div>
      <div class="col-4">
        <h4 @click="login">LOG IN</h4>
      </div>
    </div>
  </q-page>
</template>
<script>
import { useQuasar } from "quasar";
export default {
  setup() {
    const $q = useQuasar();

    function login() {
      $q.notify("Some other message");
    }
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      login,
    };
  },
};
</script>
<style>
.bg-image {
  background-image: url("../assets/psu.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
