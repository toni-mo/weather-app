var express = require('express');
var router = express.Router();
var request = require("request");


// Base URL of the Weather API
URL_CHUNK = "http://api.openweathermap.org/data/2.5/weather";
//API Key for Weather API 
APPI_KEY = "c3177e4bab0290466b3aa472d34667d7"; 
// Combined full URL
url = "";


/* GET weather for the specified city. */
router.get('/:city', function(req, res, next) {

	// Combining the URL from it's base, city name as parameter and API KEY
	url = URL_CHUNK + "?q=" + req.params.city + "&APPID=" + APPI_KEY;

	
	// Adding names of the cities to the session object 
	if(req.session.cities){
		req.session.cities.push(req.params.city);
		console.log("Adding");
		console.log(req.session.cities);
	}

	// Making request to outer Weather API
	request.get(url, function(error, response, body){
		let json = JSON.parse(body);
		res.send(json);
	});


});

module.exports = router;