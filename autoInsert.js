const notesDataStore = [];
const userDataStore = ['neha', 'niharika', 'kishore', 'vijay'];
const addedDates = [
    '2021-01-20',
    '2021-01-21',
    '2021-01-22',
    '2021-01-23',
    '2021-01-24',
]

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

autoInsertNotes().then(bol => {
    if (bol) {
        console.log(notesDataStore);
        console.log(notesDataStore.length);
    } else {
        console.log('Auto insert failed');
    }
})
