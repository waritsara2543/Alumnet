<template>
  <q-page>
    <link
      href="https://fonts.googleapis.com/css?family=Josefin+Sans"
      rel="stylesheet"
    />
    

    <q-card style="background: #d0dfe6; margin: 10px" >
      <q-btn
      onclick="window.print();"
        label="Print this page "
        class="full-width bg-secondary text-white text-right"
        style="
        max-width:300px;
          font-size: 20px;
          background: linear-gradient(#b42425 0%, #b42425 100%);
        "
      />
     
      <div class="row">
        <div class="col">
          <q-card
            class="my-card"
            style="
              height: 173px;
              width: 730px;
              background: #e7a33e;
              margin: 0 auto;
              margin-top:30px
            "
          >
            <q-card-section>
              <div class="text-left text-uppercase text-top"  >
                Number of users of the system
               
              </div>
            </q-card-section>

            <q-card-section v-for="(col, index) in studentUsedsystem"
          :key="index">
              <div class="row justify-center text-uppercase text-h3"  >
                {{this.studentUsedsystem[0].email}}
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-right text-uppercase "  >
                people
               
              </div>
            </q-card-section>
          </q-card>

          <q-card
            class="my-card"
            style="
              height: 173px;
              width: 730px;
              background: #27a8a1;
               margin: 0 auto;
               margin-top:30px;
               margin-bottom:30px;
            "
          >
            <q-card-section
              ><div class="text-left text-uppercase text-top">
                employed
              </div>
              </q-card-section
            >
             <q-card-section>
              <div class="row justify-center text-uppercase text-h3"  >
               {{this.employed}}
              </div>
            </q-card-section>
             <q-card-section>
              <div class="text-right text-uppercase "  >
                people
               
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col">
          <q-card
            class="my-card"
            style="
              height: 373px;
              width: 690px;
              background: #f95dd6;
               margin: 0 auto;
               margin-top:30px;
               margin-bottom:30px
            "
          >
            <q-card-section
              ><div class="text-left text-uppercase text-top">Graduate</div>
            </q-card-section>
            <q-card-section>
              <div class="row justify-center text-uppercase text-h3" style="margin-bottom:100px;margin-top:100px">
               {{this.graduated}}
              </div>
            </q-card-section>
             <q-card-section>
              <div class="text-right text-uppercase "  >
                people
               
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12" >
        <div class="row " >
          <div class="col" style="margin-left:20px ; ">
            number of alumni who employed
            <BarChart style="width:400px" />
          </div>
          <div class="col">
            province where alumni reside
            <DonutChart style="width:400px" />
            </div>
          <div class="col">
            alumni job titles
            <PieChart style="width:450px" />
            </div>
          
        
        
        </div>
        
        
      </div>
       
    </q-card>
   
  </q-page>
</template>
<style>
body {
  font-family: "Josefin Sans", sans-serif;
  box-sizing: border-box;
}
</style>

<script>
import DonutChart from '../components/DonutChart.vue'
import PieChart from '../components/PieChart.vue'
import BarChart from '../components/workingChart.vue'
import {  getStudentUsedsystem,getStudentWork ,getStudentGraduateyear,getStudentAddress} from "../api/api";

export default {
  name: 'App',
  components: {
    BarChart,
    DonutChart,
    PieChart
  },
  methods:{

  },
  async mounted(){
     var b = 0;
     var c= 0;
    const adminvalue = localStorage.getItem("admin");
    this.admin = JSON.parse(adminvalue);
   
    this.studentUsedsystem = await getStudentUsedsystem()
    this.working = await getStudentWork(this.admin[0].faculty_id)
    this.graduate = await getStudentGraduateyear(this.admin[0].faculty_id)
    this.address = await getStudentAddress(this.admin[0].faculty_id)
   
    for(let i =0 ;i< this.graduate.length;i++){
      var a = parseInt(this.graduate[i].count);
      b = b + a
      this.graduated = b;
      
      
    }
    for(let i =0 ;i< this.working.length;i++){
      var a = parseInt(this.working[i].count);
      c = c + a
      this.employed = c;
      
      
    }
    

  },
  data(){
    return{
      studentUsedsystem:[],
      working:[],
      graduate:[],
      address:[],
      graduated:"",
      employed:""
    }

  },

  
}
</script>