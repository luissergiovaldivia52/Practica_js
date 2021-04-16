
console.log('Starting app.js');

const fs = require ('fs');

//const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js')

//console.log(process.argv);

const argv = yargs.argv;
//var command = process.argv[2];
var command = argv._[0];

console.log('Command: ', command);
//console.log('Process: ', process.argv);
console.log('Yargs: ', argv);

if (command === 'add') {
   // console.log('Adding new note');
    let note = notes.addNote(argv.title, argv.body);

    if (note) {
        console.log('Note created');
        console.log('---')
        console.log(`Title:  ${note.title}`);
        console.log(`Body:  ${note.body}`);
    } else {
        console.log('Note title taken');
    }

} else if (command === 'list') {
    notes.getAll();
        //console.log('Listing all note')
} else if (command === 'read') {
    notes.getNotes(argv.title)
       // console.log('Reading note')
} else if (command === 'remove') {
    notes.removeNote(argv.title);
        //console.log('Removing note')
} else {
        console.log('Command not recognized');
}



