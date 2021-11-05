<template>
  <q-page>
    <div id="example">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>

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
export default {
  methods: {
    search() {
      console.log(this.name);
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
      //   console.log(this.name);
      this.search();
    },
  },
  data() {
    return {
      message: "Hello",
      name: "name",
      searchname: "",
    };
  },
};
</script>

<style>
</style>