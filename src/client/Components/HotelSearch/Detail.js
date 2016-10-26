import React, {Component} from 'react';

import styled from 'styled-components';

const Wrapper = styled.h5`
  font-size: 12px;
  text-align: center;
  color: black;
  background: #9783c8;
`;

export default class Detail extends Component {
  render() {
    return (
    <Wrapper>
      <div id='IndexPage'>
      	<div>
      		Name: {this.props.name}
      	</div>
      	<img src={this.props.image_url}/>
      	<div>
        	Nightly Rate: {this.props.nightlyRate}
        </div>
        <div>
          Total Rate: {this.props.totalRate}
        </div>
        <a href={this.props.bookingUrl}>Book</a>
        <br/>
      </div>
    </Wrapper>
    )
  }
}