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
      <!-- <q-tr v-for="col in this.value" :key="col" >
        {{ col[0]}}
        {{col[1]}}
      </q-tr> -->
    </div>
  </q-page>
</template>
<script>
import { getDatainGoogleSheets } from "../api/api";
export default {
  methods: {},

  async mounted() {
    this.value = await getDatainGoogleSheets();
    // console.log(this.value);

    for (let index = 0; index < this.value.length; index++) {
      const element = this.value[index];
      let row = {
        Student_id: element[0],
        Firstname: element[1],
        Lastname: element[2],
      };
      this.rows.push(row)
    }
    console.log(this.rows);
  },

  data() {
    return {
      value: [],
      columns: [
        {
          name: "Student_id",
          label: "Student_id",
          field: "Student_id",
          align: "left",
        },
        { name: "Firstname", label: "Firstname", field: "Firstname" },
        { name: "Lastname", label: "Lastname", field: "Lastname" },
      ],
      rows: [],
    };
  },
};
</script>