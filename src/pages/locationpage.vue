<template>
  <div id="mapContainer"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; 
import 'leaflet-defaulticon-compatibility';
import { getStudentlattlongAll ,getStudentlattlongByid} from "../api/api";
export default {
  name: "LeafletMap",
  data() {
    return {
      map: null,
      allLatLonng:[],
      myLatLong:[],
      student: [],
    };
  },
  async mounted() {
     const studentvalue = localStorage.getItem("student");
     this.student = JSON.parse(studentvalue);
    this.allLatLonng = await getStudentlattlongAll(this.student[0].student_id);
    this.myLatLong = await getStudentlattlongByid(this.student[0].student_id);
   
    this.map = L.map("mapContainer").setView([13.7087384,100.1625354,9.75], 5);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    //use a mix of renderers
    var customPane = this.map.createPane("customPane");
    var canvasRenderer = L.canvas({ pane: "customPane" });
    customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400
    
    
for(let j = 0; j < this.myLatLong.length ; j++ ){
    L.marker([this.myLatLong[j].lattitude , this.myLatLong[j].longitude]).addTo(this.map).bindPopup('You are here.')
    .openPopup().bindTooltip("You");
}

    for(let i = 0; i < this.allLatLonng.length ; i++ ){
      let student_name = this.allLatLonng[i].firstname +" "+this.allLatLonng[i].lastname
    L.marker([this.allLatLonng[i].lattitude,this.allLatLonng[i].longitude]).addTo(this.map).bindTooltip(student_name);
    }
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
