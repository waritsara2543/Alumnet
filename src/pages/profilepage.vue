<template>

  <q-page padding>

    <q-card
          class="my-card text-white "
          style="
            background: linear-gradient(#032030 0%, #1794a5 100%);
            height: 385px;  margin-top:90px;
          "
        >
          <q-card-section class="text-center" >
           
             
                <q-avatar class="q-mr-xs" id="image_profile" style="position:relative; width:100px; height:100px; top:-60px; background:white;">
                  <img src="../assets/man.png" style="border-style: solid;"  />
                </q-avatar>
              
                <div class="text-h6" id="user_name" style="margin-top: -40px">Waritsara Wichiansrang</div>
                <div class="text-h6"  style="border-top: 3px solid #ffffff; padding:20px ;margin-top: 20px"></div>
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
              
            
          </q-card-section>

        </q-card >

        <div class="row">
          <div class="col" style="padding:10px 5px 5px 0px">
            <q-card class="my-card text-white text-center" style="
            background: linear-gradient(#032030 0%, #1794a5 100%);height: 100px;margin: 0 auto; ">
            <div class="text-caption" id="" style="">Following</div>

            </q-card>

          </div>
          <div class="col" style="padding:10px 0px 5px 5px">
            <q-card class="my-card text-white text-center" style="
            background: linear-gradient(#032030 0%, #1794a5 100%);height: 100px;margin: 0 auto; ">
            <div class="text-caption" id="" style="">Follower</div>

            </q-card>

          </div>
        </div>

        <div class="row">
          <div class="col" style="padding:5px 5px 10px 0px">
            <q-card class="my-card text-white text-center" style="
            background: linear-gradient(#032030 0%, #1794a5 100%);height: 100px;margin: 0 auto; ">
            <div class="text-caption" id="" style="">Account</div>

            </q-card>

          </div>
          <div class="col" style="padding:5px 0px 10px 5px">
            <q-card class="my-card text-white text-center" style="
            background: linear-gradient(#032030 0%, #1794a5 100%);height: 100px;margin: 0 auto; ">
            <div class="text-caption" id="" style="">Contact channel</div>

            </q-card>

          </div>
        </div>

        <q-btn
       
        label="LOGOUT "
        class="full-width"
        style="
          font-size: 15px;
          color:white;
          background: linear-gradient(#b42425 0%, #b42425 100%);
        "
      />
    
    
  </q-page>
</template>
 <script>
import { ref } from "vue";
export default {
  methods: {},

  setup() {
    return {
     
    };
  },
};
</script>