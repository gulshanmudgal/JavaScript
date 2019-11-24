const notes = [{
    title: 'My Next Trip',
    body: 'I would like to travel to North-East'
},
{
    title: 'Habbits to work on',
    body: 'Exercise, Eating a bit better'
},
{
    title: 'Time Table Management',
    body: 'Adjust the calander for next month'
}];

/*
//Will add an item in the end
notes.push('This is a new pushed note');
console.log(notes);

//Will remove an item from the end
notes.pop();
console.log(notes);

//Will remove an item from the beginnig
notes.shift();
console.log(notes);

//Will add an item to the beginning of the array
notes.unshift('New Note Add to the beginning');
console.log(notes);

//Splice -- Start Index - No of item to remove starting at the start index - Element to add
notes.splice(1,0, 'Hello', 'Testing');
console.log(notes);
*/

// const index = notes.findIndex(function(note, index){
//     return -1;
// });

const findNote = function(notes, noteTitle){
    const index = notes.findIndex(function(note){
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });

    return notes[index];
};

const findNotes = function(notes, query){
    return notes.filter(function(note){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());

        return isTitleMatch || isBodyMatch;
    });
}

const sortNotes = function(notes){
    notes.sort(function(a, b){
        let returnval = -1;
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            returnval = -1;
        } else if(a.title.toLowerCase() > b.title.toLowerCase()){
            returnval = 1;
        } else {
            returnval = 0;
        }

        return returnval;
    });
}

// const note = findNotes(notes, 'to');
// console.log(note);
sortNotes(notes);
console.log(notes);
