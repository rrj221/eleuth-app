
import React, { Component, cloneElement } from 'react';
import NewTodoItem from './NewTodoItem';
import { Router } from 'react-router';

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



				{
					cloneElement(this.props.children, {
					  items: this.state.items,
					  flights: this.state.flights,
					  twitter: this.state.twitter,
					  toggleCompleted: this.toggleCompleted.bind(this),
					  searchFlights: this.searchFlights.bind(this)
				  })
				}

			</div>
		);

	}
}

export default Application;