
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const helpers = require('../client/Components/utils/helpers.js');


// implementing the css package styled - components 
const styled = require('styled-components');

const app = express();

const PORT = process.env.PORT || 3000;

// this link said to run this to solve an issue.. https://github.com/Automattic/mongoose/issues/4291
 mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/tododb');

const { connection } = mongoose;

connection.on('error', (err) => {
	console.error(err);
});

connection.once('open', () => {
	console.log('Connection to mongo db successful');
});


app.use(express.static('public'));
app.use(express.static('dist'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../../index.html'));
});


app.post('/api/skySearch', (req, res) => {
	console.log('i would like to post');
	console.log(req.body);
	helpers.sampleFunction();
	helpers.skyScannerFlightSearch(req.body, function (stuff) {
		res.json(stuff);
	});
});

app.post('/api/hotelSearch', (req, res) => {
	console.log('hotel search has been posted i think');
	helpers.hotelSearch(req.body, function (stuff) {
		res.json(stuff);
	});
});



app.listen(PORT, () => {
	console.log(`Server is now listening on ${PORT}`);
});