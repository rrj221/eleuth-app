import React, {Component} from 'react';
import BasicHotelInfo from './BasicHotelInfo';
import HotelDetails from './HotelDetails';

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
          				duration={this.props.basicInfo.duration}
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