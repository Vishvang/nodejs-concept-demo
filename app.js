console.log('Staring app.js');

const fs= require('fs');
const _= require('lodash');
const yargs= require('yargs');

const notes= require('./notes');

const command= process.argv[2];
console.log('command= ',command);
console.log("process.argv obj= ",process.argv);

const argv = yargs.argv;
console.log('argv= ',argv);


if(command === 'add') {
    notes.addNote(argv.title, argv.body);    
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    notes.getNote(argv.title);
}else if (command === 'remove') {
    notes.removeNote(argv.title);
}else {
    console.log('Command not regognize');
}