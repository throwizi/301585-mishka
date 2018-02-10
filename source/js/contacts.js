function initMap () {
  var element = document.getElementById("map");
  var options = {
      zoom: 17,
      center: {lat: 59.9387942, lng: 30.3230833}
  };

  var myMap = new google.maps.Map(element, options);

  var marker = new google.maps.Marker ({
    position: {lat: 59.9387942, lng: 30.3230833},
    map: myMap,
    icon: {url: "img/icon-map-pin.svg", scaledSize: new google.maps.Size(64, 64)}
  });
}
