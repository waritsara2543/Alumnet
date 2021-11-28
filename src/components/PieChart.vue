<script>
import { defineComponent } from 'vue'
import { Pie } from 'vue3-chart-v2'
import {getStudentWorkByPosition} from "../api/api";

export default {
  name: 'Alumni job titles',
  extends: Pie,
  async mounted () {
    const adminvalue = localStorage.getItem("admin");
    this.admin = JSON.parse(adminvalue);
    this.position = await getStudentWorkByPosition(this.admin[0].faculty_id)

    for(let i = 0 ; i<this.position.length;i++){
      this.positions[i] =this.position[i].position
      this.count[i]=this.position[i].count
     
  }
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.positions,
      datasets: [
        {
          label: 'Alumni job titles',
          backgroundColor:  ['#e7a33e','#27a8a1','#f95dd6','#FFD700','#00FA9A','#48D1CC','#D02090','#A020F0','#76504F','#99BBAD','#9C4B28','#4382BB'],
          data: this.count
        }
      ]
    })
  },
  data(){
    return{
      position:[],
      positions:[],
      count:[],
    }
  }
}
</script>