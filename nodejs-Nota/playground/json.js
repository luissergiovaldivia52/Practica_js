// var obj = {
//     name: 'Andrew'
// };

// var personString = '{"name": "Andrew", "age" : 25} ';

// var person = JSON.parse(personString);

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);

// console.log(stringObj);

// console.log(typeof person);
// console.log(person);

const fs = require('fs');
//const { copyFileSync } = require('node:fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

//originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
//var notesString = fs.readFileSync('notes.jason');
 

//note
var note = JSON.parse(noteString);
//var notes = JSON.parse(notesString);

console.log(typeof note);
console.log(note.title);



