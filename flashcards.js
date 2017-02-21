'use strict'
//GLOBAL VARIALBLES
const inquirer = require("inquirer");
const basicCards = require("./basic_constructor.js");
const clozeCards = require("./cloze_constructor.js");
// const reviewCards = require ("./review.js");


//FUNCTIONS
function initial(){

	inquirer.prompt ([
		{
			type: 'input',
			message: 'Would you like to add or review cards?',
			name: 'add_review'
		}
		]).then(handleInit);

};

function handleInit(initAns){
	console.log('inital answer: ' + initAns.add_review)

	switch (initAns.add_review){
		case 'add':
			typeCard();
			break;

		case 'review':
			//review functions
			break;

		default:
			console.log("Please try again")
	}

};

function typeCard (){
	inquirer.prompt([
		{
			type: 'checkbox',
			message: 'What type of card would you like to add?',
			choices: ['basic', 'cloze'],
			name: 'basic_cloze'
		}

		]).then(handleTypeCard);
}

function handleTypeCard(typeCardAns){
	console.log('type of card answer: '+ typeCardAns.basic_cloze[0])


	switch (typeCardAns.basic_cloze[0]){
		case 'basic':
			basicCards.basicCardInput();
			break;

		case 'cloze':
			clozeCards.clozeCardInput();
			break;

		default:
			console.log("I'm sorry, Please try again.")
	};
}




///MAIN PROCESS

initial();
	

