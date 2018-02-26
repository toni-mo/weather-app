$(function(){

	// Contains value for Search input
	var search = "";
	// Contains weather objects related to the cities User previously inquired
	var cities_weather = [];


	// Function for converting temperature from Kalvin to Celcius
	function convertTemperature(kalvin){
		celcius = Number(kalvin) - 273.15;
		return celcius;
	}

	// Request that checks if the session is created and retrieves city names that user previously searched
	$.get("/issession", function(data, status){
		// Loop. Makes as many requests as there are city names stored in the session
		for(var i=0; i<data.length; i++){
			$.get("/weather/" + data[i], function(data, status){
				console.log("data: ", data);
				cities_weather.push(data);

				// Displaying returned weather data in the html
				$(".weather-content").append(
					"<div class='card weather-card border' style='display:inline-block; margin-right: 15px; margin-bottom: 20px; width: 15rem;'>"+
					"<img class='card-img-top' src='/images/weather.jpg' alt='Card image cap'>"+
					"<div class='city-name'>"+ data.name + "</div>"+
					"<div class='text-center'><strong> min.temp: " + convertTemperature(data.main.temp_min) + "</strong></div>"+
					"<div class='text-center'> <strong>max.temp: " + convertTemperature(data.main.temp_max) + "</strong></div>"+
					"<div class='text-center'>" + data.weather[0].description + "</div>" + 
					"</div>");

			});
		}

	});

	// Triggering search weather button
	$("#btn").click(function(){

		// Getting search value(city name)
		search = $("#search").val();

		// Making request to city weather endpoint where search is parameter(city name)
		$.get("/weather/"+search, function(data, status){


		// Displaying returned data
		$(".weather-content").append(
			"<div class='card weather-card border' style='display:inline-block; margin-right: 15px; width: 15rem;'>"+
				"<img class='card-img-top' src='/images/weather.jpg' alt='Card image cap'>"+
				"<div class='city-name'>"+ data.name + "</div>"+
				"<div class='text-center'> <strong>min.temp: " + convertTemperature(data.main.temp_min) + "</strong></div>"+
				"<div class='text-center'> <strong>max.temp: " + convertTemperature(data.main.temp_max) + "</strong></div>"+
				"<div class='text-center'>" + data.weather[0].description + "</div>" + 
			"</div>");
		});

	});


});