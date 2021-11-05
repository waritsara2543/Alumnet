<template>
  <q-page padding>
    <div>
      <q-toolbar class="text-white rounded-borders" style="background: #032030">
        <q-btn
          round
          dense
          flat
          class="q-mr-xs"
          icon="arrow_back"
          @click="back()"
        ></q-btn>

        <p class="text-bold text-h6" style="margin-top: 12px">
          Contact Channel
        </p>
        <q-icon
          style="font-size: 25px; margin-bottom: 2px"
          name="attach_file"
        />
      </q-toolbar>

      <q-card
        class="my-card text-white full-width"
        style="background: #032030; margin-top: 10px"
      >
        <q-card-section class="">
          <div class="row">
            <div class="col-3">
              <div class="text-subtitle2" id="contact">EMAIL :</div>
            </div>
            <div class="col">
              <div class="text-subtitle2" style="" id="contact_name">
                warissara.0039@gmail.com
              </div>
            </div>
            <div class="col-1">
              <q-btn
                round
                dense
                flat
                style="margin-top: -5px"
                @click="editcontact = true"
              >
                Edit</q-btn
              >
            </div>
          </div>
        </q-card-section>
      </q-card>

      <div class="text-center text-white">
        <q-btn
          icon="add_circle_outline"
          style="background: #032030; margin: 10px"
          @click="addContact = true"
        >
        </q-btn>
      </div>
    </div>

    <!-- dialog  add contact-->

    <q-dialog v-model="addContact" persistent>
      <q-card style="min-width: 350px; background: white">
        <q-card-section>
          <div class="text-h6">Add contact</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-select
            v-model="model"
            :options="contacts"
            label="Contact"
            bottom-slots
            style="padding: 20px 20px 20px 15px"
          />
          <q-input square outlined v-model="contactName" label="name" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add" v-close-popup @click="contact()" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- dialog  Edit Contact-->

    <q-dialog v-model="editcontact" persistent>
      <q-card style="min-width: 350px; background: white">
        <q-card-section>
          <div class="text-h6">Update Contact</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            square
            outlined
            v-model="new_name_contact"
            label="name of contact"
            @keyup.enter="editcontact = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Update" v-close-popup @click="updateContact()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
 <script>
import { ref } from "vue";
export default {
  methods: {
    back() {
      this.$router.push({ name: "profilepage" });
    },
    contact() {
      const contact_type = this.model;
      const contact_name = this.contactName;
      console.log(contact_type + " : " + contact_name);
    },
    updateContact() {
      const new_name_contact = this.new_name_contact;
      console.log(new_name_contact);
    },
  },

  data() {
    return {
      addContact: ref(false),
      editcontact: ref(false),
      contactName: "",
      new_name_contact: "",
      model: ref(null),
      contacts: ["Facebook", "LINE", "Email", "Phone"],
    };
  },
};
</script>