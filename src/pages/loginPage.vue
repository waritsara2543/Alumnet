<template>
    <q-page>
        <div class="q-pa-md q-gutter-sm text-center">
            <img src="../assets/Alumnet.png" alt="" style="width:300px ; padding:5px"/>

            <h1 class="text-bold" style="color:#014a88">LOG IN</h1>

            <q-btn  label="log in with google" class="full-width " style="max-width:800px ;font-size:0.5cm ;background: linear-gradient(#014a88 0%, #1794A5 100%);"> 
                <img src="../assets/google-logo.png" alt="" style="width:40px ; padding:5px">
            </q-btn>
           
             <q-input outlined  label="Username" class="full-width " style="max-width:800px ;" ></q-input>
             <q-input filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
                 <template v-slot:append>
                    <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                    @click="isPwd = !isPwd"
                    />
                </template>
            </q-input>
         </div>
    </q-page>
</template>
<style>

</style>
<script>
import { ref } from 'vue'
export default {

    setup() {
        return{
            isPwd: ref(true),
        }
        

    },
}
</script>