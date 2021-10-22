<template>
  <div class="q-pa-md" >

    <q-card
      v-for="index in 5"
      :key="index"
      rounded
      class="my-card text-white"
      style="margin: 0 auto; margin-top: 10px; "
    >

      <q-card-section class="row" >
        <q-avatar class="q-mr-xs q-ml-md" id="image_profile">
          <img src="../assets/man.png" />
        </q-avatar>

        <div
          class="text-subtitle2"
          id="student_name"
          style="margin-left: 20px; margin-top: 10px"
        >
          Arnont Photdoung
        </div>
      </q-card-section>

    </q-card>

    

  </div>
</template>
<script>
import { ref } from "vue";
export default {
  methods: {},

  setup() {
    return {};
  },
};
</script>