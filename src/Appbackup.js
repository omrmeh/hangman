import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TryButton from './TryButton';

class App extends Component {

  constructor(props){
  	super()
  	this.state={
  		word : "test",
  		wordArray : [],
  		guessArray : []
  	}

	}


	fillArrays = (event) => {
		//on créé les tableaux en fct du mot à deviner
		this.setState({wordArray:this.state.word.split(""),
			           guessArray:Array(this.state.word.length).fill("-")})
	}

	isMatch = (guess) => {
		
		if (this.state.guessArray.join("") != this.state.wordArray.join("")){
			let guessArrayCopy = this.state.guessArray.slice() //on copie le tableau à cause de l'immutabilité des states, on ne peut pas modifier directement this.state.guessArray[i]
			for (let [index, l] of this.state.wordArray.entries()) { //possibilité de récupérer l'index car on est sur un tableau et pas directement sur la string
				(guess === l) ? guessArrayCopy[index] = guess : undefined;
			}
			this.setState({guessArray:guessArrayCopy})
		}

		else{
			console.log("gagné") //là faudrait retourner une valeur qui permette au render d'afficher un nouveau component
		}
		

	}



  render() {
  	console.log(this.state.guessArray.join(""))
  	console.log(this.state.wordArray.join(""))
	console.log(this.state.word)

	//A FAIRE : METTRE LA FONCTION isMatch ICI, ET SI LE guessArray != wordArray ON AFFICHE
	// encore le bouton dans le render, sinon on affiche autre chose

    return (
      <div className="App">
            <TryButton fillArrays={this.fillArrays} isMatch={this.isMatch}/>
      </div>
    )
  }
}

export default App;
