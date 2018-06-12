console.log('Staring app.js');

const fs= require('fs');
const _= require('lodash');

var command= process.argv[2];
console.log(command);
console.log("process.argv object:",process.argv);

if(command === 'add') {
    console.log('Adding Notes');
}else if(command === 'read'){
    console.log('Reading All Notes');
}else if (command === 'remove') {
    console.log('Removing Notes');
}else if(command === 'list'){
    console.log('Listing All Notes');
}else if (command === 'update') {
    console.log('Updating Notes');
}else {
    console.log('Command not regognize');
}