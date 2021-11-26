<template>
  <q-page>
      
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <h5 class="text-bold" style="color: #014a88">Address</h5>
       <q-input square outlined v-model="code"  label="zip code" />
       <q-select square outlined v-model="province" :options="provinces" label="Province" />
       <q-select square outlined v-model="amphone" :options="amphones" label="Amphone" />
       <q-select square outlined v-model="tumbon" :options="tumbons" label="Tumbon" />

        <q-input
            square outlined
            v-model="address_detail"
            label="address detail"
            type="textarea"
          />

          <div style="padding: 15px">
          <q-btn 
            @click="toavatar"
            rounded
            label="CONTINUE"
            class="full-width text-white"
            style="
              font-size: 15px;
              background: linear-gradient(#b42425 0%, #b42425 100%);
            "
          />
        </div>

    </div>
    
  </q-page>
</template>
 <script>
import { ref } from "vue";
import { date } from "quasar";
import { createworkplace } from "../api/api"


export default {
  methods: {
    toavatar(){

           this.$router.push({ name: "homepage" });

         
    },
  },
  mounted() {
  },

  setup() {
    return {
        address_detail: ref(null),
        code: ref(null),
        province:ref(null),
        amphone:ref(null),
        tumbon:ref(null),
        tumbons:[
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
        amphones:[
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
        provinces:[
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
        
     
    };
  },
};
</script>