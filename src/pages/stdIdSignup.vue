<template>
  <q-page padding>
    
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <h2 class="text-bold" style="color: #014a88">SIGN UP</h2>
      <h6 class="text-bold" style="color: #014a88">
        Please type your Student ID
      </h6>

      <q-input
        mask="##########"
        outlined
        v-model="student_id"
        label=""
        class="full-width"
        style=""
        id="student_id"
        :rules="[(val) => !!val || 'student_id is required']"
      ></q-input>
      <q-btn
        label="CONFIRM"
        class="full-width"
        style="
          font-size: 20px;
          background: linear-gradient(#b42425 0%, #b42425 100%);
        "
        @click="topersonalInform"
      />
    </div>
  </q-page>
</template>
 <script>
import { ref } from "vue";
import { confirmEmaill , getStudentById} from "../api/api";
export default {
  methods: {
    // async mounted() {
    //   const email = localStorage.getItem("email");
    //   console.log(email);
    //   let test = await getStudentById(email);
    //   console.log(test);
    // },
    
    async topersonalInform() {
      const email = localStorage.getItem("email");
      // console.log(email);
       let test = await confirmEmaill(email,this.student_id);
      console.log(test);
      let value = await getStudentById(email);
      console.log(value);
      
      if(value.length == 0){
        alert("This student ID doesn't have")
      }else{
      localStorage.setItem("student", JSON.stringify(value));
      this.$router.push({ name: "persenalInform" });
      }
    },
  },

  setup() {
    return {
      student_id: ref(""),
    };
  },
};
</script>