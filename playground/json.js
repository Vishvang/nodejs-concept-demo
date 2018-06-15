// Take string and convert into Object
// var obj = {
//     name: 'Mac'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// Taking string and convert into object.
// var personString = '{"name": "David","Age": 28}';
// var personObj = JSON.parse(personString);
// console.log(personString);
// console.log(typeof personObj);
// console.log(personObj);

const fs = require('fs');
var originalNoteObj = {
    title: 'Some Title',
    body: 'Some body'
};

// read object convert to string and store into file.
var originalNoteString = JSON.stringify(originalNoteObj);
fs.writeFileSync('notes.json',originalNoteString);

// read strign from file and parse into object and print on console.
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);

