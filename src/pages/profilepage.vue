<template>

  <q-page padding>

    <q-card
          class="my-card text-white "
          style="
            height: 385px;  margin-top:90px;
          "
        >
          <q-card-section class="text-center" >
           
             
                <q-avatar class="q-mr-xs" id="image_profile" style="position:relative; width:100px; height:100px; top:-60px; left:10px; background:white;">
                  <img src="../assets/man.png" style="border-style: solid;"  />
                </q-avatar>
                <q-icon @click="toavatar" name="add_circle" style="position:relative;bottom:20px; right:20px ;font-size:30px" />
              
                <div class="text-h6" id="user_name" style="margin-top: -40px">Waritsara Wichiansrang</div>
                <div class="text-h6"  style="border-top: 3px solid #ffffff; padding:20px ;margin-top: 20px"></div>
            
          </q-card-section>
          <q-card-section class="text-left" >
            <div class="row">
              <div class="col-1">
                  <q-icon name="school" />
              </div>
              <div class="col" id="graduate">
               Graduation Software Engineering 2016 at PSU Phuket Campus <q-icon  @click="prompt = true" name="edit" />
              </div>
               
            </div>

            <div class="row">
              <div class="col-1">
                  <q-icon name="business_center" />
              </div>
              <div class="col" id="workplace">
                Software Engineer at Focal Solution<q-icon name="edit" />
              </div>
               
            </div>

            <div class="row">
              <div class="col-1">
                  <q-icon name="location_on" />
              </div>
              <div class="col" id="province">
                Lives in Bangkok, Thailand<q-icon name="edit" />
              </div>
               
            </div>

            <div class="row">
              <div class="col-1">
                  <q-icon name="favorite" />
              </div>
              <div class="col" id="status">
                single<q-icon name="edit" />
              </div>
               
            </div>

            <div class="row">
              <div class="col-1">
                  <q-icon name="description" />
              </div>
              <div class="col" id="epigram">
                มีดบาด<q-icon name="edit" />
              </div>
               
            </div>
                

             <div class="text-center">
              <q-icon style="font-size: 40px" name="add_circle" />
            </div>
              
            
          </q-card-section>

        </q-card >

        <div class="row">
          <div class="col" style="padding:10px 5px 5px 0px">
            <q-card class="my-card text-white text-center" style="
            background: linear-gradient(#032030 0%, #1794a5 100%);height: 100px;margin: 0 auto; ">
            
              <div class="text-h4" id="" style="padding-top:20px">69</div>
            <div class="text-caption" id="" style="">Following</div>
            

            </q-card>

          </div>
          <div class="col" style="padding:10px 0px 5px 5px">
            <q-card class="my-card text-white text-center" style="
            background: linear-gradient(#032030 0%, #1794a5 100%);height: 100px;margin: 0 auto; ">
            <div class="text-h4" id="" style="padding-top:20px">54</div>
            <div class="text-caption" id="" style="">Follower</div>

            </q-card>

          </div>
        </div>

        <div class="row">
          <div class="col" style="padding:5px 5px 10px 0px">
            <q-card class="my-card text-white text-center" style="
            background: linear-gradient(#032030 0%, #1794a5 100%);height: 100px;margin: 0 auto; ">
            <q-icon style="font-size: 40px ;margin-top:20px" name="lock" />
            <div class="text-caption" id="" style="">Account</div>

            </q-card>

          </div>
          <div class="col" style="padding:5px 0px 10px 5px">
            <q-card class="my-card text-white text-center" style="
            background: linear-gradient(#032030 0%, #1794a5 100%);height: 100px;margin: 0 auto; ">
            <q-icon style="font-size: 40px ;margin-top:20px" name="attach_file" />
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
    
    <!-- <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Edit</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="address" autofocus @keyup.enter="prompt = false"  />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add address" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog> -->
    
  </q-page>
</template>
 <script>
import { ref } from "vue";
export default {
  methods: {
    // backconfirmEmail() {
    //   this.$router.push({ name: "confirmEmail" });
    // },
    toavatar() {
      this.$router.push({ name: "toavatar" });
    },
  },

  setup() {
    return {
     prompt: ref(false),

      address: ref('')
    };
  },
};
</script>