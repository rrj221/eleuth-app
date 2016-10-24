//first request to get entityID, second and more to get resp obj
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 80;
var unirest = require('unirest');

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
secQueryUrl,
hedOpt = {Accept: 'application/json'},
hotelIDs = [],
pollRep,
sessApi; 

app.get('/hotel', function(req, res) {
	unirest.get(firstQueryUrl).headers(hedOpt).end(function(auto){
		entityID = auto.body.results[0].individual_id;
		secQueryUrl = 'http://partners.api.skyscanner.net/apiservices/hotels/liveprices/v2/US/USD/en-us/' + entityID + '/' + checkin + '/' + checkout + '/' + guests + '/' + rooms + '/?apiKey=' + apikey;
		unirest.get(secQueryUrl)
		.headers(hedOpt)
		.end(function(session){
			unirest.get('http://partners.api.skyscanner.net' + session.headers.location)
			.headers(hedOpt)
			.end(function(poll){
				// console.log(poll.body.status);
				if (poll.body.status === 'PENDING'){
					do {
					console.log(poll.headers.location);
					unirest.get('http://partners.api.skyscanner.net' + poll.headers.location).headers(hedOpt).end(function(pRep){
						console.log('poop');
						console.log(pRep.body.status);
						if (pRep.body.status === 'COMPLETE'){
							pRep.body.hotels.forEach(function(hotel){
								hotelIDs.push(hotel.hotel_id);
							});
						}
						console.log(pRep);
						pollRep = pRep;
						console.log(pollRep);
						})
					} while (pollRep.body.status === 'PENDING');
					sessApi = pollRep.headers.location.split('/')[5];
				}
				else if (poll.body.status === 'COMPLETE'){
					poll.body.hotels.forEach(function(hotel){
						hotelIDs.push(hotel.hotel_id);
					});
					sessApi = poll.headers.location.split('/')[5];
				}
				hotelIDs = hotelIDs.join(',');
				console.log(hotelIDs);
				unirest.get('http://partners.api.skyscanner.net/apiservices/hotels/livedetails/v2/details/' + sessApi + '&hotelIds=' + hotelIDs).headers(hedOpt).end(function(det){
					if (det.body.status === 'PENDING'){
						
					}
				})
			});
		});
	});
});

app.listen(PORT, function(){
	console.log('listening on', PORT);
});