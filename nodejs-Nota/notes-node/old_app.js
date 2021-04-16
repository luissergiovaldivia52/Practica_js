
console.log('Starting app');

const fs = require ('fs');

const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js')

//var user = os.userInfo();

//console.log(user);

// fs.appendFile('greetings.txt', 'Hello World!!', function(err){
// 	if(err){
// 		console.log('Unable to write to file');
// 	}
// });
 



// fs.appendFile('greetings.txt', `Hello ${user.username}!`, function(err){
// 	if(err){
// 		console.log('Unable to write to file');
// 	}
// });

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err){
// 	if(err){
// 		console.log('Unable to write to file');
// 	}
// });

// var res = notes.addNote();
// console.log(res);

// var suma = notes.add(9, -2);
// console.log(suma);

//console.log('Result: ', notes.add(9, -2));

// console.log(_.isString(true));
// console.log(_.isString('Gary'));


//var filteredArray = _.uniq(['Gary', 1, 'Gary', 1, 2, 3, 4]);

var filteredArray = _.uniq(['Mike']);
console.log(filteredArray);