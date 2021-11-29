<template>
  <q-page>
    <div id="example">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>

      <q-btn
        color="blue"
        glossy
        icon="cloud_download"
        label="2.Download data from google sheet"
        @click="test"
      />

      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        :searchText="searchText"
      />
      {{ this.searchname }}
    </div>
  </q-page>
</template>

<script>
import {notificationEvent} from '../api/api'
export default {
  methods: {
    async test(){
       this.titles = "Hello"
       this.content = "have a good day"
     this.value = await notificationEvent( this.titles,this.content)
    
    },

    search() {
     
      // this.searchname = this.name;
      if (this.name.length >= 10) {
        this.searchname = this.name;
      } else {
          
      }
    },
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split("").reverse().join("");
    },
    searchText: function () {
      // `this` points to the vm instance
      
      this.search();
    },
  },
  data() {
    return {
      message: "Hello",
      name: "name",
      searchname: "",
      title: "",
      content: "",
      value: [],
    };
  },
};
</script>

<style>
</style>