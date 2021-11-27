<template>
  <q-page>
    <!-- <q-table :rows="rows" :columns="columns" row-key="id"> </q-table> -->
    
      <q-table>
        <q-th>dddd</q-th>
        <q-td v-for="col in this.value" :key="col">
          Id{{ col[0] }}
        </q-td>
        <!-- </q-tr> -->
      </q-table>
    
  
</q-page>
</template>


<script>
import { ref } from "vue";
import { getDatainGoogleSheets } from "../api/api";

export default {
  async mounted() {
    this.value = await getDatainGoogleSheets();
    console.log(this.value);

    // const selected = ref()
    this.rows = [
      {
        id: 1,
        name: "Panda",
        email: "panda@chihuahua.com",
        age: 6,
      },
      {
        id: 2,
        name: "Lily",
        email: "lily@chihuahua.com",
        age: 5,
      },
    ];

    this.columns = [
      { label: "expand", name: "expand", field: "expand" },
      { label: "id", field: "id", name: "id" },
      { label: "name", field: "name", name: "name" },
      { label: "email", field: "email", name: "email" },
      { label: "age", field: "age", name: "age" },
    ];
  },

  data() {
    return {
      rows: [],
      columns: [],
      // selected,
      value: [],
    };
  },
};
</script>