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
        <div>
        <Wrapper>
        	<div>Desitation Station: {this.props.Destinationstation}</div>
        	<div>Departure: {this.props.departure}</div>
        	<div>Arrival: {this.props.arrival}</div>
        	<div>Carrier Name: {this.props.carrierStuff[0].name}</div>
        	<img src={this.props.carrierStuff[0].imgUrl}/>
        	<div>Duration: {this.props.duration} minutes</div>
        	<div>Origin Station: {this.props.originStation}</div>
        	<div>Stops: {this.props.stopsQty}</div>
        </Wrapper>
        </div>
      
      </div>
    )
  }
}