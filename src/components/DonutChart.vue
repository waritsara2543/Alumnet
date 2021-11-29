<script>
import { defineComponent } from 'vue'
import { Doughnut } from 'vue3-chart-v2'
import {getStudentAddress} from "../api/api";

export default {
  name: 'Province where alumni reside',
  extends: Doughnut,
  async mounted () {

    const adminvalue = localStorage.getItem("admin");
    this.admin = JSON.parse(adminvalue);
    this.address = await getStudentAddress(this.admin[0].faculty_id)

    for(let i = 0 ; i<this.address.length;i++){
      this.province[i] =this.address[i].province
      this.count[i]=this.address[i].count
     
  }
   
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.province,
      datasets: [
        {
          label: 'Province where alumni reside',
          backgroundColor:['#e7a33e','#27a8a1','#f95dd6','#FFD700','#00FA9A','#48D1CC','#D02090','#A020F0','#76504F','#99BBAD','#9C4B28','#4382BB'],
          data: this.count
        }
      ]
    })
  },
  data(){
    return{
      address:[],
      province:[],
      count:[]
    }
    

  }
}
</script>