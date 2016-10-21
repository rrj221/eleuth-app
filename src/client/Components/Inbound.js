import React, {Component} from 'react';

import styled from 'styled-components';

const Wrapper = styled.h5`
  font-size: 12px;
  text-align: center;
  color: black;
  background: #8CDD81;
  list-style: none;
`;

export default class Inbound extends Component {
  render() {
    return (
      <div className='inbound'>
      
        <h5>Inbound Info</h5>
        <ul>
        <Wrapper>
        	<li>Desitation Station: {this.props.DesitationStation}</li>
        	<li>Departure: {this.props.Arrival}</li>
        	<li>Arrival: {this.props.arrival}</li>
        	<li>Carrier Name: {this.props.carrierStuff[0].name}</li>
        	<img src={this.props.carrierStuff[0].imgUrl}/>
        	<li>Duration: {this.props.duration} minutes</li>
        	<li>Origin Station: {this.props.originStation}</li>
        	<li>Stops: {this.props.stopsQty}</li>
        </Wrapper>
        </ul>
      
      </div>
    )
  }
}