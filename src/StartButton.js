import React, { Component } from 'react';



class StartButton extends Component {


	render(){

		return(
			<div className='tc'>
				<h1>

					<button 
						className='btn btn-info btn-round'
						onClick={this.props.fillArrays} 
						type="button">
							{this.props.msg}
					</button> 

				</h1>

			</div>
		)
	}
}



export default StartButton;