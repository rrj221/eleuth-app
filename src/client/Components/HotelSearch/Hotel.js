import React, {Component} from 'react';
import BasicHotelInfo from './BasicHotelInfo.js';
import HotelDetails from './HotelDetails.js';

 import styled from 'styled-components';

const container = styled.div`
  background: #9783c8;
  text-align: center;
  font-size 1.5em;
  color: palevioletred;
`;

const Title = styled.h2`
  text-align: center;
  font-size 1.5em;
  text-decoration: underline;
  color: black;
`;

export default class Hotel extends Component {
  render() {
    return (

<div>
Single Hotel

  <div className="panel panel-primary">
    <div className="panel-heading">
      <div className ="panel-body fixed-panel">
  
            <div className="container-fluid">
              <div className="row">
             <Title>This is a single hotel</Title>
                <div className="col-md-4" id="outbound">
                 <BasicHotelInfo
                   name={this.props.basicInfo.name}
                   address={this.props.basicInfo.address}
                   stars={this.props.basicInfo.stars}
                   popularity={this.props.basicInfo.popularity}
                   amenities={this.props.basicInfo.amenities}
                 />
                </div>

                <div className="col-md-4" id="inbound">
                      <HotelDetails
                        details={this.props.details}
                      />
                 </div>     

                <br/>
              </div>
             </div>
      </div>

  </div>

  </div>




 </div>
    )
  }
}





