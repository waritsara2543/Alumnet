<template>
  <q-page>
    <div class="q-pa-md " >
      <div class="q-gutter-y-md column" >
        <q-toolbar
          class="text-white rounded-borders"
          style="background:#032030 "
        >
         
          <p
            style="padding: 15px 0px 0px 20px; font-size: 15px"
            id="user_name"
          >
            Notifications
          </p>

          
        </q-toolbar>
        

        <q-card v-for="(col, index) in events"
          :key="index"
          class="my-card text-white full-width "
          style="margin-top: 10px;background: linear-gradient(#032030 0%, #1794a5 100%); "
        >


          <q-card-section class="text-left">
            <div class="text-subtitle2" id="title_content" @click="toDetailContent(this.events[index].public_relation_id)">title :{{ this.events[index].title }}</div>
          </q-card-section>
        </q-card>
        


      </div>
    </div>
  </q-page>
</template>
 <script>
import { ref } from "vue";
import { getEvent } from "../api/api";
export default {
  methods: {
    toDetailContent(public_relation_id){
      console.log(public_relation_id);
      this.$router.push({ name: "detailContent" , params:{ public_relation_id }  });
    },
  },
  async mounted(){
    const detailvalue = localStorage.getItem("detail");
    this.detail = JSON.parse(detailvalue);
    console.log( this.detail[0].faculty_id);
    this.events = await getEvent(this.detail[0].faculty_id);

  },

  data() {
    return {
      search: ref(""),
      student: [],
      events:[],
      
      
    };
  },
};
</script>