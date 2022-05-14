// leaflet-challenge - logic.js

// Earthquakes GeoJSON URL Variable
// var queryURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Define Variable for Tile Layers  
var graymap = L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <a href='https://www.mapbox.com/map-feedback/' target='_blank'>Feedback</a>",
        tileSize: 500,
        maxZoom: 18, 
        zoomOffset: -1,
        id: "mapbox/light-v10",
        accessToken: API_KEY
    }
    
);

// Create Map Objects
var map = L.map("map", {
    center: [54.52, 105.25], 
    zoom: 3
});

// Adding gray scale tile layer to map
graymap.addTo(map);

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
        case depth > 90:
            return "#4d1858";
        case depth > 70:
            return "#8d2da1";
        case depth > 50:
            return "#c000c7";
        case depth > 30:
            return "#ff5f33";
        case depth > 10:
            return "#ffc400";
        default: 
            return "#f2f7a6";
        }
    }

    // if magnitude radius
    function chooseRadius(magnitude) {
        if (magnitude === 0) {
            return 1;
        }
        return magnitude * 4;
    }

    // adding GeoJSON Layer to Map
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            return L.circleMarker(latlng);
        },
        // set style using styleInfo()
        style: styleInfo,
        // bind Popup for each reature in features array to describe magnitude and location of earthquake
        onEachFeature: function(feature, layer) {
            layer.bindPopup(
                "<h4> Location: " 
                + feature.properties.place 
                + "</h4><hr><p> Date & Time: " 
                + new Date(feature.properties.time)
                + "</p><hr><p> Magnitude: "
                + feature.properties.mag 
                + "<p>");
        }

    // add to map
    }).addTo(map);

    // Creating Legend 
    var legend = L.control({position: "bottomright"});

    legend.onAdd = function() {
        var div = L.DomUtil.create("div", "info legend"),
        magnitudeGrades = [-10, 10, 30, 50, 70, 90];

        // loop through mag color
        div.innerHTML += "<h4>Color Scaled by Magnitude</h4>"

        for (var i = 0; i < magnitudeGrades.length; i++) {
            div.innerHTML +=
                '<i style="background: ' 
                + chooseColor(magnitudeGrades[i] + 1) 
                + ' "></i>'
                + magnitudeGrades[i] 
                + (magnitudeGrades[i +1] ? '&ndash;'
                + magnitudeGrades[i + 1] 
                + '<br>' : '+');
        }
        return div;
};

// place legned on map
legend.addTo(map); 
});
