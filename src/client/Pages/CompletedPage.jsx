import React, { Component } from 'react';
import TodoItemList from '../Components/TodoItemList';

class CompletedPage extends Component {

	render() {
		const { items, toggleCompleted } = this.props; // const items = this.props.items

		// filter our props.items (which Application passed to us) to include all
		// items that were completed
		const completedItems = items.filter((item) => item.isCompleted);

		return (
			<div>
				<h1>Completed Page</h1>
				<TodoItemList
				  items={completedItems} // pass down just the completed items!
				  toggleCompleted={toggleCompleted} // pass Application's toggleCompleted as-is!
			  />
			</div>
		);

	}
}

export default CompletedPage;
