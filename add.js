'use strict'

const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([

	{
		type: 'input',
		message: 'Please enter the text to display on the front of this card.',
		name: "front_text"
	},
	{
		type: 'input',
		message: 'Please enter the text to display on the back of this card.',
		name: 'back_text'
	}
	]).then(function(info){
		// console.log(JSON.stringify(info, null, 2));
		var frontCard = info.front_text
		// console.log(frontCard)
		var backCard = info.back_text
		var dataInsert = frontCard + ', '+ backCard + ';'
		Flashcard(dataInsert);
});


function Flashcard (card){ 
		fs.appendFile('flashcards.txt', card)
		  console.log('It\'s saved!');

		};






