<script>
import { defineComponent } from 'vue'
import { Pie } from 'vue3-chart-v2'
import {getStudentWork} from "../api/api";

export default {
  name: 'MonthlyChart',
  extends: Pie,
  async mounted () {
    const adminvalue = localStorage.getItem("admin");
    this.admin = JSON.parse(adminvalue);
    this.working = await getStudentWork(this.admin[0].faculty_id)
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    })
  },
  data(){
    return{
      working:[],
    }
  }
}
</script>