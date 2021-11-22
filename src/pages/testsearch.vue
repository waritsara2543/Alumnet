<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">

      <q-input v-model="search" filled type="search" hint="Search" >
        <template v-slot:append>
          <q-icon name="search" @click="searchs" />
        </template>
      </q-input>

    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { getSearch } from '../api/api'

export default {
    methods: {
        async searchs(){
           let testcase =  await getSearch(this.search,this.search)
           console.log(testcase);
            console.log(this.search);
        }
    },
  data () {
    return {

      search: ref(''),
    }
  }
}
</script>