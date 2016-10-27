
import React, { Component, cloneElement } from 'react';
 import NewTodoItem from './ToDoStuff/NewTodoItem';
import { Router } from 'react-router';
import "./Application.css";

 // import styled from 'styled-components';

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

<link rel="icon" type="eleuth.png" src="styling/jumpingFrog.png" sizes="32x32" />
			
<link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet"/>

			<title>Flights Search</title>
			<nav className="navbar navbar-default">
		<div className="container-fluid">
	    	<div className="navbar-header">
	      		<div><a className="navbar-brand" img id="image" src="eleuth.png" alt="logo" href="#search"> <img id="image" src="eleuth.png" alt="logo"/></a></div>
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

			<footer className="footer">
			      <div className="footerBox">
			        		<p className="text-muted">Eleuth</p>
			      </div>
			</footer>
		</div>
	</div>
		);

	}
}

export default Application;



