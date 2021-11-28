<template>
  <div class="row">
    <div class="col-12">
      <div class="q-pa-md">
        <div class="col">
          <q-card
            class="my-card text-white text-center"
            style="background: #d0dfe6; height: 800px; width :1490px; margin: 0 auto"
            id="mapContainer"
          >
          </q-card>
      </div>
      </div>
      </div>
      </div>
    
</template>
<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; 
import 'leaflet-defaulticon-compatibility';
import { getLatLongForAdmin} from "../api/api";

export default {
  name: "LeafletMap",
  data() {
    return {
      map: null,
      latlng:[],
    };
  },
  async mounted() {
    const adminvalue = localStorage.getItem("admin");
    this.admin = JSON.parse(adminvalue); 
  
     this.latlng = await getLatLongForAdmin(this.admin[0].faculty_id);

    this.map = L.map("mapContainer").setView([13.7087384,100.1625354,9.75], 5);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    //use a mix of renderers
    var customPane = this.map.createPane("customPane");
    var canvasRenderer = L.canvas({ pane: "customPane" });
    customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400
    
    

    for(let i = 0; i < this.latlng.length ; i++ ){
      let student_name = this.latlng[i].firstname +" "+this.latlng[i].lastname
    L.marker([this.latlng[i].lattitude,this.latlng[i].longitude]).addTo(this.map).bindTooltip(student_name);
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
