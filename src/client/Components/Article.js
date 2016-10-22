import React, {Component} from 'react';


export default class Article extends Component {
  render() {
    return (
    	<div>
    		<ul>
    			<li><a href={this.props.url}>{this.props.title}</a></li>
    			<li>Published: {this.props.publishedDate}</li>
    		</ul>
    	</div>
    )
  }
}