import React, { Component } from 'react';
// import TodoItemList from '../Components/ToDoStuff/TodoItemList';

import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : '#dfdff6'};
  border: 2px solid #dfdff6;
  border-radius: 3px;
  margin: 4em;
`;

const Wrapper = styled.h1`
color: white;
`;

class IndexPage extends Component {

	render() {
		// const { items, toggleCompleted } = this.props;

		return (
			<div className="indexPageBackground">

<div className="container">
        <div className="rowIndex">
            <br/>
            <ul>
                <div id="welcome"><h1>Eleuth Travel</h1></div>
                <a className="btn btn-primary btn-outline btn-lg" href="#search">Flights</a>
                <a className="btn btn-primary btn-outline btn-lg" href="#hotelSearch">Accomodations</a>
            </ul>
        </div>
    </div>
</div>
			
		);

	}
}

export default IndexPage;

// 				const Button = styled.button`
//   /* Adapt the colors based on primary prop */
//   background: ${props => props.primary ? 'palevioletred' : 'white'};
//   color: ${props => props.primary ? 'white' : '#dfdff6'};

//   font-size: 1em;
//   margin: 4em;
//   padding: 2em 7em;
//   border: 2px solid #dfdff6;
//   border-radius: 3px;
//   positon: absolute;
// `;