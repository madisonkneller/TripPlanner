
marker.style.width = "32px";
marker.style.height = "39px";
marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
export const makeMarker = function (activity, coord) {
  const marker = document.createElement('div');
   new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]).addTo(map);
}

