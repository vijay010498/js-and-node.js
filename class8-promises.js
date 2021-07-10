// Promises

/*
console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000)
console.log('3');



//call stack

// web API

// callback queue

//event loop*/

// Promises
// 3 states
// Pending
// Resolved - fulfilled
// Rejected //

const usingCallbacks = function (data, callback) {
    //10 APi

    //2 api
   return callback(true,'Stuff Worked');
}


const promise = new Promise((resolve, reject) => {
    const temp = true;
    if (temp) {
        resolve('Stuff worked');
    } else {
        reject('Error, it broke');
    }
});
// promise.then(result => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// Promise.all
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hiii');
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Pookie');
});
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Is me you are looking for');
});
// Promise.all([promise, promise2, promise3, promise4]).then((values => {
//     console.log(values);
// })).catch((err) => {
//     console.log(err);
// })

//https://jsonplaceholder.typicode.com/users
//https://jsonplaceholder.typicode.com/photos
//https://jsonplaceholder.typicode.com/albums
const urls = ['https://jsonplaceholder.typicode.com/users', 'https://jsonplaceholder.typicode.com/photos', 'https://jsonplaceholder.typicode.com/albums']
Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json());
})).then(results => {
    console.log(results);
}).catch((err) => {
    console.log('Some error');
})

// async/ await

const myOwnPromise = new Promise((r, rr) =>{
    // Api call
    // looping 100000000
    r('Completed');
    //some error
    rr('Some internet issues');
});





