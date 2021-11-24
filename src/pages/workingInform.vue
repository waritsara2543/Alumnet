<template>
  <q-page>
    <q-icon name="arrow_back" style="font-size: 32px" />
    <div
      class="q-pa-md q-gutter-sm text-center"
      style="max-width: 800px; margin: 0 auto"
    >
      <h5 class="text-bold" style="color: #014a88">Working Information</h5>

      <div class="q-pa-md">
        <div class="q-gutter-sm row justify-start">
          <div class="col">
            <q-radio
              dense
              v-model="employed"
              val="unemployed"
              label="unemployed"
            />
          </div>
          <div class="col">
            <q-radio dense v-model="employed" val="employed" label="employed" />
          </div>
        </div>

        <div v-if="employed === 'employed'">
          <q-input
            v-model="workplace_name"
            id="workplace_name"
            label="Company name"
            :dense="dense"
            style="padding: 15px; margin-top: 50px"
            :rules="[(val) => !!val || 'Company name is required']"
          />

          <q-input
            v-model="position"
            id="position"
            label="Position"
            :dense="dense"
            style="padding: 15px"
            :rules="[(val) => !!val || 'Position is required']"
          />

          <q-input
            label="start date"
            v-model="date"
            mask="date"
            :rules="['date']"
            style="padding: 15px"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

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
    </div>
  </q-page>
</template>
 <script>
import { ref } from "vue";
import { date } from "quasar";
import { createworkplace } from "../api/api";
export default {
  methods: {
    // backconfirmEmail() {
    //   this.$router.push({ name: "confirmEmail" });
    // },
    async toavatar() {
      // const newDate = new Date(this.date)
      if(this.employed === 'employed'){
        if(this.workplace_name ==="" ||this.position === "" || this.date===null ){
          alert("Please fill out the information completely.")
        }else{
          console.log("pass");
          let timeStamp = Date.now();
      let formattedString = date.formatDate(this.date, "YYYY-MM-DD");
      let work = await createworkplace(
        this.workplace_name,
        this.position,
        this.student[0].student_id,
        date.formatDate(this.date, "YYYY-MM-DD")
      );
      console.log(this.formattedString);
      console.log(this.workplace_name);
      this.$router.push({ name: "toavatar" });

        }

      }else{
         console.log("pass");
        let timeStamp = Date.now();
      let formattedString = date.formatDate(this.date, "YYYY-MM-DD");
      let work = await createworkplace(
        this.workplace_name,
        this.position,
        this.student[0].student_id,
        date.formatDate(this.date, "YYYY-MM-DD")
      );
      console.log(this.formattedString);
      console.log(this.workplace_name);
      this.$router.push({ name: "toavatar" });

      }
      
    },
  },
  async mounted() {
    const value = localStorage.getItem("student");
    this.student = JSON.parse(value);
    console.log(this.student[0].student_id);
  },

  data() {
    return {
      workplace_name: ref(""),
      position: ref(""),
      dense: ref(false),
      student: [],
      date: null,
      employed: ref("unemployed"),
    };
  },
};
</script>