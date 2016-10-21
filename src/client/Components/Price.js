import React, {Component} from 'react';

import styled from 'styled-components';

const Wrapper = styled.h5`
  font-size: 12px;
  text-align: center;
  color: black;
  background: #9783c8;
`;

export default class Price extends Component {
  render() {
    return (
    <Wrapper>
      <div id='IndexPage'>
      	<div>
      		Agent Name: {this.props.agentName}
      	</div>
      	<img src={this.props.image}/>
      	<div>
        	Price: {this.props.price}
        </div>
        <a href={this.props.link}>Link</a>
        <br/>
      </div>
    </Wrapper>
    )
  }
}