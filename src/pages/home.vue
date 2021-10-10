<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-y-md column" style="max-width: 100%">
        <q-toolbar
          class="text-white rounded-borders"
          style="background:#032030 "
        >
          <q-avatar class="q-mr-xs q-ml-md" id="image_profile">
            <img src="../assets/man.png" />
          </q-avatar>
          <p
            style="padding: 15px 0px 0px 20px; font-size: 15px"
            id="user_name"
          >
            Waritsara Wichiansrang
          </p>

          <q-space />

          <q-input
            dark
            dense
            standout
            v-model="search"
            input-class="text-left"
            class="q-ml-md"
            id="search"
          >
            <template v-slot:append>
              <q-icon v-if="search === ''" name="search" />
              <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="search = ''"
              />
            </template>
          </q-input>
        </q-toolbar>



        

        
        <q-card
          class="my-card text-white "
          style="
            background: linear-gradient(#032030 0%, #1794a5 100%);
            height: 120px; width: 345px; margin: 0 auto; margin-top:20px;
          "
        >
          <q-card-section>
            <div class="row">
              <div class="col-3">
                <q-avatar class="q-mr-xs" id="image_profile">
                  <img src="../assets/man.png" />
                </q-avatar>
              </div>
              <div class="col">
                <div class="text-subtitle2" id="student_name">Arnont Photdoung</div>
                <div class="" style="font-size: 10px" id="date">18 May</div>
                <div style="text-align: center">
                  <q-icon name="business_center" />
                </div>
                <div class="" style="text-align: center" id="update_working">
                  Software Egineer at Agoda
                </div>
                <div
                  class=""
                  style="font-size: 12px; text-align: center"
                  id="update_date"
                >
                  18 May 2020
                </div>
              </div>
            </div>
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