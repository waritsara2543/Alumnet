<template>
  <q-page>
    <link
      href="https://fonts.googleapis.com/css?family=Josefin+Sans"
      rel="stylesheet"
    />
    <h4 onclick="window.print();"> Print </h4>

    <q-card style="background: #d0dfe6; margin: 10px" >
      <div class="row">
        <div class="col">
          <q-card
            class="my-card"
            style="
              
              background: #e7a33e;
              margin: 0 auto;
              margin-top:30px
              margin-left:10px
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
              
              background: #f95dd6;
               margin: 0 auto;
               margin-top:40px;
             
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
        <div class="row " style="margin:0 auto" >
          <div class="col">
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