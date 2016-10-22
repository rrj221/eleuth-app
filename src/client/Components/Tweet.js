import React, {Component} from 'react';


export default class Tweet extends Component {
  render() {
    return (
    	<div>
    		<ul>
    			<li><a href={this.props.url}>{this.props.name}</a></li>
    			<li>Tweet Volume: {this.props.volume}</li>
    		</ul>
    	</div>
    )
  }
}