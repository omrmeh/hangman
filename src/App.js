import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import StartButton from './StartButton';
import WordDisplay from './WordDisplay';
import HangmanDisplay from './HangmanDisplay';
import EndDisplay from './EndDisplay';
import LettersTested from './LettersTested';
import {wordsArray} from './dic.js';


let searchStyle=''
let divStyle=''

class App extends Component {

  constructor(props){
  	super()
  	this.state={
  		word : '',
  		guessArray : [],
  		attempts : -1,
  		letters : []
  	}

	}

	initGame = (event) => {
		//génération du mot aléatoire et création de guessArray
		const newWord = this.getRandomWord() //on se base sur newWord pour créer le tableau car les states ne sont updatés qu'après le render()
		
		this.setState({word:newWord,
			           guessArray:Array(newWord.length).fill("-"),
			           letters:[]
			       	 })
		this.setState({attempts:0}) //pour pouvoir commencer le jeu avec l'affichage de tous les composants
		
		searchStyle = ''
		divStyle = '' //on remet le style des inputs par défaut
	
	}

	getRandomWord = () => {
	
		let randomNumber = Math.floor(Math.random() * 990);	
		return wordsArray[randomNumber];

	}


	updateGuessArray = (guess) => {
			let guessArrayCopy = this.state.guessArray.slice() //on copie le tableau à cause de l'immutabilité des states, on ne peut pas modifier directement this.state.guessArray[i]
			const wordArray = this.state.word.split("")  //plus facile de récupérer les indexsur un tableau que sur une string 

			if (this.state.letters.indexOf(guess)!=-1){ //si la lettre avait déjà été entrée...
				this.setColorInput('red')
				this.forceUpdate()	//pour raffraichir le view, car on a pas fait de setState donc le component ne se réaffiche pas
				return;                    //... et on arrête l'execution de la fonction
			}	
			
			for (let [index, l] of wordArray.entries()) { //.entries() renvoie l'index et l'élt pr un tableau
					(guess === l) ? guessArrayCopy[index] = guess : undefined;
				}

			this.setState(prevState => ({ //on update le tableau des lettres déjà testées
				    letters: [...prevState.letters, guess]
			}))

			if (guessArrayCopy.join("") === this.state.guessArray.join("")){ //si les tableaux initialement identiques le sont toujours, donc si aucune lettre n'a été trouvée
				this.setState({attempts:this.state.attempts+1})	
				this.setColorInput('red')
			}
			else{
				this.setColorInput('green')
			}


			this.setState({guessArray:guessArrayCopy}) //on met à jour guessArray
	}

	setColorInput = (color) => {
		if (color === 'red') {
			searchStyle = 'form-control form-control-danger' //la barre d'input devient rouge
			divStyle='form-group has-danger' //pour que l'input change il faut aussi que le div entourant l'input change
		}
		else if (color === 'green'){
			searchStyle='form-control form-control-success' //la barre d'input devient verte
			divStyle='form-group has-success'
		}
		

	}
  render() {

  	const {word, guessArray, attempts, letters} = this.state
	
	if (attempts === -1) //si on n'a pas encore commencé à jouer
	{
		return(
				<StartButton fillArrays={this.initGame} msg="Start Game"/>
			)
	}

	else if (attempts > 7){
		return (
			<div>
				<EndDisplay msg='Sorry, you lost :( ' word={word} />
				<StartButton fillArrays={this.initGame} msg="Restart"/>
			</div>
			)
	} 

	else if (guessArray.join("") !== word){
	    return (
	      <div className="App">
	            <Input uga={this.updateGuessArray} inputStyle={searchStyle} divStyle={divStyle}/>
	            <LettersTested letters={letters} />
	            <WordDisplay guesses={guessArray.join("")} />
	            <HangmanDisplay attempts={attempts} />
	            <StartButton fillArrays={this.initGame} msg="Restart"/>
	      </div>
	    )
	 }

	 else{ //si le mot a été trouvé 	
	 	return(
	 		<div>
	 			 <EndDisplay msg='Congrats :)) You won.' word={word} />
	 			 <StartButton fillArrays={this.initGame} msg="Restart" />
	 		</div>
	 		)
	 }


  }
}

export default App;
