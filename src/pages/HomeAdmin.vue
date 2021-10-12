<template>
  <div class="row">
    <div class="col-4">
      <div class="q-pa-md">
        <div class="col" style="padding: 5px 100px 100px 100px">
          <q-card
            class="my-card text-white text-center"
            style="background: #d0dfe6; height: 100px; margin: 0 auto"
          >
          </q-card>
          <q-card
            class="my-card text-white text-center"
            style="
              background: linear-gradient(#032030 0%, #1794a5 100%);
              height: 500px;
              margin: 0 auto;
            "
          >
            <q-avatar
              class="q-mr-xs"
              id="image_profile"
              style="
                position: relative;
                width: 100px;
                height: 100px;
                top: -60px;
              "
            >
              <img src="../assets/man.png" style="" />
            </q-avatar>
            <div class="text-caption" id="" style="font-size : 20px"> Manee Mebun</div>
              <div class="text-h6"  style="border-top: 3px solid #ffffff; padding:20px ;margin-top: 20px"></div>
             <div
                class="q-pa-md q-gutter-sm"
              >
                <q-btn
                  style="
                    background: #b42425;
                    color: white;
                    width: 90%;
                    bottom: 0px;;
                  "
                  label="LOGIN"
                />

              </div>
            
          </q-card>
          <div
                class="q-pa-md q-gutter-sm"
              >
                <q-btn
                  style="
                    background: #b42425;
                    color: white;
                    width: 100%;
                    
                  "
                  label="IMPORT ALUMNI LIST"
                />

              </div>
        </div>
      </div>
      
    </div>

    <div class="col-8">
      <div class="q-pa-md">
        <q-card style="background: #d0dfe6">
          <div class="col" style="padding: 50px 50px 50px 50px">
            <q-card
              class="my-card text-white text-center"
              style="
                background: #8d949e;
                height: 200px;
                width: 100%;
                margin: 0 auto;
                margin: 0px 0px 20px 0px;
              "
            >
              <div class="text-caption" id="" style="">
              </div>
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
