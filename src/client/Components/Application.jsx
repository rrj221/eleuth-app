
import React, { Component, cloneElement } from 'react';
 import NewTodoItem from './ToDoStuff/NewTodoItem';
import { Router } from 'react-router';
 import "./Application.css";

 import styled from 'styled-components';

// import passport from 'passport';
// import { Strategy as LocalStrategy } from 'passport-local';
// import LocalStrategy from 'passport-local'.Strategy;
// import models from '../../server/models';
// import {User} from '../../server/models/User.js'; 

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

class Application extends Component {

	constructor(props, context) {
		// whenever you overwrite React Component's constructor method, you must
	  // call super() so it will instantiate the Component class it inherits
	  // from
		super(props, context);

		// set initial state
		this.state = {
			flights: [],
			twitter: [],
			news: [],
			hotels: [],
			loggedIn: false,
			loggedInUser: {}
		};
	}

	  static get contextTypes() {
	    return {
	      router: React.PropTypes.object.isRequired,
	    };
	  }

	// creating a method which is responsible for updating our state with a new
	// item just like we did with `toggleCompleted`: we have to setup a way for
	// our child components to update OUR state. in `render` we pass it down
	// (bound to `this`) to a child component.
	// logIn(user) {

	// 	// let user = {
	// 	// 	user // ES6 shorthand for `text: text`
	// 	// };

	// 	this.setState({
	// 		loggedInUser: user,
	// 		loggedIn: true
	// 	});
	// }


	searchFlights(searchObj) {
		console.log('begin search now');
		console.log(searchObj);
		this.context.router.push('/loading');
		fetch('/api/skySearch', {
			method: 'POST',
			body: JSON.stringify(searchObj),
			headers: { 'content-type': 'application/json' }
		}).then((response) => response.json())
				.then((json) => {
					console.log(json)
					this.setState({
						flights: json.flights,
						twitter: json.twitter,
						news: json.news
					});
				});
	}

	searchHotels(searchObj) {
		console.log('begin hotel search');
		this.context.router.push('/loading');
		fetch('/api/hotelSearch', {
			method: 'POST',
			body: JSON.stringify(searchObj),
			headers: { 'content-type': 'application/json' }
		}).then((response) => response.json())
				.then((json) => {
					console.log(json)
					this.setState({
						hotels: json.hotels
					});
				});
	}

	componentDidUpdate(prevProps, prevStates) {
		if (prevStates.flights !== this.state.flights) {
			console.log('whats up');
			this.context.router.push('/sky');
		} else if (prevStates.hotels !== this.state.hotels) {
			this.context.router.push('/hotelResults');
		}
	}

	render() {
		return (

		<div className='Application'>
			    <div id='universalPage'>
			<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>

			<script src="https://cdn.jsdelivr.net/momentjs/2.15.1/moment-with-locales.min.js"></script>

			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>

			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"/>

			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

			<link rel="icon" type="eleuth.png" src="styling/jumpingFrog.png" sizes="32x32" />

			<link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet"/>

			<title>Flights Search</title>
			<nav className="navbar navbar-default">
		<div className="container-fluid">
	    	<div className="navbar-header">
	      		<div><a className="navbar-brand" img id="image" src="eleuth.png" alt="logo" href="#search"> <img id="image" src="eleuth.png" alt="logo"/></a></div>
	    	</div>
	    <div className="btn-group">
	    	<div className="dropdown">
				<button className="btn btn-default btn-md dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Profile <span class="caret"></span>
				</button>
				  <ul className="dropdown-menu">
				    <li><a href="#login">Login</a></li>
				    <li><a href="#register">Sign Up</a></li>
				  </ul>
				</div>
			</div>
	   </div>
  	</nav>			    
				{
					cloneElement(this.props.children, {
					  items: this.state.items,
					  flights: this.state.flights,
					  twitter: this.state.twitter,
					  news: this.state.news,
					  loggedIn: this.state.loggedIn,
					  loggedInUser: this.state.loggedInUser,
					  hotels: this.state.hotels,
					  searchFlights: this.searchFlights.bind(this),
					  searchHotels: this.searchHotels.bind(this),
					  // logIn: this.logIn.bind(this)
				  })
				}
					<footer> Eleuth Footer </footer>
			</div>
		</div>
		);

	}
}

export default Application;

