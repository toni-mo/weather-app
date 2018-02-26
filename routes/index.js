var express = require('express');
var router = express.Router();
var request = require("request");

/* GET home page. */
router.get('/', function(req, res) {


  res.render('index', { title: 'Weather App' });
});

// Listening to request that checks if session is created
router.get('/issession', function(req, res){

	// if there are citi names in the session returning those names
	if(req.session.cities)
		res.send(req.session.cities);

});

module.exports = router;
