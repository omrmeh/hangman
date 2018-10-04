import React, { Component } from 'react';


class EndDisplay extends Component{

	render(){

		return(

			<div className='tc'>
			<p>{this.props.msg} The word was <h2><em>{this.props.word}</em></h2>,<br/> </p>
			</div>
			)
	}

}

export default EndDisplay;