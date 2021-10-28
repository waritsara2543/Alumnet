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
    <div id="mapContainer"></div>
  </q-page>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../../node_modules/leaflet/dist/Tween";
import "../../node_modules/leaflet/dist/leaflet.curve";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

export default {
  data() {
    return {
      latitude: "",
      longitude: "",
      map: null,
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
  mounted() {
    var latitude = 7.894962;
    var longtitude = 98.352373;
    this.map = L.map("mapContainer").setView(
      [13.7087384, 100.1625354, 9.75],
      5
    );
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    //use a mix of renderers
    var customPane = this.map.createPane("customPane");
    var canvasRenderer = L.canvas({ pane: "customPane" });
    customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400
    
    L.marker([latitude, longtitude])
      .addTo(this.map)
      .bindPopup("You are here.")
      .openPopup();
    this.map.on("click", function (e) {
      var coord = e.latlng;
        var lat = coord.lat;
       var lng = coord.lng;
    
      console.log(
        "You clicked the map at latitude: " + lat + " and longitude: " + lng
      );
    });
  },
  onBeforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  },
};
</script>
<style scoped>
#mapContainer {
  width: 100vw;
  height: 100vh;
}
</style>