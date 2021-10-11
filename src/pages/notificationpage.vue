<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-y-md column" style="max-width: 100%">
        <q-toolbar
          class="text-white rounded-borders"
          style="background:#032030 "
        >
         
          <p
            style="padding: 15px 0px 0px 20px; font-size: 15px"
            id="user_name"
          >
            Notifications
          </p>

          
        </q-toolbar>



        

        
        <q-card
          class="my-card text-white "
          style="
            background: linear-gradient(#032030 0%, #1794a5 100%);
            height: 60px; width: 345px; margin: 0 auto; margin-top:20px;
          "
        >
          <q-card-section class="text-left">
            <div class="text-subtitle2" id="title_content">title :มอบเงินทุนการศึกษาให้กับผู้สนใจศึกษาต่อในระดับ ปริญญาโท</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
 <script>
import { ref } from "vue";
export default {
  methods: {},

  setup() {
    return {
      search: ref(""),
      
    };
  },
};
</script>