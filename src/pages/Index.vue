<template>
  <q-page padding class="bg-image" >
    <div class="text-center" style="padding:50px">
     <div class="text-h4" style="padding:20px"> Search for Alumni</div>
      <q-input standout="bg-white text-black"  bg-color="white" rounded outlined label="Search" style="padding:20px" />
        <q-card class="my-card text-white text-center" style="background: linear-gradient(#014a88 0%, #1794A5 100%); border-radius: 15px; padding:20px">
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
          </q-card-section>
          <q-card-section class="q-pt-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </q-card-section>
          <q-separator inset />
          <q-card-section>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </q-card-section>
        </q-card>
    </div>
    <div class="col-4 text-right" style="padding:50px">
         <div class="q-pa-md q-gutter-sm">
          <q-btn color="outline" text-color="black" label="LOG IN" @click="toPageLogin" style="font-size:1cm"/>
         </div>
    </div>
    
   
  </q-page>
</template>
<script>
import { useQuasar } from 'quasar'
export default {
  methods :{
    toPageLogin(){
      this.$router.push({name:"loginPage"})
    }
  },
  setup() {
    const $q = useQuasar()

     function login () {
      $q.notify('Some other message')
    }
    return {
      lorem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      login
    };
  },
 
};

</script>
<style>

  .bg-image {
    background-image: url("../assets/psu.jpg");
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
  }


</style>
