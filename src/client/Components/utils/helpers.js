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
			outbounddate: '2016-10-24',
			inbounddate: '2016-10-31',
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
	}
}

module.exports = helpers;