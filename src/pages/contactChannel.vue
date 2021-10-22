<template>
  <q-page padding>
    <div>
      <q-toolbar class="text-white rounded-borders" style="background: #032030">
        <q-btn
          round
          dense
          flat
          class="q-mr-xs"
          icon="arrow_back"
          @click="back()"
        ></q-btn>

        <p class="text-bold text-h6" style="margin-top: 12px">
          Contact Channel
        </p>
        <q-icon
          style="font-size: 25px; margin-bottom: 2px"
          name="attach_file"
        />
      </q-toolbar>

      <q-card
        class="my-card text-white full-width"
        style="background: #032030; margin-top: 10px"
      >
        <q-card-section class="">
          <div class="row">
            <div class="col-3">
              <div class="text-subtitle2" id="contact">EMAIL :</div>
            </div>
            <div class="col">
              <div class="text-subtitle2" style="" id="Email">
                warissara.0039@gmail.com
              </div>
            </div>
            <div class="col-1">
              <q-btn round dense flat style="margin-top: -5px"> Edit</q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>

      <div class="text-center text-white">
        <q-btn icon="add_circle_outline" style="background: #032030; margin:10px"> </q-btn>
      </div>
    </div>
  </q-page>
</template>
 <script>
import { ref } from "vue";
export default {
  methods: {
    back() {
      this.$router.push({ name: "profilepage" });
    },
  },

  setup() {
    return {};
  },
}
</script>