// leaflet-challenge - logic.js

// Earthquakes GeoJSON URL Variable
// var queryURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Define Variable for Tile Layers  
var grayscaleMap = L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <a href='https://www.mapbox.com/map-feedback/' target='_blank'>Feedback</a>",
        maxZoom: 18, 
        zoomOffset: -1,
        id: "mapbox/light-v10",
        accessToken: API_KEY
    }
    
);

// Create Map Objects
var myMap = L.map("map", {
    center: [37.09, -95.71], 
    zoom: 3
});

// Adding gray scale tile layer to map
grayscaleMap.addTp(map);

// JSON Response Call
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    // retrive coordinates and magnitude from usgs
    // Calculate color and radius based on magnitude of earthquake
    function styleInfo(feature) {
        return {
            opacity: 1,
            fillOpacity: 1,
            fillColor: chooseColor(feature.geometry.coordinates[2]),
            color: "#000000",
            radius: chooseRadius(feature.properties.mag),
            stroke: true,
            weight: 0.5
        };
    }

    // Color marker basedd on mag
    function chooseColor(depth) {
        switch (true) {
        case magnitude > 5:
            return "#4d1858";
        case magnitude > 4:
            return "#8d2da1";
        case magnitude > 3:
            return "#c000c7";
        case magnitude > 2:
            return "#ff5f33";
        case magnitude > 1:
            return "#ffc400";
        default: 
            return "#f2f7a6";
        }
    }

    // adding GeoJSON Layer to Map
    





}) 

