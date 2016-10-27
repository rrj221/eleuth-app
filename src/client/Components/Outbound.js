import React, {Component} from 'react';

import styled from 'styled-components';

const Wrapper = styled.section`
  background: #9783c8;
  text-align: center;
  font-size: 12px;
  color: black;
  list-style: none;
`;

const Title = styled.h5`
  font-size: 12px;
  text-align: center;
  color: black;
  background: #9783c8;
`;

export default class Outbound extends Component {
  render() {
    return (
    <div>
      <div className='outbound'>
        <h5> Outbound Info</h5>
        <div>
          <Wrapper>
        	<div>Destination Station: {this.props.Destinationstation}</div>
        	<div>Departure: {this.props.departure}</div>
        	<div>Arrival: {this.props.arrival}</div>
        	<div>Carrier Name: {this.props.carrierStuff[0].name}</div>
        	<img src={this.props.carrierStuff[0].imgUrl}/>
        	<div>Duration: {this.props.duration}</div>
        	<div>Origin Station: {this.props.originStation}</div>
        	<div>Stops: {this.props.stopsQty}</div>
          </Wrapper>
        </div>

      </div>
    </div>

    )
  }
}