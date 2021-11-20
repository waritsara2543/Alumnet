<template>
  <div id="mapContainer"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; 
import 'leaflet-defaulticon-compatibility';

export default {
  name: "LeafletMap",
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.map = L.map("mapContainer").setView([13.7087384,100.1625354,9.75], 5);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    //use a mix of renderers
    var customPane = this.map.createPane("customPane");
    var canvasRenderer = L.canvas({ pane: "customPane" });
    customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400
    
    

    L.marker([7.894962, 98.352373]).addTo(this.map).bindPopup('You are here.')
    .openPopup().bindTooltip("You");

    L.marker([7.894962, 98]).addTo(this.map).bindTooltip("Arnont Photdoung");
    
    
    // var pathOne = L.curve(["M", [50, 14], "Q", [53, 20], [49, 25]], {
    //   renderer: canvasRenderer,
    // }).addTo(this.map);
    // L.curve(["M", [50, 14], "Q", [52, 20], [49, 25]], {
    //   renderer: canvasRenderer,
    // }).addTo(this.map);
    // L.curve(["M", [50, 14], "Q", [51, 20], [49, 25]], {
    //   renderer: canvasRenderer,
    // }).addTo(this.map);
    // L.curve(["M", [50, 14], "Q", [50, 20], [49, 25]], {
    //   renderer: canvasRenderer,
    // }).addTo(this.map);
    // L.curve(["M", [50, 14], "Q", [47, 20], [49, 25]], {
    //   renderer: canvasRenderer,
    // }).addTo(this.map);
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
