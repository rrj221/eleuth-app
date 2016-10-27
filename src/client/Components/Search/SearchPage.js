import React, {Component} from 'react';

import "./Search.css";

export default class SearchPage extends Component {

	constructor(props, context) {
		super(props, context);

		// set initial state
		this.state = {
			country: '',
			currency: '',
			locale: '',
			originPlace: '',
			destinationPlace: '',
			outbounddate: '',
			inbounddate: ''	
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
		console.log(this.state);
		console.log(this.state.country);
		this.props.searchFlights(this.state);
	}

  render() {
    return (
      <div id='SearchPage'>
				<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>

				<script src="https://cdn.jsdelivr.net/momentjs/2.15.1/moment-with-locales.min.js"></script>

				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>

				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"/>

				<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous" />

				<link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet"/>

		  	<div className="container">
			  <ul className="nav nav-tabs">
			    <li className="active"><a data-toggle="tab" href="#search">Flights</a></li>
			    <li><a data-toggle="tab" href="#hotelSearch">Accommodations</a></li>
			  </ul>
			  <div className="tab-content">
			    <div id="home" className="tab-pane fade in active">
			      <h3>Search Flights</h3>
			      <br/>
			      	<form className="flights" onSubmit={this.handleSubmit.bind(this)}>
					  <div className="form-group">
					  	<div className="row">
					  		<div className="col-md-3">
					  			<input type="radio" name="oneAnswer"/> One Way
					  		</div>
					  		<div className="col-md-3">
					  			<input type="radio" name="oneAnswer"/> Roundtrip
					  		</div>
					  		<div className="col-md-3">
					  			<input type="radio" name="oneAnswer"/> Multi City
					  		</div>
					  	</div>
					  </div>
					  	<br/>
			<div className="row">
			 	<div className="col-md-6 col-xs-12">
					  <div className="form-group">
					    <label>From</label>
					    <input type="string" className="form-control" id="originPlace" onChange={this.handleChange.bind(this)} placeholder="Airport Name"/>
					  </div>
				</div>
				<div className="col-md-6 col-xs-12">
					  <div className="form-group">
					    <label>To</label>
					    <input type="string" className="form-control" id="destinationPlace" onChange={this.handleChange.bind(this)} placeholder="Airport Name"/>
					  </div>
				</div>
			</div>
		<div className="row">
			 	<div className="col-md-6 col-xs-12">
					  <div className="form-group">
					    <label>Outbound Date</label>
					    <input type="string" className="form-control" id="outbounddate" onChange={this.handleChange.bind(this)} placeholder="YYYY-MM-DD"/>
					  </div>
				</div>
				<div className="col-md-6 col-xs-12">
					  <div className="form-group">
					    <label>Inbound Date</label>
					    <input type="string" className="form-control" id="inbounddate" onChange={this.handleChange.bind(this)} placeholder="YYYY-MM-DD"/>
					  </div>
				</div>
			</div>
		<div className="row">
			  	<div className="col-md-4 col-xs-12">
					  <div className="form-group">
					    <label>Country</label>
					    <input type="string" className="form-control" id="country" onChange={this.handleChange.bind(this)} placeholder="US"/>
					  </div>
					 </div>
					<div className="col-md-4 col-xs-12">
					  <div className="form-group">
					    <label>Currency</label>
					    <input type="string" className="form-control" id="currency" onChange={this.handleChange.bind(this)} placeholder="USD"/>
					  </div>
					</div>
				<div className="col-md-4 col-xs-12">
					  <div className="form-group">
					    <label>Locale</label>
					    <input type="string" id="locale" onChange={this.handleChange.bind(this)} className="form-control"/>
					  </div>
				</div>
		</div>
			<div className="row">
			  	<div className="col-md-4 col-xs-12">
						    <div className="form-group">
						      <label for="sel1">Adults (age 12+):</label>
						      <select className="form-control" id="sel1">
						        <option>1</option>
						        <option>2</option>
						        <option>3</option>
						        <option>4</option>
						      </select>
						      <br/>
						    </div>
						  </div>
						
						<div className="col-md-4 col-xs-12">
						    <div className="form-group">
						      <label for="sel1">Children (ages 2-12):</label>
						      <select className="form-control" id="sel1">
						        <option>1</option>
						        <option>2</option>
						        <option>3</option>
						        <option>4</option>
						      </select>
						      <br/>
						    </div>
						   </div>
						
						<div className="col-md-4 col-xs-12">
						    <div className="form-group">
						      <label for="sel1">Infants (ages 0-2):</label>
						      <select className="form-control" id="sel1">
						        <option>1</option>
						        <option>2</option>
						        <option>3</option>
						        <option>4</option>
						      </select>
						      <br/>
						    </div>
						   </div>
						  </div>
						  
						   <button type="submit" className="btn btn-default">Check Availability</button>
					</form>
				</div>
			   	<div id="menu1" className="tab-pane fade">
			      	<h3>Search Accommodations</h3>
				  	 <form>
					  <div className="form-group">
					    <label>Going To</label>
					    <input type="string" className="form-control"/>
					  </div>
					  <div className="form-group">
					    <label>Check In</label>
					    <input type="date" className="form-control"/>
					  </div>
					  <div className="form-group">
					    <label>Check Out</label>
					    <input type="date" className="form-control"/>
					  </div>
					  <button type="submit" className="btn btn-default">Search</button>
					</form>
				</div>
				<div id="menu2" className="tab-pane fade">
			    	<h3>Search Things To Do</h3>
			    	<form>
					  <div className="form-group accomm">
					    <label>Destination</label>
					    <input type="string" className="form-control" placeholder="Destination"/>
					  </div>
					  <div className="form-group">
					    <label>From</label>
					    <input type="date" className="form-control"/>
					  </div>
					  <div className="form-group">
					    <label>To</label>
					    <input type="date" className="form-control"/>
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
