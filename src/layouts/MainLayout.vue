<template>
  <q-layout view="lHh Lpr lFf">

    
    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <q-footer>
      <q-tabs
        v-model="tab"
        class="text-white shadow-2"
        style="background:#032030 "
      >
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

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
          to: "/homepage",
        },
        {
          label: "Profile",
          icon: "person",
          to: "/profilepage",
        },
        {
          label: "Notifications",
          icon: "notifications",
          to: "/notificationpage",
        },
        {
          label: "classDirectory",
          icon: "auto_stories",
          to: "/classDirectorypage",
        },
        {
          label: "location",
          icon: "pin_drop",
          to: "/locationpage",
        },
        
      ],
    };
  },
};
</script>
