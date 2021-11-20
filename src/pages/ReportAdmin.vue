<template>
  <q-page>
    <link
      href="https://fonts.googleapis.com/css?family=Josefin+Sans"
      rel="stylesheet"
    />

    <q-card style="background: #d0dfe6; margin: 10px">
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
              <div class="text-left text-uppercase text-top">
                Number of users of the system
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
                working
              </div></q-card-section
            >
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
          </q-card>
        </div>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12" >
        <div class="row " >
          <div class="col" style="margin-left:20px"><BarChart style="width:500px" /></div>
          <div class="col"><DonutChart style="width:500px" /></div>
          <div class="col"><PieChart style="width:500px" /></div>
          
        
        
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
import { defineComponent } from 'vue'

import DonutChart from '../components/DonutChart.vue'
import PieChart from '../components/PieChart.vue'
import BarChart from '../components/BarChart.vue'

export default defineComponent({
  name: 'App',
  components: {
    BarChart,
    DonutChart,
    PieChart
  }
})
</script>