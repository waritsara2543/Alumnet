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

      <div></div>

      <q-card
        v-for="(col, index) in getcontact"
        :key="index"
        class="my-card text-white full-width"
        style="background: #032030; margin-top: 10px"
      >
        <q-card-section class="">
          <div class="row">
            <div class="col-3">
              <div class="text-subtitle2" id="contact">
                {{ this.getcontact[index].contact_type }} :
              </div>
            </div>
            <div class="col">
              <div class="text-subtitle2" style="" id="contact_name">
                {{ this.getcontact[index].contact_url }}
              </div>
            </div>
            <div class="col-1">
                  <q-icon
                    name="delete"
                    style="font-size: 20px"
                    @click="showDialogDelete(this.getcontact[index].student_contact_id)"
                  />
                
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
            :rules="[(val) => !!val || 'contact type is required']"
            label="Contact"
            bottom-slots
            style="padding: 20px 20px 20px 15px"
          />
           <!-- Phone -->
        <q-input v-if="model == contacts[3]"
          v-model="contactName"
          label="Please specify your contact"
          id="contact"
          :dense="dense"
          mask="(###) ### - ####"
          style="padding: 20px 20px 20px 15px"
        />
          <q-input  v-if="model == contacts[0] || model == contacts[1] ||model == contacts[2] " square outlined v-model="contactName" label="name" :rules="[(val) => !!val || 'contact name is required']" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add" v-close-popup @click="contact()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>

   

        <!-- dialog  Delete Contact-->

        <q-dialog v-model="deletecontact" persistent>
          <q-card style="min-width: 350px; background: white">
            <q-card-section>
              <div class="text-h6">Delete Contact</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div>Are you sure to delete this contact?</div>
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
              <q-btn flat label="Cancel" v-close-popup />
              <q-btn
                flat
                label="Delete"
                v-close-popup
                @click="
                  deleteContact()
                "
              />
            </q-card-actions>
          </q-card>
        </q-dialog>

</template>
 <script>
import { ref } from "vue";
import { getStudentContactByid, createinformation ,deleteStudentContact } from "../api/api";
export default {
  methods: {
    
    showDialogDelete(id) {
      this.id=id;
      console.log(id);
      this.deletecontact = true;
    },
    async deleteContact() {
     console.log(this.id);
     let deletect = await deleteStudentContact (this.id);
     location.reload();

    },
   
    back() {
      this.$router.push({ name: "profilepage" });
    },
    async contact() {
      const contact_type = this.model;
      const contact_name = this.contactName;
      console.log(contact_type + " : " + contact_name);
      if(this.contactName === ''||this.model==='' ){
        alert("Please fill out the information completely.")

      }else{
        let add = await createinformation(
        this.student[0].student_id,
        contact_type,
        contact_name
      );
      location.reload();

      }
      
    },
  },
  async mounted() {
    const studentvalue = localStorage.getItem("student");
    this.student = JSON.parse(studentvalue);
    this.getcontact = await getStudentContactByid(this.student[0].student_id);

    console.log(this.getcontact);
  },
  data() {
    return {
      id:"",
      addContact: ref(false),
      editcontact: ref(false),
      contactName: "",
      new_name_contact: "",
      model: ref(null),
      contacts: ["Facebook", "LINE", "Email", "Phone"],
      student: [],
      getcontact: [],
      deletecontact: false,
      dense: ref(false),
    };
  },
};
</script>