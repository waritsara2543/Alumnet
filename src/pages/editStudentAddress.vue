<template>
  <q-page>
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <h5 class="text-bold" style="color: #014a88">Address</h5>
      <q-input
        square
        outlined
        mask="#####"
        v-model="code"
        @change="positioncode()"
        label="zip code"
        :rules="[(val) => !!val || 'required']"
      />
      <q-select
        square
        outlined
        v-model="province"
        :options="provinces"
        label="Province"
        :rules="[(val) => !!val || 'required']"
      />
      <q-select
        square
        outlined
        v-model="amphone"
        :options="amphones"
        label="Amphone"
        :rules="[(val) => !!val || 'required']"
      />
      <q-select
        square
        outlined
        v-model="tumbon"
        :options="tumbons"
        label="Tumbon"
        :rules="[(val) => !!val || 'required']"
      />

      <q-input
        square
        outlined
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
import { getLocationByid, createAddressByid ,getLocationByStudentid} from "../api/api";

export default {
  methods: {
    async positioncode() {
      
      let getcode = await getLocationByid(this.code);
      console.log(getcode);
       if(getcode.length == 0){
         alert("zipcode is incorrect")

       }else{
      this.province = getcode[0].Province;
      this.amphone = getcode[0].amphone;
      for (let i = 0; i < getcode.length; i++) {
        this.tumbons[i] = getcode[i].tumbon;
      }}
    },

    async toavatar() {
      if (
        this.code === null|| this.tumbon ===null
      ) {
        alert("Please fill out the information completely.");
      } else {
        let create = createAddressByid(
          this.student[0].student_id,
          this.tumbon,
          this.amphone,
          this.province,
          this.code,
          "Thailand",
          this.address_detail
        );

        this.$router.push({ name: "editLocation" });
      }
    },
  },
  async mounted() {
    const value = localStorage.getItem("student");
    this.student = JSON.parse(value);
    console.log(this.student[0].student_id);
    this.getlobystudentid = await getLocationByStudentid(this.student[0].student_id)
    console.log(this.getlobystudentid);
    
  },

  data() {
    return {
      address_detail: ref(null),
      code: ref(null),
      province: ref(null),
      amphone: ref(null),
      tumbon: ref(null),
      tumbons: [],
      amphones: [],
      provinces: [],
      getlobystudentid:[]
    };
  },
};
</script>