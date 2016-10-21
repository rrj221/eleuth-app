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
        <ul>
          <Wrapper>
        	<li>Destination Station: {this.props.DestinationStation}</li>
        	<li>Departure: {this.props.Arrival}</li>
        	<li>Arrival: {this.props.arrival}</li>
        	<li>Carrier Name: {this.props.carrierStuff[0].name}</li>
        	<img src={this.props.carrierStuff[0].imgUrl}/>
        	<li>Duration: {this.props.duration}</li>
        	<li>Origin Station: {this.props.originStation}</li>
        	<li>Stops: {this.props.stopsQty}</li>
          </Wrapper>
        </ul>

      </div>
    </div>

    )
  }
}