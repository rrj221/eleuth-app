//first request to get entityID, second and more to get resp obj
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 80;
var request = require('request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var destination = 
// getElementById('hotel-destination').value || 
'london', 
apikey = 'prtl6749387986743898559646983194', 
checkin = 
// document.getElementById('checkin').value || 
'2016-12-25', 
checkout = 
// document.getElementById('checkout').value || 
'2016-12-31', 
guests = 
// document.getElementById('guests').value || 
'1', 
rooms = 
// document.getElementById('rooms').value || 
'1',
entityID,
firstQueryUrl = 'http://partners.api.skyscanner.net/apiservices/hotels/autosuggest/v2/US/USD/en-us/' + destination + '?apikey=' + apikey,
secQueryUrl; 

app.get('/hotel', function(req, res) {
	
	request({url: firstQueryUrl, headers: {Accept: 'application/json'}}, function(error, response, data){
		entityID = JSON.parse(data).results[0].individual_id;
		console.log(entityID);
		secQueryUrl = 'http://partners.api.skyscanner.net/apiservices/hotels/liveprices/v2/US/USD/en-us/' + entityID + '/' + checkin + '/' + checkout + '/' + guests + '/' + rooms + '/?apiKey=' + apikey;
		request({url: secQueryUrl, headers: {Accept: 'application/json'}}, function(error, response, lodging){
			res.json(JSON.parse(lodging)
				//.hotels
			);
		});
	});
});

app.listen(PORT, function(){
	console.log('listening on', PORT);
});