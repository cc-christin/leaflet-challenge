// leaflet-challenge - logic.js

// Earthquakes GeoJSON URL Variable
var queryURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// GET reequest to query URL
d3.json(queryURL).then(function (data) {
    createFeatures(data.features);
});



// Define Tile Layers Variable 
