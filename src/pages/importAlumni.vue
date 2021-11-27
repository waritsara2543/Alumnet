<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm">
      <h3 class="text-weight-bold">Import alumni list</h3>

      <q-btn
        color="green"
        icon="description"
        glossy
        label="1.Open google sheet"
      />
      <q-btn
        color="blue"
        glossy
        icon="cloud_download"
        label="2.Download data from google sheet"
      />
      <q-btn color="amber" glossy icon="cloud_upload" label="3.Upload result" />
      <q-table
        title="Alumni List"
        :rows="rows"
        :columns="columns"
        row-key="name"
      />
      <q-tr v-for="col in this.value" :key="col" >
        {{ col[0]}}
      </q-tr>

    </div>
  </q-page>
</template>
<script>
import { getDatainGoogleSheets } from "../api/api";
export default {
  async mounted() {
    this.value = await getDatainGoogleSheets();
    console.log(this.value);

    for (let index = 0; index < this.value.length; index++) {
      const element = this.value[index];
      this.rows= [
        {
          name: element[0],
          calories: element[1],
          // fat: element[2],
          // carbs: element[3],
          // protein: element[4],
          // sodium: element[5],
          // calcium: element[6],
        },
      ];
      // console.log(rows[0]);
    }
    console.log(this.rows);
  },

  data() {
    return {
      value: [],
      columns: [
        {
          name: "name",
          required: true,
          label: "Student ID",
          align: "left",
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "calories",
          align: "center",
          label: "Calories",
          field: "calories",
          sortable: true,
        },
        { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
        { name: "carbs", label: "Carbs (g)", field: "carbs" },
        { name: "protein", label: "Protein (g)", field: "protein" },
        { name: "sodium", label: "Sodium (mg)", field: "sodium" },
        {
          name: "calcium",
          label: "Calcium (%)",
          field: "calcium",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
        },
      ],
      rows: [],
    };
  },
};
</script>