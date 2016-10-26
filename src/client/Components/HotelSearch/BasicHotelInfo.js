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

export default class HotelBasicInfo extends Component {
  render() {
    return (
    <div>
      <div className='outbound'>
        <h5> Outbound Info</h5>
        <ul>
          <Wrapper>
          <li>Name: {this.props.name}</li>
          <li>Address: {this.props.address}</li>
          <li>Arrival: {this.props.arrival}</li>
          <li>Stars: {this.props.stars}</li>
          <li>Popularity: {this.props.popularity}%</li>
          <li>Amenities: {this.props.amenities}</li>
          </Wrapper>
        </ul>
      </div>
    </div>

    )
  }
}