//import process from 'process';
//const { argv } from 'process';
const {argv} = require('process')

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});