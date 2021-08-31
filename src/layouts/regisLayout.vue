<template>
  <q-layout class="bg-image-main">
   

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

</script>
<style>
.bg-image-main {
    background-image: url("../assets/background.jpg");
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
  }
</style>
