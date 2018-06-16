console.log('Starting the notes.js');
// console.log(module);
module.exports.age= 27;

const fs = require('fs');

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch(e) {
        return [];
    }
};

var saveNotes = (notes) => {
   fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }
    var duplicateNotes = notes.filter( (note) => note.title === title );
    
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    
};

var getNote = (title) => {
    var notes= fetchNotes();
    var filterNote= notes.filter( (note) => note.title === title );
    return filterNote[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filterNote = notes.filter( (ele)=> ele.title!= title );
    saveNotes(filterNote);
    
    return notes.length!=filterNote.length;
};

var logNote = (note) => {
    console.log('---');
    console.log('Title: ' + note.title);
    console.log(`Title: ${note.title}`);
    console.log(`Body:  + ${note.body}`);
}
module.exports = {
    addNote,     // Eq to addNote: addNote
    getAll,
    getNote,
    removeNote,
    logNote
}

// Method inside app1.js
// module.exports.add= (a,b) => {
//     return a + b;
// }

// module.exports.addNotes= () => {
//     console.log('addNote Function');
//     return 'New Notes';
// }
