console.log('Starting notes.js');

//module.exports.age = 54;

var addNote = (title, body) => {
	
	console.log('Adding Note', title, body);
};

module.exports.add = (a, b) =>{

	// this.a = a;
	// 	this.b = b;
	return (a + b);//(this.a + this.b);

}

var getAll = () => {
    console.log('Getting all notes');
};

var getNotes = (titles) => {
	console.log('Getting note', titles);
};

var removeNote = (title) => {
	console.log('Removing note', title);
}

module.exports = {
	addNote: addNote,
	getAll,
	getNotes,
	removeNote
};
