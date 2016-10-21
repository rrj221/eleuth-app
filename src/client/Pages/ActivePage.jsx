import React, { Component } from 'react';
import TodoItemList from '../Components/TodoItemList';

class ActivePage extends Component {

	render() {
		const { items, toggleCompleted } = this.props;

		const activeItems = items.filter((item) => !item.isCompleted);

		return (
			<div>
				<h1>Active Page</h1>
				<TodoItemList
				  items={activeItems} // pass down just active ones
				  toggleCompleted={toggleCompleted} // pass Application's toggleCompleted as-is!
			  />
			</div>
		);

	}
}

export default ActivePage;