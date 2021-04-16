/** @format */

console.log('Starting notes.js');

//module.exports.age = 54;
const fs = require('fs');

let fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json');

		return JSON.parse(notesString);
	} catch (e) {
		return [];
	}
};

let saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};
var addNote = (title, body) => {
	var notes = fetchNotes();

	var note = {
		title,
		body,
	};
	var duplicateNotes = notes.filter((note) => {
		return note.title === title;
	});

	if (duplicateNotes.length === 0) {
		notes.push(note);
		// fs.writeFileSync('notes-data.json', JSON.stringify(notes));
		saveNotes(notes);
		return note;
	}
	// notes.push(note);
	// fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

//var notesString = fs.readFileSync('notes-data.json');

//notes = JSON.parse(notesString);

// module.exports.add = (a, b) => {
// 	// this.a = a;
// 	// 	this.b = b;
// 	return a + b; //(this.a + this.b);
// };

var getAll = () => {
	console.log('Getting all notes');
};

var getNotes = (titles) => {
	console.log('Getting note', titles);
};

var removeNote = (title) => {
	//fetch notes
	var notes = fetchNotes();
	//filter notes , removing th one with title of argument
	var filteredNotes = notes.filter((note) => note.title !== title ) ;
	//save new notes array
	saveNotes(filteredNotes);
	console.log('Removing note', title);
	return notes.length !== filteredNotes.length;
};

module.exports = {
	addNote: addNote,
	getAll,
	getNotes,
	removeNote,
};
