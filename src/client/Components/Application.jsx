
import React, { Component, cloneElement } from 'react';
import NewTodoItem from './NewTodoItem';
import { Router } from 'react-router';
import "./Application.css";

class Application extends Component {

	constructor(props, context) {
		// whenever you overwrite React Component's constructor method, you must
	  // call super() so it will instantiate the Component class it inherits
	  // from
		super(props, context);

		// set initial state
		this.state = {
			items: [],
			flights: [],
			twitter: []
		};
	}
	componentWillMount() {
		fetch('/api/items')
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					items: json
				});
			})
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
	addNewItem(text) {
		const { items } = this.state;

		const newItem = {
			text // ES6 shorthand for `text: text`
		};

		fetch('/api/items', {
			method: 'POST',
			body: JSON.stringify(newItem),
			headers: {
				'content-type': 'application/json'
			}
		}).then((response) => response.json())
			.then((json) => {
				this.setState({
					items: items.concat(json)
				});
			});
	}

	toggleCompleted(itemId) {
		const { items } = this.state;

		// find the first item in our state which has the ID we're looking for (itemId)
		const item = items.find((item) => item._id === itemId);

		// if we found an item w/ that id, we toggle its `isCompleted` property
		if (item) {
			item.isCompleted = !item.isCompleted;

			fetch(`/api/items/${item._id}`, {
				method: 'PUT',
				body: JSON.stringify(item),
				headers: { 'content-type': 'application/json' }
			}).then((response) => response.json())
				.then((json) => {
					// then we update our state with the updated items array. note that
					// `item` has the item by reference, meaning that when we changed its
					// isCompleted property, the array `items` was updated as well
					this.setState({
						items: items
					});
				});
		}
	}

	searchFlights(searchObj) {
		console.log('begin search now');
		console.log(searchObj);

		fetch('/api/skySearch', {
			method: 'POST',
			body: JSON.stringify(searchObj),
			headers: { 'content-type': 'application/json' }
		}).then((response) => response.json())
				.then((json) => {
					console.log(json)
					this.setState({
						flights: json.flights,
						twitter: json.twitter
					});
				});
	}

	componentDidUpdate(prevProps, prevStates) {
		if (prevStates.flights !== this.state.flights) {
			console.log('whats up');
			this.context.router.push('/sky');
		}
	}

	render() {
		return (
		<div className="Application">
			      <div id='universalPage'>
	      <head>

			<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>

			<script src="https://cdn.jsdelivr.net/momentjs/2.15.1/moment-with-locales.min.js"></script>

			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>

			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"/>

			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
			
			<link rel="stylesheet" type="text/css" href="/public/Application.css"/>

			<link rel="icon" type="image/png" src="styling/jumpingFrog.png" sizes="32x32" />

			<link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet"/>

			<title>Flights Search</title>
		  </head>
      		Master page in Application.jsx
			<nav className="navbar navbar-default">
		<div className="container-fluid">
	    	<div className="navbar-header">
	      		<a className="navbar-brand" href="#">Eleuth {"\n"}<small>Leap into the World</small></a>
	    	</div>
	    <div className="btn-group">
	    	<div className="dropdown">
				<button className="btn btn-default btn-md dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Profile <span class="caret"></span>
				</button>
				  <ul className="dropdown-menu">
				    <li><a href="#">Login</a></li>
				    <li><a href="#">Sign Up</a></li>
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
					  toggleCompleted: this.toggleCompleted.bind(this),
					  searchFlights: this.searchFlights.bind(this)
				  })
				}
					<footer> Eleuth Footer </footer>
			</div>
		</div>
		);

	}
}

export default Application;

