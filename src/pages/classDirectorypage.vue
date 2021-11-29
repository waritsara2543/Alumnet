<template>
  <q-page style="background: #d0dfe6">
    <div class="row justify-center q-gutter-md " style="margin:0 auto;">

      
        <q-card  v-for="(col,index) in friend" :key="index"
          class="my-card text-white text-center"
          style="margin-left:90px ;margin-right:90px ;margin-top:20px ;background: linear-gradient(#032030 0%, #1794a5 100%);width:200px"
         
        >
          <q-card-section class="text-center" >

            <q-avatar class="q-mr-xs" id="image_profile" style=" width:80px; height:80px; ">
                  <img :src=" this.friend[index].image_profile " style=""  />
            </q-avatar>
            <div class="text-subtitle2" id="student_name">
              {{ this.friend[index].firstname }} {{ this.friend[index].lastname }}
            </div>
            <div class="text-caption" id="location">
              <q-icon name="location_on"></q-icon> Lives in {{ this.friend[index].province }}, {{ this.friend[index].country}}
            </div>
          </q-card-section>
        </q-card>

        
        
        

      
    </div>
  </q-page>
</template>
 <script>
import { ref } from "vue";
import { getClassdirectoryById } from  "../api/api"
export default {
  methods: {
    async classdirectory(){
      this.friend = await getClassdirectoryById(this.person[0].major_id,this.person[0].faculty_id,this.person[0].campus_id,this.person[0].graduate_year);
    }
  },
  async mounted() {

    const value = localStorage.getItem("detail");
    this.person = JSON.parse(value);
    this.friend = await getClassdirectoryById(this.person[0].major_id,this.person[0].faculty_id,this.person[0].campus_id,this.person[0].graduate_year);
    // await this.classdirectory();

  },

  data() {
    return {
      person: [],
      friend:[],
      profile:ref("")
    };
    i
  },
};
</script>