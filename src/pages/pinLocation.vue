<template>
  <q-page>

    
    <!-- <div class="row justify-center">
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
    </div> -->
    <div id="map"></div>
    <div>
      
    </div>
    
  </q-page>
</template>

<script>
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
// import "leaflet-defaulticon-compatibility";
// import "esri-leaflet/dist/esri-leaflet";
// import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder";
// import "esri-leaflet-vector/dist/esri-leaflet-vector";






export default {
  data() {
    return {
      latitude: "",
      longitude: "",
      lat:"",
      lng:"",
      pinmap: null,
    };
  },
  computed:{
    // // newlocation: function () {
    // //   this.setlocation()
    // // }        
    //     setlocation :function() {
    //       // addmarker(){
    //   L.marker([this.lat,this.lng])
    //   .addTo(this.pinmap)
    //   .bindPopup("You are here.")
    //   .openPopup();
    // // },
      
    // },

  },
  methods: {
    
   
  },
  mounted() {

    const apiKey = "AAPK0dd1d65fb2a34b41ad58703e8f37d40fkEzxdoz7TacwizBI0Jciscgve5tcC4fx8UwzuiHTHou9xp5t7iIesioyFtHM6mw8";

    const basemapEnum = "ArcGIS:Navigation";

    const map = L.map("map", {
      minZoom: 2

    }).setView([48.8566,2.3522], 13);  // Paris

    L.esri.Vector.vectorBasemapLayer(basemapEnum, {
      apiKey: apiKey
    }).addTo(map);


    const geocoder = L.esri.Geocoding.geocodeService({
      apikey: apiKey
    });

    const layerGroup = L.layerGroup().addTo(map);

    map.on("click", function (e) {
      geocoder.reverse().latlng(e.latlng).run(function (error, result) {
        if (error) {
          return;
        }

        const lngLatString = `${Math.round(result.latlng.lng * 100000)/100000}, ${Math.round(result.latlng.lat * 100000)/100000}`;

        layerGroup.clearLayers();
        marker = L.marker(result.latlng)
          .addTo(layerGroup)
          .bindPopup(`<b>${lngLatString}</b><p>${result.address.Match_addr}</p>`)
          .openPopup();
      });
    });
 
  },
  
  onBeforeUnmount() {
    if (this.pinmap) {
      this.pinmap.remove();
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