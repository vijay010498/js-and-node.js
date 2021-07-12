// Errors and error handling

// Errors in js
// Error
//console.log(Error);
// console.log(new Error('Oops vijay'));

// Error
//throw new Error('oops this is not right to be in mute!');
//Error
const myError = new Error('oops');
// 3 built in properties
//console.log(myError.name);
//console.log(myError.message);
//console.log(myError.stack)

//ex
function a() {
    const b = new Error('what??');
    return b;
}

//console.log(a());
//console.log(a().name)

// built in errors
//new Error
//SyntaxError
//(,)
//ReferenceError
//console.log(something);

// The flow in js
// Error -> catch -> catch ->

// 1. Try/ catch
// 2. Catch method

// Try/catch
function fail() {
    try {
        console.log('THis works');
    } catch (err) {
        console.log('We have made some error' + err);
    }
}
//fail();
function fail1() {
    try {
        conso.log('THis works');
    } catch (err) {
        console.log('We have made some error ' + err);
    }
}
//fail1();
function fail2() {
    try {
        throw new Error('Same nasty Error');
        console.log('THis works');
    } catch (err) {
        console.log('We have made some error' + err);
    }
}
//fail2();

// finally
function fail4() {
    try {
        console.log('THis works');
        throw new Error('Same nasty Error');
    }catch (err){
        console.log('We have made some error' + err);
    }finally {
        console.log('Still good');
    }
}
//fail4();
function fail5(){
    try{
        console.log('THis works');
        throw new Error('Same nasty Error');
    }catch (err){
        console.log('We have made some error' + err);
    }finally {
        console.log('Still good');
    }
    console.log('!!!!!!!!!!!!!!!11#######');
}
//fail5();
function fail6(){
    try {
        try {
            something();
        }catch (e){
            throw new Error('VIJAy');
        }
    }catch (e){
        console.log('got it',e);
    }
}
//fail6();
// .catch
/*Promise.resolve('Async failed')
.then(resp => {
    throw new Error('No 1 Failed');
    return resp;
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})*/

// .then
/*
Promise.resolve('Async failed')
    .then(resp => {
        throw new Error('No 1 Failed');
        return resp;
    }).then(res => {
    console.log(res);
}).catch(err => {
    return err;
}).then(resp => {
    console.log(resp);
// })*/
// Promise.resolve('Async failed')
//     .then(resp => {
//         throw new Error('No 1 failed');
//         return resp
//     }).then(resp => {
//         console.log(resp)
// }).catch(err => {
//     return err
// }).then(resp => {
//     throw new Error('gg');
// }).catch(err => {
//     console.log('Final error',err);
// })

//Extending error
// Error -
class AuthenticationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'autherror';
        this.favouriteAnimal = 'dog';
        this.erroCode = 2445;
    }
}
class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = "DB connection error";
        this.version = "v2";
    }
}
const a1 = new AuthenticationError('oops');
console.log(a1.favouriteAnimal);

// A big
// Notes
// Users
// Note : {
// id :  Int - unique key - Not null
// added : data - string - 02/02/21
// author : user name -  string - Not null  - Not fake
// content  - actual note content - string - Not
// }
// users - name - string
//Read -  single - multiple  - 1 sec
// Write - 1 sec
// Delete -  2 sec
// error codes
// Invalid note Id  -  403
// Invalid user name -  402

// 1'st function - autoInsertNotes()
// To create the notes
// This called -  insert 50 random notes into the notes store
//insertion -  1 sec -  use promises - setTimeout

// 2'nd function
// getNotes
// use promise -  1 sec

// 3'th function
// Get notes by ID
// id as a param -
// promise -
//Error handling -  403

// 4'th function - remove a note
// id - promise
// error handling

// 5'th delete an user
// user name as a parm
// promise
// error handling


// const notesDataStore = [];
// const userDataStore = ['neha', 'niharika', 'kishore', 'vijay'];
// const addedDates = [
//     '2021-01-20',
//     '2021-01-21',
//     '2021-01-22',
//     '2021-01-23',
//     '2021-01-24',
// ]
//
// function insertIntoNotes(note) {
//     return new Promise((resolve, reject) => {
//         return setTimeout(() => {
//             notesDataStore.push(note);
//             resolve('Success');
//         }, 100)
//     });
// }
//
// async function autoInsertNotes() {
//     try {
//         const notes = [
//             'Get a pen',
//             'Buy some chocos',
//             'Commit the code',
//             'Make some dhai poori'
//         ]
//         for (let i = 0, n = 50; i < n; i++) {
//             const added = addedDates[Math.floor(Math.random() * addedDates.length)];
//             const user = userDataStore[Math.floor(Math.random() * userDataStore.length)];
//             const content = notes[Math.floor(Math.random() * notes.length)];
//             const noteId = Math.floor(Math.random() * 10000);
//             const note = {added, user, content, noteId};
//             await insertIntoNotes(note);
//         }
//         return true;
//     } catch (err) {
//         return false
//     }
//
// }
//
// autoInsertNotes().then(bol => {
//     if (bol) {
//         console.log(notesDataStore);
//         console.log(notesDataStore.length);
//     } else {
//         console.log('Auto insert failed');
//     }
// })



