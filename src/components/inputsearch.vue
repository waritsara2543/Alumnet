<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 100%">
      <q-toolbar class="text-white rounded-borders" style="background: #032030">
        <q-input
          dark
          dense
          standout
          v-model="search"
          input-class="text-left"
          class="q-ml-md "
          style="width: 1000px; max-width: 100%"
          label="Search by name or surname"
        >
          <template v-slot:append>
            <q-icon  name="search" @click="clicksearch" />
          </template>
        </q-input>

        <q-space />

        <q-btn
          round
          dense
          flat
          class="q-mr-xs"
          style="margin-left: 20px"
          @click="backtohome()"
          >cancle</q-btn
        >
      </q-toolbar>
    </div>

    
      <q-card 
      v-for="(col, index) in searchList"
          :key="index"
      rounded
      class="my-card text-white"
      style="margin: 0 auto; margin-top: 10px; background: linear-gradient(#032030 0%, #1794a5 100%);"
      @click="result(this.searchList[index].student_id )"
    >

      <q-card-section class="row"  >
        <q-avatar class="q-mr-xs q-ml-md" id="image_profile">
          <img v-if="this.searchList[index].image_profile !== null"  :src="this.searchList[index].image_profile" />
          <img  src="../assets/man.png" />
          
        </q-avatar>

        <div
          class="text-subtitle2"
          id="student_name"
          style="margin-left: 20px; margin-top: 10px"
        >
          {{ this.searchList[index].firstname }}
          {{ this.searchList[index].lastname }}
         
        </div>
      </q-card-section>

    </q-card>

    
    

  </div>
</template>
<script>
import { ref } from "vue";
import { getSearch } from '../api/api'
export default {
  methods: {
    backtohome() {
      this.$router.push({ name: "homepage"});
      // this.$router.push({ name: "homepage" });
    },
    async clicksearch(){
     
      this.search = this.search.charAt(0).toUpperCase() + this.search.slice(1)
      this.searchList =  await getSearch(this.search,this.search)
    },
    result(index){
      console.log(index);
      this.$router.push({ name: "resultSearch", params: { index }  });
    }
  },

  data() {
    return {
      search: ref(""),
      searchList:[],
    };
  },
};
</script>