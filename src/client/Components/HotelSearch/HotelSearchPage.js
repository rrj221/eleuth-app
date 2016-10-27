import React, {Component} from 'react';

import "./Accommodations.css";

export default class HotelSearchPage extends Component {

	constructor(props, context) {
		super(props, context);

		// set initial state
		this.state = {
			destination: '',
			checkin: '',
			checkout: '',
			guests: 1,
			rooms: 1
		};
	}

	handleChange(event) {
		console.log('change');
    	let newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log('submit');
		// console.log(this.state);
		// console.log(this.state.country);
		this.props.searchHotels(this.state);
	}

  render() {
    return (

    <div className="body-hotel">

		<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>

		<script src="https://cdn.jsdelivr.net/momentjs/2.15.1/moment-with-locales.min.js"></script>

		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />

		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous" />

		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

		<link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />

		<link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet" />

		<title>Accommodations Search</title>

	  	<div className="container">
		  <ul className="nav nav-tabs">
		    <li className="active"><a data-toggle="tab" href="#home">Accommodations</a></li>
		    <li><a data-toggle="tab" href="#search">Flights</a></li>
		  </ul>
		  <div className="tab-content">
		   	<div id="home" className="tab-pane fade in active">
		      	<h3>Search Accommodations</h3>
		      	<br/>
			  	 <form onSubmit={this.handleSubmit.bind(this)}>
				  <div className="form-group">
				    <label>Going To</label>
				    <input type="string" className="form-control" id='destination' onChange={this.handleChange.bind(this)} placeholder="Destination"/>
				  </div>
				  <div className="row">
				  	<div className="col-md-6 col-xs-12">
					  <div className="form-group">
					    <label>Check In</label>
					    <input type="date" id='checkin' onChange={this.handleChange.bind(this)} className="form-control"/>
					  </div>
					</div>
					<div className="col-md-6 col-xs-12">
						<div className="form-group">
					    <label>Check Out</label>
					    <input type="date" id='checkout' onChange={this.handleChange.bind(this)} className="form-control"/>
					</div>
				  </div>
				  </div>
				  <button type="submit" className="btn btn-default">Search</button>
				</form>
			</div>
		</div>
</div>


</div>

    )
  }
}



