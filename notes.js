console.log('Starting the notes.js');
// console.log(module);
module.exports.age= 27;


var addNote = (title, body) => {
    console.log('Adding note: ',title,body);
};

var getAll = () => {
    console.log('Getting All Notes');
};

var getNote = (title) => {
    console.log('Getting notes: ', title);
};

var removeNote = (title) => {
    console.log('Removing notes:', title);
};

module.exports = {
    addNote,     // Eq to addNote: addNote
    getAll,
    getNote,
    removeNote
}

// Method inside app1.js
// module.exports.add= (a,b) => {
//     return a + b;
// }

// module.exports.addNotes= () => {
//     console.log('addNote Function');
//     return 'New Notes';
// }
