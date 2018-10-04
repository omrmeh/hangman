import React, { Component } from 'react';


var images = require.context('./images', true);

class HangmanDisplay extends Component{

	render(){
		let img_src = images(`./${this.props.attempts.toString()}.png`)
		return(
			<div className='tc'>

			<img src={img_src}  alt='hangman' style={{height: 250}}/>

			</div>
			)
	}

}



export default HangmanDisplay;