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
	

	console.log( 'full: ' + this.full + ' cloze: '+ this.cloze + ' partial: '+ this.partial)

};

// var newCloze = new ClozeCard(cloze, full);

ClozeCard.prototype.append = function (){
	fs.appendFile("basicCard.txt", "front: " + this.front + " back: " + this.back + ",", function(err){
		if (err) console.log(err)
	})
}

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
	ClozeCard(info.cloze_text, info.full_text);
}


module.exports = {clozeCardInput}
