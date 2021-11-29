<template>
  <q-page >
    <q-input
            square 
          filled
          v-model="search"
          input-class="text-left"
          style="width: 1000px; max-width: 100%;margin:0 auto"
          label="Search by name or surname"
        >
          <template v-slot:append>
            <q-icon  name="search" @click="clicksearch" />
          </template>
        </q-input>

         <q-card 
      v-for="(col, index) in searchList"
          :key="index"
      rounded
      class="my-card text-white"
      style="margin: 0 auto; margin-top: 10px; background: linear-gradient(#032030 0%, #1794a5 100%);width: 1000px; max-width: 100%;"
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

  </q-page>
</template>
 <script>
import { ref } from "vue";
import { getSearch } from '../api/api'
export default {
  methods: {
    backtohome() {
      this.$router.go(-1) 
      // this.$router.push({ name: "homepage" });
    },
    async clicksearch(){
     
      this.search = this.search.charAt(0).toUpperCase() + this.search.slice(1)
      this.searchList =  await getSearch(this.search,this.search)
    },
    result(index){
    
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