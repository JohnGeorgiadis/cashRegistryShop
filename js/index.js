// Initialize and add the map
function initMap() {
  // The location of Zywiec
  var zywiec = { lat: 49.681629, lng: 19.183100 };
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), { zoom: 14, center: zywiec });
  // The marker, positioned at zywiec
  var marker = new google.maps.Marker({ position: zywiec, map: map });
}
