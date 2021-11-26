<template>
  <div id="map"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { getStudentlattlongAll, getStudentlattlongByid,updateLatLong } from "../api/api";
export default {
  name: "LeafletMap",
  
  methods: {
    async pinmap(student_id) {

      this.map = L.map("map").setView([13.7087384, 100.1625354, 9.75], 5);
      L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);
      //use a mix of renderers
      var customPane = this.map.createPane("customPane");
      var canvasRenderer = L.canvas({ pane: "customPane" });
      customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400
      this.map.on("click", async function (e) {
        this.lat = e.latlng.lat;
        this.lng = e.latlng.lng;
        console.log(this.lat, this.lng);
        var r = confirm("Your location is " + this.lat + " , " + this.lng);
        if (r == true) {
          
         window.location = '/#/homepage';
         console.log(this.lat,this.lng);
         let update = await updateLatLong (this.lat,this.lng,student_id)
         
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
      let studentvalue = localStorage.getItem("student");
      this.student = JSON.parse(studentvalue);
      let student_id = this.student[0].student_id
    this.pinmap(student_id);
    
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
