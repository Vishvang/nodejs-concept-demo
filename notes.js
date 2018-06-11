console.log('Starting the notes.js');

// console.log(module);

module.exports.age= 27;

module.exports.addNotes= () => {
    console.log('addNote Function');
    return 'New Notes';
}

module.exports.add= (a,b) => {
    return a + b;
}