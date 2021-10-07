<template>
  <q-page>
    <div class="q-pa-md">
      <q-layout
        view="lHh lpr lFf"
        container
        style="height: 400px"
        class="shadow-2 rounded-borders"
      >
        <q-header elevated>
          <q-toolbar>
            <!-- <q-btn flat round dense icon="menu" class="q-mr-sm" /> -->
            <q-avatar>
              <img src="../assets/Alumnet.png" />
            </q-avatar>

            <q-toolbar-title>Alumnet</q-toolbar-title>
          </q-toolbar>
        </q-header>

        <!-- <q-page-container>
        <q-page class="q-pa-md">
          
        </q-page>
      </q-page-container> -->

        <q-footer elevated>
          <q-toolbar>
            <q-toolbar-title>
              <q-btn flat round dense icon="home" class="q-mr-xs" />
              <q-btn flat round dense icon="person" class="q-mr-xs" />
              <q-btn flat round dense icon="notifications" class="q-mr-xs" />
              <q-btn flat round dense icon="auto_stories" class="q-mr-xs" />
              <q-btn flat round dense icon="pin_drop" class="q-mr-xs" />
            </q-toolbar-title>
          </q-toolbar>
        </q-footer>
      </q-layout>
    </div>
  </q-page>
</template>
 <script>
import { ref } from "vue";
export default {
  methods: {},

  setup() {
    return {
      tab: ref("images"),
    };
  },
};
</script>