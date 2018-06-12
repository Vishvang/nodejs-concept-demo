console.log("Starting the app.js");

const fs= require('fs');
const os= require('os');
const _=require('lodash');

const notes= require('./notes');

var add= notes.add(3,3);
console.log(add);

console.log(_.isString(true));
console.log(_.isString('vish'));

var filteredArray = _.uniq(['vish','1','vish','1','2','3','4']);
console.log(filteredArray);

// var user= os.userInfo();
// console.log(user);

// fs.appendFileSync('greetings.txt', 'Hello '+user.username+' !');
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age} old`);

// var newNotes= notes.addNotes();
// console.log(newNotes);
