<template>
  <div class="q-pa-md">
    <div
      class="text-white"
      style="border-radius : 10px ;background-color: #1794A5 ;50px"
    >
      <q-toolbar>
        <q-toolbar-title container style="height: 60px">
          <q-img src="../assets/Alumnet.png" width="60px" style="margin-left" />
         
        </q-toolbar-title> <q-tabs
            v-model="tab"
            class="text-black"
          >
            <q-route-tab
              v-for="nav in navs"
              :key="nav.label"
              :to="nav.to"
              :icon="nav.icon"
            />
          </q-tabs>
      </q-toolbar>
    </div>
  </div>
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
  background-image: url("src/assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
<script>
import { openURL } from "quasar";
import { ref } from "vue";
export default {
  methods: {
    openURL,
  },

  setup() {
    return {
      tab: ref("home"),
    };
  },
  data() {
    return {
      navs: [
        {
          label: "Home",
          icon: "home",
          to: "/admin/homeadmin",
        },
        {
          label: "map",
          icon: "map",
          to: "/admin/MapAdmin",
        },
        {
          label: "pie_chart",
          icon: "pie_chart",
          to: "/admin/reportadmin",
        },
        {
          label: "notifications",
          icon: "notifications",
          to: "/admin/createevent",
        },
      ],
    };
  },
};
</script>