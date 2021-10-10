<template>
  <div class="q-pa-md">
    <div
      class="text-white"
      style="border-radius : 10px ;background-color: #1794A5 ;50px"
    >
      <q-toolbar>
        <q-toolbar-title container style="height: 60px"
          ><q-img
            src="../assets/Alumnet.png"
            width="60px"
            style="margin-left"
          /> </q-toolbar-title
        ><q-input
          v-model="search"
          filled
          placeholder="Search"
          style="height: 55px : margin-left"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        
      </q-toolbar>
    </div>
  </div>
  <div>
    <q-card class="q-ma-sm" >
          <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg"> -->

          <q-card-section>
            <div class="text-h6">Card #</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
    </div>

</template>
<style lang="sass" scoped>
.example-item
  height: 500px
  width: 500px
</style>
<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      search: ref(""),
    };
  },
};
</script>
