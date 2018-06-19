const fs= require('fs');
const _= require('lodash');
const yargs= require('yargs');

const notes= require('./notes');

const command= process.argv[2];
// console.log('command= ',command);
// console.log("process.argv obj= ",process.argv);

const titleOption = {
    describe: 'Title of note',
    demand: true,
    alias:'t'
};

const bodyOption = {
    describe: 'Body of note',
    demand: true,
    alias:'b'
};

const argv = yargs.command('add','Add a new note',{
    title: titleOption,
    body: bodyOption 
}
)
.command('list','List all notes')
.command('read','Read a note', {
    title: titleOption
})
.command('remove','Removing a note', {
    title: titleOption
})
.help()
.argv;
// console.log('argv= ',argv);


if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body);    
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if(command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.filter( (note) => notes.logNote(note) );
} else if(command === 'read') {
    var note = notes.getNote(argv.title);

    if(note){
        console.log('Note found');
        notes.logNote(note);
    }else{
        console.log('Note not found');
    }

}else if (command === 'remove') {
    var removeNotification = notes.removeNote(argv.title);
    //if(removeNotification==='true'){ console.log('Remove Note'); } else{ console.log('Note not present'); }
    var message = removeNotification ? 'Note removed' : 'Not not found';
    console.log(message);
}else {
    console.log('Command not regognize');
}