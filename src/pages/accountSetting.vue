<template>
  <q-page padding>
    <div style="">
      <q-toolbar class="text-white rounded-borders" style="background: #032030">
        <q-btn
          round
          dense
          flat
          class="q-mr-xs"
          icon="arrow_back"
          @click="back()"
        ></q-btn>

        <p class="text-bold text-h6" style="margin-top: 12px">Account</p>
        <q-icon style="font-size: 25px; margin-bottom: 2px" name="lock" />
      </q-toolbar>

      <q-card
        class="my-card text-white full-width"
        style="background: #032030; margin-top: 10px"
      >
        <q-card-section class="">
          <div class="row">
            <div class="col-3">
              <div class="text-subtitle2">Name:</div>
            </div>
            <div class="col">
              <div class="text-subtitle2" style="" id="name">
                Warissara Wichiansrang
              </div>
            </div>
            <div class="col-1">
              <q-btn
                round
                dense
                flat
                style="margin-top: -5px"
                @click="editname = true"
              >
                Edit</q-btn
              >
            </div>
          </div>
        </q-card-section>
      </q-card>

      <q-card
        class="my-card text-white full-width"
        style="background: #032030; margin-top: 10px"
      >
        <q-card-section class="">
          <div class="row">
            <div class="col-3">
              <div class="text-subtitle2">Password:</div>
            </div>
            <div class="col">
              <div class="text-subtitle2" style="" id="password">
                **********
              </div>
            </div>
            <div class="col-1">
              <q-btn round dense flat style="margin-top: -5px"> Edit</q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>

      <q-card
        class="my-card text-white full-width"
        style="background: #032030; margin-top: 10px"
      >
        <q-card-section class="">
          <div class="row">
            <div class="col-3">
              <div class="text-subtitle2">Email:</div>
            </div>
            <div class="col">
              <div class="text-subtitle2" style="" id="Email">
                warissara.0039@gmail.com
              </div>
            </div>
            <div class="col-1">
              <q-btn
                round
                dense
                flat
                style="margin-top: -5px"
                @click="editemail = true"
              >
                Edit</q-btn
              >
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <!-- dialog  Edit Name-->

    <q-dialog v-model="editname" persistent>
      <q-card style="min-width: 350px; background: white">
        <q-card-section>
          <div class="text-h6">Update name</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            square
            outlined
            v-model="newfirstname"
            label="firstname"
            @keyup.enter="editname = false"
            style="margin-bottom: 10px"
          />
          <q-input square outlined v-model="newlastname" label="lastname" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Update" v-close-popup @click="updateName" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- dialog  Edit Email-->

    <q-dialog v-model="editemail" persistent>
      <q-card style="min-width: 350px; background: white">
        <q-card-section>
          <div class="text-h6">Update Email</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            square
            outlined
            v-model="newemail"
            label="email"
            @keyup.enter="editemail = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Update" v-close-popup @click="updateEmail" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
 <script>
import { ref } from "vue";
import { getAuth, updateEmail } from "firebase/auth";

export default {
  methods: {
    back() {
      this.$router.push({ name: "profilepage" });
    },
    updateName() {
      const newfirstname = this.newfirstname;
      const newlastname = this.newlastname;
     
    },
    updateEmail() {
      const newemail = this.newemail;
    
      const auth = getAuth();
      updateEmail(auth.currentUser, newemail)
        .then(() => {
        
          // Email updated!
          // ...
        })
        .catch((error) => {
          // An error occurred
          // ...
        });
    },
  },

  data() {
    return {
      editname: ref(false),
      editemail: ref(false),
      newfirstname: ref("Waritsara"),
      newlastname: ref("Wichiansrang"),
      newemail: ref("warissara.0039@gmail.com"),
    };
  },
};
</script>