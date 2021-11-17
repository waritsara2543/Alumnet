
import Vue from 'vue';
import VueApexCharts from 'vue-apexcharts';

export default Vue(({ app }) => {
    app.component('apexchart', VueApexCharts)
  });
