'use strict'
/* =======  GLOBAL VARIABLES ========= */

const fs = require('fs');
const inquirer = require('inquirer');


/* =======  CONSTRUCTOR ========= */

//CLOZE CARD


function ClozeCard (cloze, full){
	if(! (this instanceof ClozeCard)){
		return new ClozeCard(cloze, full)
	}
	this.full = full;
	this.cloze = cloze;

	var match = this.full.match(cloze);
	var part = this.full.replace(match, '...');

	this.partial = part;
	
	console.log('=============================');
	console.log('');
	console.log('full: ' + this.full);
	console.log('');
	console.log('cloze: '+ this.cloze);
	console.log('');
	console.log('partial: ' + this.partial);
	console.log('');
	console.log('=============================');

};

// var newCloze = new ClozeCard(cloze, full);

	// BasicCard.prototype.append = function (){
	// 	fs.appendFile("ClozeCard.json", "{full: " + this.full + ", cloze: " + this.cloze + ", partial: "+ this.partial + "},", function(err){
	// 		if (err) console.log(err)
	// 	})
	// }

/* =======  MAIN PROCESS ========= */

function clozeCardInput(){
	inquirer.prompt([

		{
			type: 'input',
			message: 'Please enter the cloze argument',
			name: "cloze_text"
		},
		{
			type: 'input',
			message: 'Please enter rest of sentence',
			name: 'full_text'
		}
		]).then(handleCloze);

};

function handleCloze(info){
	new ClozeCard(info.cloze_text, info.full_text);
}


module.exports = {clozeCardInput}
