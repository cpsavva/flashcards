'use strict'

const fs = require('fs');
const inquirer = require('inquirer');


function readFlash(){ 
		fs.readFile('flashcards.txt', 'utf8', (err, data) => {
		  if (err) throw err;
		  console.log(data);

		  var dataArr = data.split(";");
		  
		  console.log(data_array)
		  for ( var myKey in dataArr) {

			// console.log( dataArr[myKey]);

			};
			
		});
};

readFlash();

