mapboxgl.accessToken = 'pk.eyJ1IjoiZXVnZW5lMTUzIiwiYSI6ImNra2JkNDFtazFjdHYydmxuNzN0bDA3cDQifQ.c9DqzT6PAyU-RNt5LC8HhQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [165.973, -50.604167],
    zoom: 13
});

//search bar

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

// geolocation

var geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
});

map.addControl(geolocate);

geolocate.on('geolocate', function(position) {
    marker.setLngLat([position.coords.longitude, position.coords.latitude]);
    marker.remove();
    coordinates.style.display = 'none';
    let geolocator = document.getElementsByClassName('mapboxgl-ctrl-group');
    geolocator[0].addEventListener('click', () => {
        marker.addTo(map);
        onDragEnd();
        geolocator[0].removeEventListener('click', () => {});
    });
});

// navigation and rotation controls

map.addControl(new mapboxgl.NavigationControl());

// draggable mark

var coordinates = document.getElementById('coordinates');

var marker = new mapboxgl.Marker({
        draggable: true
    })
    .setLngLat([165.973, -50.604167])
    .addTo(map);

function onDragEnd() {
    var lngLat = marker.getLngLat();

    coordinates.style.display = 'block';
    coordinates.innerHTML =
        'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
}

marker.on('dragend', onDragEnd);