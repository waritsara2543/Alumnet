<template>
  <q-page>
    
    <div class="row justify-center">
      <div class="col-10 text-center">
        <p>Latitude: {{ latitude }}</p>
        <p>Longitude: {{ longitude }}</p>
      </div>
    </div>
    <div class="row justify-center q-mt-lg">
      <q-btn
        :class="$q.screen.lt.sm ? 'col-8' : 'col-4'"
        color="indigo"
        label="Minha localizacao"
        push
        size="lg"
        @click="getGeolocation"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      latitude: "",
      longitude: "",
    };
  },
  methods: {
    getGeolocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.setPosition,
          this.errorPosition
        );
      } else {
        this.errorPosition();
      }
    },
    setPosition(position) {
      const coords = position.coords;
      this.latitude = coords.latitude;
      this.longitude = coords.longitude;
      this.successNotify();
    },
    errorPosition() {
      this.$q.notify({
        position: "bottom",
        timeout: 3000,
        color: "negative",
        textColor: "white",
        actions: [{ icon: "close", color: "white" }],
        message: "Unable to retrieve your position!",
      });
    },
    successNotify() {
      this.$q.notify({
        position: "bottom",
        timeout: 3000,
        color: "positive",
        textColor: "white",
        actions: [{ icon: "check", color: "white" }],
        message: "Position successfully retrieved!",
      });
    },
  },
};
</script>