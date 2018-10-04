import React, { Component } from 'react';


class WordDisplay extends Component{

	render(){

		return(
			<div className='tc pa2'>
				<h2>{this.props.guesses}</h2>
			</div>
			)
	}


}


export default WordDisplay;