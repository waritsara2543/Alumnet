<template>
  <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">
  <div class="q-pa-md">
    <div class="col">
      <h3 style="text-bold" >Create an event</h3>
      <q-card
        class="my-card text-white text-center"
        style="background: #d0dfe6; height: 500px; margin: 0 auto"
      >
        <div style="padding: 50px 100px 100px 100px">
          <q-input outlined v-model="Title" label="Title" bg-color="cyan-8" />

          <div style="padding: 20px 0px 0px 0px">
            <div class="row">
              <q-card
                class="my-card bg-cyan-8 text-white max-width"
                style="height: 60px; margin: 0 auto; width: 1500px"
              >
                <q-card-section >
                  <div class="row" style="margin-top: -7px" >
                    <div class="text-subtitle1 text-left" >Start</div>

                    <q-space />

                    <q-btn icon="event" round color="black" >
                      <q-popup-proxy
                        color="cyan-8"
                        @before-show="updateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="proxyDate">
                          <div class="row items-center justify-end q-gutter-sm">
                            <q-btn
                              label="Cancel"
                              color="cyan-8"
                              flat
                              v-close-popup
                            />
                            <q-btn
                              label="OK"
                              color="cyan-8"
                              flat
                              @click="save"
                              v-close-popup
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-btn>
                    <q-badge color="cyan-8"> {{ date }} </q-badge>
                    <q-btn
                      icon="access_time"
                      round
                      color="black"
                      class="cursor-pointer"
                    >
                      <q-popup-proxy
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-time
                          v-model="date"
                          mask="YYYY-MM-DD HH:mm"
                          format24h
                        >
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="cyan-8"
                              flat
                            />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-btn>
                    <q-space />
                    <div class="text-subtitle1 text-left">End</div>
                    <q-space />
                    <q-btn icon="event" round color="black">
                      <q-popup-proxy
                        color="cyan-8"
                        @before-show="updateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="proxyDate_end">
                          <div class="row items-center justify-end q-gutter-sm">
                            <q-btn
                              label="Cancel"
                              color="cyan-8"
                              flat
                              v-close-popup
                            />
                            <q-btn
                              label="OK"
                              color="cyan-8"
                              flat
                              @click="save"
                              v-close-popup
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-btn>
                    <q-badge color="cyan-8"> {{ date_end }} </q-badge>
                    <q-btn
                      icon="access_time"
                      round
                      color="black"
                      class="cursor-pointer"
                    >
                      <q-popup-proxy
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-time
                          v-model="date_end"
                          mask="YYYY-MM-DD HH:mm"
                          format24h
                        >
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="cyan-8"
                              flat
                            />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-btn>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
           <div style="padding: 20px 0px 0px 0px">
          <q-input
        @update:model-value="val => { file = val[0] }"
        filled
        type="file"
        bg-color="cyan-8"
        accept=".jpg, image/*"
      /></div>
      <div class="q-pa-md" style="padding: 20px 0px 0px 0px">
      <q-input
      v-model="text"
      filled
      type="textarea"
      bg-color="white"
    />
  </div>
        </div>
        
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const date = ref("2019/03/01 12:44");
    const date_end = ref("2019/03/01 12:44");
    const proxyDate = ref("2019/03/01 12:44");
    const proxyDate_end = ref("2019/03/01 12:44");
    return {
      text: ref(""),
      time: ref(""),
      date: ref(""),
      date_end: ref(""),
      date,
      date_end,
      proxyDate,
      proxyDate_end,

      updateProxy() {
        proxyDate.value = date.value;
      },

      save() {
        date.value = proxyDate.value;
        date_end.value = proxyDate_end.value;
      },
    };
  },
};
</script>
<style>
body {
  font-family: 'Josefin Sans', sans-serif;
  box-sizing: border-box;
}
</style>