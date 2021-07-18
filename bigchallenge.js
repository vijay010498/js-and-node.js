let notesDataStore = [];
const userDataStore = ['neha', 'niharika', 'kishore', 'vijay'];

const addedDates = [
    '2021-01-20',
    '2021-01-21',
    '2021-01-22',
    '2021-01-23',
    '2021-01-24',
]

// getting all the notes
async function getNotes() {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(notesDataStore);
        }, 200)
    })
}

// get single note with given note ID
async function getNote(noteId) {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            const filteredNotes = notesDataStore.filter((note) => {
                return note.noteId === noteId;
            });
            if (filteredNotes.length) {
                resolve(...filteredNotes);
            } else {
                reject('No record found with the given note ID');
            }
        }, 200)
    })
}

// remove a note with the given note id
async function removeNote(noteId) {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            const filteredNotes = notesDataStore.filter((note) => {
                return note.noteId === noteId;
            });
            if (filteredNotes.length === notesDataStore.length) {
                reject(false);
            } else {
                notesDataStore = filteredNotes;
                resolve(true);
            }
        }, 200);
    })
}

// delete the given user and all the notes with the username
async function deleteAnUser(userName) {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            if (!userDataStore.includes(userName)) {
                reject('User Not found');
            }
            notesDataStore = notesDataStore.filter((note) => {
                return note.user !== userName
            });
            // remove the user itself
            userDataStore.splice(userDataStore.indexOf(userName), 1);
            resolve(true);
        })
    })
}

function insertIntoNotes(note) {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            notesDataStore.push(note);
            resolve('Success');
        }, 100)
    });
}

async function autoInsertNotes() {
    try {
        const notes = [
            'Get a pen',
            'Buy some chocos',
            'Commit the code',
            'Make some dhai poori'
        ]
        for (let i = 0, n = 50; i < n; i++) {
            const added = addedDates[Math.floor(Math.random() * addedDates.length)];
            const user = userDataStore[Math.floor(Math.random() * userDataStore.length)];
            const content = notes[Math.floor(Math.random() * notes.length)];
            const noteId = Math.floor(Math.random() * 10000);
            const note = {added, user, content, noteId};
            await insertIntoNotes(note);
        }
        return true;
    } catch (err) {
        return false
    }

}


async function runTheExercise() {
    const autoInsertSuccess = await autoInsertNotes();
    if (autoInsertSuccess) {
        console.log(`Auto insert success ${notesDataStore.length}`);
        console.log('Getting all notes')
        const allNotes = await getNotes();
        console.table(allNotes);
        try {
            const randomNote = notesDataStore[Math.floor(Math.random() * notesDataStore.length)];
            const singleNote = await getNote(randomNote.noteId);
            console.table(singleNote);
            console.log('Remove a note')
            try {
                await removeNote(randomNote.noteId);
                console.log('Remove a note done');
                console.log('After removing a note', notesDataStore.length);
                try {
                    await deleteAnUser('neha');
                    console.log('user deleted');
                    console.table(userDataStore);
                } catch (err) {
                    console.log('Remove an user failed', err);
                }
            } catch (err) {
                console.log('Remove a note failed');
            }
        } catch (err) {
            console.error('Get Note By Id Failed', err);
        }
    } else {
        throw new Error('Auto Insert Failed');
    }
}

runTheExercise();
