import React, {Component} from 'react';
import {Grid, Row, Col} from "react-bootstrap";

 import styled from 'styled-components';


const Wrapper = styled.h1`
  background: papayawhip;
  text-align: center;
  font-size 1.5em;
  color: palevioletred;
`;

export default class MasterPage extends Component {
  render() {
    return (
      <Wrapper>
      <div id='MasterPage'>
      
        MasterPage
      
      </div>
    </Wrapper>
    )
  }
}


