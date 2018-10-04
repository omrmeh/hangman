import React, { Component } from 'react';

class Input extends Component {

	render(){

		return(
			<div className="tc pa3">
			<div className={this.props.divStyle}>
				<input 
					type="text" 
					className={this.props.inputStyle}
					placeholder="enter letter" 
					onKeyPress={(event) => {
		   			 if (event.key === "Enter" && event.target.value!=='') {
		      			this.props.uga(event.target.value.charAt(0))
		   			 }
		  			}}
		/>
			</div>

			</div>
			)
	}


}


export default Input;