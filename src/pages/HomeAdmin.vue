<template>
  <div class="row">
    <div class="col-4">
      <div class="q-pa-md">
        <div class="col" style="padding: 5px 100px 100px 100px">
          <q-card
            class="my-card text-white text-center"
            style="
              background: #D0DFE6;
              height: 100px;
              margin: 0 auto;">
          </q-card>
          <q-card
            class="my-card text-white text-center"
            style="
              background: linear-gradient(#032030 0%, #1794a5 100%);
              height: 500px;
              margin: 0 auto;
            ">
            <q-avatar class="q-mr-xs" id="image_profile" style="position:relative; width:100px; height:100px; top:-60px; ">
                  <img src="../assets/man.png" style=""  />
                </q-avatar>
            <div class="text-caption" id="" style=""></div>
          </q-card>
        </div>
      </div>
    </div>
    
    <div class="col-8">
      <div class="q-pa-md">
      <q-card style="background: #D0DFE6; ">
      <div class="col" style="padding: 50px 50px 50px 50px">
      
        <q-card
          class="my-card text-white text-center"
          style="
            background: #8D949E;
            height: 200px;
            width: 100%;
            margin: 0 auto;
            margin: 0px 0px 20px 0px;
          "
        >
          <div class="text-caption" id="" style=""><q-icon name="add_circle_outline" v-for="size in ['xl']"/> </div>
        </q-card>
        <q-card
          class="my-card text-white text-center"
          style="
            background: linear-gradient(#032030 0%, #1794a5 100%);
            height: 200px;
            width: 100%;
            margin: 0 auto;
            
          "
        >
          <div class="text-caption" id="" style=""></div>
        </q-card>
      
      </div>
      </q-card>
    </div>
  </div>
  </div>
</template>

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
