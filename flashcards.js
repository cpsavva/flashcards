'use strict'

const inquirer = require("inquirer");
const addCards = require("./add.js");
const reviewCards = require ("./review.js");


inquirer.prompt ([
	{
		type: 'input',
		message: 'Would you like to add or review your flashcards?',
		name: 'add_review'
	}
	]).then(function(user){
	console.log(JSON.stringify(user, null, 2));
	if (user = 'add'){
		//run add text function from different file
	}
	if(user = 'review'){
		//run review text function from different file
	}

	});
	// {
	// 	type: 'input',
	// 	message: 'Please enter the text to display on the front of this card.',
	// 	name: "front_text"
	// }
	// {
	// 	type: 'input',
	// 	message: 'Please enter the text to display on the back of this card.',
	// 	name: 'back_text'
	// }
	// {
	// 	type:'confirm',
	// 	message: 'Would you like to enter another flashcard?',
	// 	name: 'additional_card',
	// 	default: true
	// },
	// {

	// }


