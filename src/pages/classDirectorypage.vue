<template>
  <q-page>
    <div class="row q-gutter-md " style="margin:0 auto;">

      
        <q-card
          class="my-card text-white"
          style="margin:0 auto; margin-top:20px"
        >
          <q-card-section class="text-center" >

            <q-avatar class="q-mr-xs" id="image_profile" style=" width:60px; height:60px; ">
                  <img src="../assets/man.png" style=""  />
            </q-avatar>
            <div class="text-subtitle2" id="student_name">
              Arnont Photdoung
            </div>
            <div class="text-caption" id="location">
              <q-icon name="location_on"></q-icon> Lives in Bangkok, Thailand
            </div>
          </q-card-section>
        </q-card>
        
        

      
    </div>
  </q-page>
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