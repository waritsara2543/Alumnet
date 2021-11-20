import { createApp } from 'vue'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import App from "../App.vue"

const app = createApp(App)

app.component('l-map', LMap);
app.component('l-tile-layer', LTileLayer);
app.component('l-marker', LMarker);

createApp(App).mount('#app')

// import { createApp } from 'vue'
// import PopupWindow from './components/PopupWindow'
// import App from "./App.vue"

// const app = createApp(App)

// app.component('PopupWindow', PopupWindow) // global registration - can be used anywhere

// app.mount('#app')