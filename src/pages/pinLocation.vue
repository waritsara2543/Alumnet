<template>
  <div id="map"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { getStudentlattlongAll, getStudentlattlongByid } from "../api/api";
export default {
  name: "LeafletMap",
  methods: {
    async pinmap() {
      const studentvalue = localStorage.getItem("student");
      this.student = JSON.parse(studentvalue);
      this.allLatLonng = await getStudentlattlongAll(
        this.student[0].student_id
      );
      this.myLatLong = await getStudentlattlongByid(this.student[0].student_id);

      this.map = L.map("map").setView([13.7087384, 100.1625354, 9.75], 5);
      L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);
      //use a mix of renderers
      var customPane = this.map.createPane("customPane");
      var canvasRenderer = L.canvas({ pane: "customPane" });
      customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400
      this.map.on("click", function (e) {
        this.lat = e.latlng.lat;
        this.lng = e.latlng.lng;
        console.log(this.lat, this.lng);
        var r = confirm("Your location is " + this.lat + " , " + this.lng);
        if (r == true) {
          console.log("true");
         window.location = '/#/regist/studentAddress/';
        } else {
         
        }
      });
    },
  },
  data() {
    return {
      map: null,
      allLatLonng: [],
      myLatLong: [],
      student: [],
      lat: "",
      lng: "",
     
    };
  },
  async mounted() {
    this.pinmap();
    
  },
  onBeforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  },
};
</script>

<style scoped>
#map {
  width: 100vw;
  height: 100vh;
}
</style>
