<template>
  <q-page>
    <q-toolbar class="text-white rounded-borders" style="background: #032030">
      <div class="row">
        <div class="col-9">
          <q-input
            dark
            dense
            standout
            v-model="search"
            input-class="text-left"
            class="q-ml-md full-width"
            style="max-width: 800px"
          >
            <template v-slot:append>
              <q-icon v-if="search === ''" name="search" />
              <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="search = ''"
              />
            </template>
          </q-input>
        </div>
        <div class="col-3">
          <p class="text-right">cancle</p>
        </div>
      </div>
    </q-toolbar>
  </q-page>
</template>
 <script>
import { ref } from "vue";
export default {
  methods: {},

  setup() {
    return {
      search: ref(""),
    };
  },
};
</script>