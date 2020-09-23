# G2Weather

G2Weather is a single-page web application that allows users to check for current weather as well as weather forecast.


## How to use?

In the landing page there are two buttons.

* **Current Location**:
> If you click "Current Location", the browser will prompt you for permission to get your geo-coordinates, then several results will be shown for you to choose.

* **Search City**:
> If you click "Search City", then a search input field will appear and you can search whichever city you want, but please be specific, if there are too many search results, nothing will be shown and you will need to conduct a more specific search again.

After choosing one of the many results, another page containing current weather conditions and weather forecast will be shown.

If you wish to look for weather conditions of other cities, simply click the return button on the top left corner and start the enquiry again.


## Source

Open Weather (https://openweathermap.org/) is the source used to obtain weather information.


## Programming Languages, Framework and Libraries Used
* Programming Languages: Python, Javascript
* Framework: Django
* Libraries: React.js, react-expand-animated, Unidecode, Font Awesome


## Difficulties

There are 3 main difficulties experienced during the development.

* **City List**:
> The Open Weather API does not return the city name of the data requested. In order to show the city name, a backend was created to allow enquiries of city details based on geo-coordinates or cityname.  A list of cities containing city name and geocoordinates was downloaded from Open Weather and imported to the said backend developed using Python and Django. Since many city names have letters with accent, Unicode was used to remove accents during importation of data to the database.

* **Date Format**:
> Since the API from Open Weather returns timestamps in UNIX format, it was inevitable to convert it into formats that were presentable by this application. In light of the lack of ways in which these data could be converted, a reusable JavaScript programme named "dateFormat.js" was therefore created to cater for converting timestamps in UNIX format to various other representations.

* **Temperature Measurements**:
> Since the API from Open Weather returns temperature in Kelvin Scale, and this application was intended to show temperature in Celcius Scale, a reusable JavaScript programme named "tempConverter.js" was written to cater for this purpose. This programme is able to convert temperature from and to any of the three temperature scales ("Kelvin", "Celcius" and "Fahrenheit").


## Responsive Design:

This application can be viewed on both laptop and mobile devices.
