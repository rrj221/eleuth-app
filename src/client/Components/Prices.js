import React, {Component} from 'react';
import Price from './Price';

import styled from 'styled-components';
import "./Results/Results.css";


const Wrapper = styled.h5`
    width: 300px;
    height: 300px;
    overflow: auto;
    color: black;
`;

export default class Prices extends Component {
  render() {
  	const { prices } = this.props;
  	console.log(prices);
    return (
    <div className="options">
    Options
  <div>
		<ul className='list-group-item'>
		  {
			prices.map((agent) =>
			  <Price
				agentName={agent.agentName}
				price={agent.price}
				image={agent.image}
				link={agent.link}
			  />
			)
		  }
		</ul>
      </div>
       </div>
    )
  }
}

  	