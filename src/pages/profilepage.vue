<template>
  <q-page padding>
    <q-card
      v-for="(col, index) in person"
      :key="index"
      class="my-card text-white"
      style="height: 385px; margin-top: 90px"
    >
      <q-card-section class="text-center">
        <q-avatar
          class="q-mr-xs"
          id="image_profile"
          style="
            position: relative;
            width: 100px;
            height: 100px;
            top: -60px;
            left: 10px;
            background: white;
          "
        >
          <img :src="this.profile" style="border-style: solid" />
        </q-avatar>
        <q-icon
          @click="toavatar"
          name="add_circle"
          style="position: relative; bottom: 20px; right: 20px; font-size: 30px"
        />

        <div class="text-h6" id="user_name" style="margin-top: -40px">
          {{ this.person[0].firstname }} {{ this.person[0].lastname }}
        </div>
        <div
          class="text-h6"
          style="border-top: 3px solid #ffffff; padding: 20px; margin-top: 20px"
        ></div>
      </q-card-section>
      <q-card-section class="text-left">
        <div class="row">
          <q-icon name="school" style="margin-right: 10px" />

          <div id="graduate">
            Graduation {{ this.person[0].major }}
            {{ this.person[0].graduate_year }} at {{ this.person[0].campus }}
            <q-icon @click="prompt = true" name="edit" />
          </div>
        </div>

        <div class="row">
          <q-icon name="business_center" style="margin-right: 10px" />

          <div id="workplace">
            {{ this.person[0].position }} at {{ this.person[0].workplace }}
            <q-icon name="edit" />
          </div>
        </div>

        <div class="row">
          <q-icon name="location_on" style="margin-right: 10px" />

          <div id="province">
            Lives in {{ this.person[0].province }},
            {{ this.person[0].country }} <q-icon name="edit" />
          </div>
        </div>

        <div class="row">
          <q-icon name="favorite" style="margin-right: 10px" />

          <div id="status">
            {{ this.person[0].status }} <q-icon name="edit" />
          </div>
        </div>

        <div class="row">
          <q-icon name="description" style="margin-right: 10px" />

          <div class="col" id="epigram">
            {{ this.person[0].epigram }} <q-icon name="edit" />
          </div>
        </div>

        <div class="text-center">
          <q-icon style="font-size: 40px" name="add_circle" />
        </div>
      </q-card-section>
    </q-card>

    <div class="row">
      <div class="col" style="padding: 10px 5px 5px 0px">
        <q-card
          class="my-card text-white text-center"
          style="
            background: linear-gradient(#032030 0%, #1794a5 100%);
            height: 100px;
            margin: 0 auto;
          "
        >
          <div class="text-h4" id="" style="padding-top: 20px">69</div>
          <div class="text-caption" id="" style="">Following</div>
        </q-card>
      </div>
      <div class="col" style="padding: 10px 0px 5px 5px">
        <q-card
          class="my-card text-white text-center"
          style="
            background: linear-gradient(#032030 0%, #1794a5 100%);
            height: 100px;
            margin: 0 auto;
          "
        >
          <div class="text-h4" id="" style="padding-top: 20px">54</div>
          <div class="text-caption" id="" style="">Follower</div>
        </q-card>
      </div>
    </div>

    <div class="row">
      <div class="col" style="padding: 5px 5px 10px 0px">
        <q-card
          @click="accountSetting()"
          class="my-card text-white text-center"
          style="
            background: linear-gradient(#032030 0%, #1794a5 100%);
            height: 100px;
            margin: 0 auto;
          "
        >
          <q-icon style="font-size: 40px; margin-top: 20px" name="lock" />
          <div class="text-caption" id="" style="">Account</div>
        </q-card>
      </div>
      <div class="col" style="padding: 5px 0px 10px 5px">
        <q-card
          @click="contactChannel()"
          class="my-card text-white text-center"
          style="
            background: linear-gradient(#032030 0%, #1794a5 100%);
            height: 100px;
            margin: 0 auto;
          "
        >
          <q-icon
            style="font-size: 40px; margin-top: 20px"
            name="attach_file"
          />
          <div class="text-caption" id="" style="">Contact channel</div>
        </q-card>
      </div>
    </div>

    <q-btn
      label="LOGOUT "
      class="full-width"
      style="
        font-size: 15px;
        color: white;
        background: linear-gradient(#b42425 0%, #b42425 100%);
      "
    />

    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Edit</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="address"
            autofocus
            @keyup.enter="prompt = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add address" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
 <script>
import { ref } from "vue";
import { getProfileById } from "../api/api";
export default {
  methods: {
    // backconfirmEmail() {
    //   this.$router.push({ name: "confirmEmail" });
    // },
    contactChannel() {
      this.$router.push({ name: "contactChannel" });
    },
    accountSetting() {
      this.$router.push({ name: "accountSetting" });
    },
    toavatar() {
      this.$router.push({ name: "toavatar" });
    },
    async detailstudent() {
      this.person = await getProfileById(this.student[0].student_id);
      console.log(this.person);
    },
  },
  async mounted() {
    const value = localStorage.getItem("student");
    this.student = JSON.parse(value);
    await this.detailstudent(this.student[0].student_id);
    this.profile = this.student[0].image_profile
  },

  data() {
    return {
      prompt: ref(false),
      address: ref(""),
      person: [],
      student: [],
      profile:ref("")
    };
  },
};
</script>