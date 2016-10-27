const request = require('request');
const axios = require('axios');
const unirest = require('unirest');
const Twitter = require('twitter');


const helpers = {
	sampleFunction() {
		console.log('function is legit');
	},
	skyScannerFlightSearch(searchObj, callback) {
		console.log('about to post');
		var sampleSearch = {
			country: 'UK',
			currency: 'GBP',
			locale: 'en-GB',
			OriginPlace: 'EDI',
			DestinationPlace: 'LHR',
			outbounddate: '2016-10-31',
			inbounddate: '2016-11-10',
			locationschema: 'iata'
		};
		searchObj['locationschema'] = 'iata';
		console.log(searchObj);
		unirest.post('http://partners.api.skyscanner.net/apiservices/pricing/v1.0?apikey=prtl6749387986743898559646983194')
			.headers({
				'Content-Type': 'application/x-www-form-urlencoded',
				Accept: 'application/json'
			}).send(sampleSearch).end(function (response) {
				console.log(response.headers);
				console.log(response.headers.location);
				var getURL = response.headers.location+'?apikey=ry909076184123727230483951889231';
				console.log(getURL);
				setTimeout(function () {
					unirest.get(getURL).end(function (response) {
						console.log('made the request');
						var display = [];

						if (!response.body) {
							console.log('no body');
							return helpers.skyScannerFlightSearch(searchObj, callback)
						}

						for (var i = 0; i < 5; i++) {
							var status = response.body.Status;
							var itineraries = response.body.Itineraries;
							var legs = response.body.Legs;
							var carriers = response.body.Carriers;
							var agents = response.body.Agents;
							var places = response.body.Places;
							var stuffs = [status, itineraries, legs, carriers, agents, places];

							var it0 = itineraries[i];
							console.log(it0);

							//outbound
							var outboundId = it0.OutboundLegId;

							function getLegInfo(id) {
								for (leg of legs) {
									if (leg.Id === id) {
										console.log(id, leg.Id);
										console.log(leg);

										var originStationId = leg.OriginStation;
										var originStationName = '';
										places.forEach(function (place, i) {
											if (place.Id === originStationId) {
												originStationName = place.Name; 
											}
										});

										var destinationStationId = leg.DestinationStation;
										var desitinationStationName = '';
										places.forEach(function (place, i) {
											if (place.Id === destinationStationId) {
												destinationStationName = place.Name; 
											}
										});

										var departure = leg.Departure;
										var arrival = leg.Arrival;
										var stopsQty = leg.Stops.length;
										var duration = leg.Duration;
										var journeyMode = leg.JourneyMode;

										var carrierIds = leg.Carriers;
										var carrierNames = [];
										carrierIds.forEach(function(carrierId, i) {
											carriers.forEach(function(carrier, i) {
												if (carrier.Id === carrierId) {
													var carrierStuff = {
														name: carrier.Name,
														imgUrl: carrier.ImageUrl
													}
													carrierNames.push(carrierStuff);
												}
											});
										});
									}
								}

								var legInfo = {
									originStation: originStationName,
									destinationStation: destinationStationName,
									departure: departure,
									arrival: arrival,
									stopsQty: stopsQty,
									duration: duration,
									journeyMode: journeyMode,
									carrierNames: carrierNames
								}

								return legInfo

							}





							//inbound
							var inboundInfo = {};

							var inboundId = it0.InboundLegId;



							//pricing
							var options = it0.PricingOptions;
							var allOptions = [];

							options.forEach(function(option, i) {
								var price = option.Price;
								var agentId = option.Agents[0];
								var link = option.DeeplinkUrl
								agents.forEach(function(agent, i) {
									if (agent.Id === agentId) {
										var optionStuff = {
											agentName: agent.Name,
											price: price,
											image: agent.ImageUrl,
											link: link
										} 
										allOptions.push(optionStuff);
									}
								})
							})


							var outboundInfo = getLegInfo(outboundId);
							var inboundInfo = getLegInfo(inboundId);
							var priceInfo = allOptions;
							
							var flightInfo = {
								outboundInfo: outboundInfo,
								inboundInfo: inboundInfo,
								priceInfo: priceInfo
							};

							display.push(flightInfo);
						}

						console.log('---------------------------');
						console.log(typeof display);
						console.log(display[0]);

						// callback(display);
						helpers.twitterSearch(searchObj.country, display, callback);

					})
				}, 5000)
			});
	}, 

	twitterSearch(country, display, callback) {
		console.log('country');
		console.log(country);
		var client = new Twitter({
	  		consumer_key: 'mfPgl2zeDBVNUYFWbwpoFv4T9',
	  		consumer_secret: 'mdpfKV11FAnZPhwJz2z0QQXqThTGd7zgBUZzQ4skZRgDAEjnto',
	  		access_token_key: '57149153-Jq3ShuGfzfBlGEILfy7oXHgginj29yCvLtgzVaoSu',
	  		access_token_secret: 'GrPZGIp8e5Jya08fdudovsnOdqsnzqdY0G7zzINg4pra0',
		});

		var jcWOEID = '2429187';
		//for some reason i get an error if i use any WOEID other than 1
		client.get('https://api.twitter.com/1.1/trends/place.json', {id: 1}, function (error, trends, response) {
			if (error) {
				console.log(error)
				res.json({ error: error })
			} else {
				console.log('no error')
				// res.json(JSON.parse(response.body));
				
				console.log(trends[0].trends);
				var trendsArray = trends[0].trends;

				//send first 10 trending topics
				if (trendsArray.length > 10) {
					console.log(trendsArray.slice(0, 10));
					trendsArray = trendsArray.slice(0, 10);
					// callback({
					// 	twitter: trendsArray,
					// 	flights: display
					// });
					var newDisplay = {
						twitter: trendsArray,
						flights: display
					}
					helpers.newsSearch(country, newDisplay, callback);
				} else {
					console.log(trendsArray);
					var newDisplay = {
						twitter: trendsArray,
						flights: display
					}
					helpers.newsSearch(country, newDisplay, callback);
					// callback({
					// 	twitter: trendsArray,
					// 	flights: display
					// });
				} 
			}
		});
	},

	newsSearch(country, display, callback) {
		console.log(country);
		console.log(display);
		//search for news in US
		var country = 'US'
		var URL = "https://webhose.io/search?token=62bbc47b-2985-4449-ae34-54b112e8108c&format=json&q=thread.country%3A"+country+"%20performance_score%3A%3E5%20(site_type%3Anews)";
		unirest.get(URL)
		.header("Accept", "text/plain")
		.end(function (result) {
			var data = result.body;
			var toClient = []
			for (var i = 0; i < 10; i++) {
				toClient.push({
					title: data.posts[i].title,
					url: data.posts[i].url,
					publishedDate: data.posts[i].published,
					text: data.posts[i].text
				});
			}
			console.log('ayayayaya')
			display['news'] = toClient;
			console.log(display);
			callback(display);
		    // res.json({ data: toClient });
		});
	},

	hotelSearch(searchObj, callback) {
		console.log(searchObj);

		function secondRequest(secQueryUrl) {
			request({url: secQueryUrl, headers: {Accept: 'application/json'}}, function(error, response, lodging){
				var lodgingObj = JSON.parse(lodging);
				if (lodgingObj.status !== 'COMPLETE') {
					setTimeout(function () {
						secondRequest(secQueryUrl);
					});
				} else {
					// res.json(lodgingObj);
					detailsRequest(lodgingObj, lodgingObj.hotels, lodgingObj.urls.hotel_details);
				}
			});
		}

		function detailsRequest (lodging, hotels, url) {
			var hotelIds = getHotelIds(hotels).join(',');
			// console.log(url);
			// console.log(hotelIds);

			var queryUrl = 'http://partners.api.skyscanner.net'+url+'&hotelIds='+hotelIds;
			// console.log(queryUrl);

			request({url: queryUrl, headers: {Accept: 'application/json'}}, function (err, results, details) {
				// console.log(err);
				// console.log(results);
				var detailsObj = JSON.parse(details);

				giveStuffToClient(lodging, detailsObj, hotels);
				// res.json(lodging);
				
			})		
		}

		function giveStuffToClient(lodging, details, hotels) {
			var agentsInfo = details.agents;
			var hotelsShort = getShortArray(hotels, 5);
			var toClient = [];
			var amenitiesAll = [];
			var hotelBasics = [];
				// address
				// stars
				// popularity
				// amenities
			hotelsShort.forEach(function (hotel, i) {
				var hotelInfoObject = {};

				var hotelBasicsOne = {};
				var amenitiesSingle = [];

				var hotelId = hotel.hotel_id;
				var name = hotel.name;
				var address = hotel.address;
				var stars = hotel.star_rating;
				var popularity = hotel.popularity;
				var amenityIds = getShortArray(hotel.amenities, 10);
				console.log(amenityIds);
				// res.json({
				// 	amenities: lodging.amenities
				// });
				amenityIds.forEach(function(id, i) {
					console.log(getAmenityName(id, lodging.amenities));

					amenitiesSingle.push(getAmenityName(id, lodging.amenities));

					console.log(amenitiesSingle);

					// console.log(amenities);
				});

				hotelBasicsOne = {
					id: hotelId,
					name: name,
					address: address,
					stars: stars,
					popularity: popularity,
					amenities: amenitiesSingle
				}


				// links
				var detailsArray = [];
				details.hotels_prices.forEach(function (priceInfo, i) {
					if (priceInfo.id === hotelId) {
						console.log('yaya');
						console.log(priceInfo.id);
						var agents = getShortArray(priceInfo.agent_prices, 5);
						agents.forEach(function (agent, i) {


							agentsInfo.forEach(function (agent2, i) {
								if (agent2.id === agent.id) {
									console.log(agent);
									var nightlyRate = agent.price_per_room_night;
									console.log(nightlyRate);
									var totalRate = agent.price_total;
									var bookingUrl = agent.booking_deeplink;
									console.log(agent.id);
									console.log(agent2.name);
									var agentName = agent2.name;
									var image_url = agent2.image_url;


									var detailObj = {
										name: agentName,
										image_url: image_url,
										nightlyRate: nightlyRate,
										totalRate: totalRate,
										bookingUrl: bookingUrl
									}

									detailsArray.push(detailObj);
								}
							})
						})
					}

				});


				hotelInfoObject = {
					hotelBasicInfo: hotelBasicsOne,
					details: detailsArray
				}

				toClient.push(hotelInfoObject);
			});
				
			// res.json({hotel: details, lodging: lodging});
			// res.json({hotels: toClient});
			callback({hotels: toClient});
		}

		function getAmenityName(id, amenityDetails) {
			// console.log('lk;asdfnvkcznxl;kajs');
			// console.log(amenityDetails[0].id);
			var amenityName = '';
			amenityDetails.forEach(function (amenityObj, i) {
				if (amenityObj.id === id) {
					amenityName = amenityObj.name;
				}
			})
			return amenityName;
		}

		function getHotelIds(hotels) {
			var hotelIds = [];
			if (hotels.length < 5) {
				var j = hotels.length;
			} else {
				var j = 5;
			}

			for (var i = 0; i < j; i++) {
				hotelIds.push(hotels[i].hotel_id);
			}

			return hotelIds;
		}

		function getShortArray(array, n) {
			if (array.length < n) {
				return array;
			} else {
				return array.slice(0, n);
			}
		}


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

		request({url: firstQueryUrl, headers: {Accept: 'application/json'}}, function(error, response, data){
			entityID = JSON.parse(data).results[0].individual_id;
			console.log(entityID);
			secQueryUrl = 'http://partners.api.skyscanner.net/apiservices/hotels/liveprices/v2/US/USD/en-us/' + entityID + '/' + checkin + '/' + checkout + '/' + guests + '/' + rooms + '/?apiKey=' + apikey;
			secondRequest(secQueryUrl);
		});
	}
}

module.exports = helpers;