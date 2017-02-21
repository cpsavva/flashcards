'use strict'
/* =======  GLOBAL VARIABLES ========= */

const fs = require('fs');
const inquirer = require('inquirer');


/* =======  CONSTRUCTOR ========= */

//BASIC CARD

function BasicCard (front, back){
	if(! (this instanceof BasicCard)){
		return new BasicCard(front, back)
	}

	this.front = front;
	this.back = back;

	console.log( "front: " + this.front + " back: " + this.back + ",")
		fs.appendFile("basicCard.json", "{front: " + this.front + ", back: " + this.back + "},", function(err){
			if (err) console.log(err)
		})
	
};

	// var newCard = new BasicCard(front, back);

	// BasicCard.prototype.append = function (){
	// 	fs.appendFile("basicCard.json", "{front: " + this.front + ", back: " + this.back + "},", function(err){
	// 		if (err) console.log(err)
	// 	})
	// }




/* =======  MAIN PROCESS ========= */
function basicCardInput (){

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
		]).then(handleInput);
}

function handleInput (info){
	new BasicCard(info.front_text, info.back_text)
}






module.exports = {basicCardInput}




