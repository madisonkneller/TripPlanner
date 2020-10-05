console.log('Anything!!!')

import makeMarker from "/marker.js";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoibGItYmIiLCJhIjoiY2tmd3Fta3g5MGV1ejJzcXFseWRyd3N4aiJ9.jntQ17xa1doFJarZ3fMCQQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const marker = document.createElement('div');
// marker.style.width = "32px";
// marker.style.height = "39px";
// marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]).addTo(map);
