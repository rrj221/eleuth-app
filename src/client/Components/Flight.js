import React, {Component} from 'react';
import Outbound from './Outbound';
import Inbound from './Inbound';
import Prices from './Prices';
import price from './Price';

import "./Results/Results.css";

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

export default class Flight extends Component {
  render() {
    return (
    
<div>

    <link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet" />
  <div className="panel panel-primary">
    <div className="panel-heading">
      <div className ="panel-body fixed-panel">
  
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4" id="outbound2">
              		<Outbound 
          	    		originStation={this.props.outboundInfo.originStation}
          				Destinationstation={this.props.outboundInfo.destinationStation}
          				departure={this.props.outboundInfo.departure}
          				arrival={this.props.outboundInfo.arrival}
          				stopsQty={this.props.outboundInfo.stopsQty}
          				duration={this.props.outboundInfo.duration}
          				journeyMode={this.props.outboundInfo.journeyMode}
          				carrierStuff={this.props.outboundInfo.carrierNames}
              		/>
                </div>

                <div className="col-md-4" id="inbound2">
                      <Inbound
          	        	originStation={this.props.inboundInfo.originStation}
          				destinationstation={this.props.inboundInfo.destinationStation}
          				departure={this.props.inboundInfo.departure}
          				arrival={this.props.inboundInfo.arrival}
          				stopsQty={this.props.inboundInfo.stopsQty}
          				duration={this.props.inboundInfo.duration}
          				journeyMode={this.props.inboundInfo.journeyMode}
          				carrierStuff={this.props.inboundInfo.carrierNames}
                      />
                 </div>     

                 <div className="col-md-4" id="prices">
                     <Prices
                      	prices={this.props.priceInfo}
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

   //    <div id='IndexPage'>
   //      <Outbound 
			// originStation={this.props.outboundInfo.originStation}
			// Destinationstation={this.props.outboundInfo.destinationStation}
			// departure={this.props.outboundInfo.departure}
			// arrival={this.props.outboundInfo.arrival}
			// stopsQty={this.props.outboundInfo.stopsQty}
			// duration={this.props.outboundInfo.duration}
			// journeyMode={this.props.outboundInfo.journeyMode}
			// carrierStuff={this.props.outboundInfo.carrierNames}
   //      />
   //      <Inbound
   //      	originStation={this.props.inboundInfo.originStation}
			// destinationstation={this.props.inboundInfo.destinationStation}
			// departure={this.props.inboundInfo.departure}
			// arrival={this.props.inboundInfo.arrival}
			// stopsQty={this.props.inboundInfo.stopsQty}
			// duration={this.props.inboundInfo.duration}
			// journeyMode={this.props.inboundInfo.journeyMode}
			// carrierStuff={this.props.inboundInfo.carrierNames}
   //      />
   //      <Prices
   //      	prices={this.props.priceInfo}
   //      />
   //    </div>


