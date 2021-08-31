<template>
  <q-layout class="bg-image">
   

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

</script>
<style>
.bg-image {
    background-image: url("../assets/background.jpg");
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
  }
</style>
