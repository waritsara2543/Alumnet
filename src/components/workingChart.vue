<script>

import { Bar } from 'vue3-chart-v2'
import {getStudentWork} from "../api/api";

export default {
  name: 'employed',
  extends: Bar,
  async mounted () {

    const adminvalue = localStorage.getItem("admin");
    this.admin = JSON.parse(adminvalue);
    this.working = await getStudentWork(this.admin[0].faculty_id)
    
    
    // Overwriting base render method with actual data.
    for(let i = 0 ; i<this.working.length;i++){
      this.major[i] =this.working[i].name
      this.count[i]=this.working[i].count
     
  }
   
    this.renderChart({
      labels:  this.major,
      datasets: [
        {
          label: 'employed',
          backgroundColor: ['#e7a33e','#27a8a1','#f95dd6'],
          data: this.count
        }
      ]
    }) 
    
    
  },
  data(){
    return{
      working:[],
      label:[],
      major:[],
      count:[]
    }
  }
}
</script>
