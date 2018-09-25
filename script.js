const word = "tes";
const wordArray = word.split(""); 
let guessArray =  Array(word.length).fill("X"); 

let list = document.querySelector("#list");
let input = document.querySelector("#letterInput");


const updateGuessArray = (letter) =>
	{
	for (let [index, l] of wordArray.entries()) { //possibilité de récupérer l'index car on est sur un tableau et pas directement sur la string
		(letter === l) ? guessArray[index] = letter : undefined;
		}
	};
	
const displayHtml = (toDisplay) =>
{
	let li = document.createElement("li");
	li.setAttribute("class","list-group-item");
	li.appendChild(document.createTextNode(toDisplay));
	list.appendChild(li);
};

//
const runGame = (event) => {
	if (event.keyCode === 13){
		if (wordArray.toString() != guessArray.toString()){
			updateGuessArray(input.value.charAt(0)); //on envoie que le 1er caractère de l'input pour être sûr de ne traiter qu'une lettre
			displayHtml(guessArray.join(""));//.join("") permet de printer le tableau en string sans "," contrairement à .toString()
			/*idéalement faudrait rechecké ici si le mot a été trouvé,
				si oui on appel une fct displayCongrats qui efface les
				elts de la liste et affiche un msg de félicitations */
		}

		else{ /* si le mot a été trouvé on efface les élts de la liste
					et on affiche le msg de félicitations. 
					Idéalement ce bloc de code pourrait constituer une 
						fct séparée nommée displayCongrats */
			while(list.hasChildNodes()){
				list.removeChild(list.firstChild);
			}
			displayHtml("Congrats :)"); 
		}
	}
};

input.addEventListener("keypress", runGame);
 //on ne peut comparer directement deux tableaux 
	

	




