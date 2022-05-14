# leaflet-challenge: Visualizing Data with Leaflet
## Background 
USGS - United States Geological Survey responsible is provinding scientific data about natural hazards, ecosystem and envrionmental health, climate impact, and land-use changes.
Their scientist are responsible for the development of new tools to provide geological information.
As a new hire, you are tasked with building a new tool to visualize a massive amount of existing earthquke data. 
## Data Source
The data was sourced from USGS GeoJSON Feed
[USGS All Earthquakes Past 7 Days](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)

## API
API from [MapBox](https://www.mapbox.com/)

![geojson Data Image](https://github.com/cc-christin/leaflet-challenge/blob/main/Images/MyJSON.png)

## Technology Used
* JavaScript
* HTML
* GeoJSON
* Leaflet

## Task 
Earthquake data visualizion 

#### 1 Fetch Data
Pulled data set from USGS GeoJSON Feed for 'All Earthquakes Past 7 Days' [url](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)

#### 2 Import & Visualize Data
Used Leaflet to create map, plotting all earthquakes from data set based on longitude and latitude 

![Basic Leaflet Map](https://github.com/cc-christin/leaflet-challenge/blob/main/Images/MyBasicMap.png)

Data markers were made to reflect magnitude of earthquake via size and depth via color
* Earthquake with higher magnitudes are larger in size
* Earthquake with larger depths are darker in color
* PopUp provide more context for each feature 

![PopUps](https://github.com/cc-christin/leaflet-challenge/blob/main/Images/MyPopUps.png)

