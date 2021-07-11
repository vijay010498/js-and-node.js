// async await
// Job queue
// setTimeout(() => {
//     console.log('1');
// }, 0);
// setTimeout(() => {
//     console.log('2');
// }, 10)
//
// Promise.resolve('hi').then((data) => {
//     console.log('I am inside the promise')
// })
//
// console.log('3');

//Call stack

//setTimeout
//setTimeout
// webapi

//callback queue

//Promise
// Job queue

// Event loop

// async / await
const movePlayerPromise = (pos, direction) => {
    return new Promise((resolve, reject) => {
        resolve('Player moved ' + pos);
    })
}

// async function playerStart() {
//     const first = await movePlayerPromise(400, 'left') // pause
//     const second = await movePlayerPromise(500, 'right')
//     const third = await movePlayerPromise(600, 'left')
// }

//
// fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json()).then((data) => {
//     console.log(data)
// })
//
// async function fetchUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');// pause
//     const data = await response.json();
//     console.log(data);
// }

// .catch
// const getData1 = async function () {
//     try {
//         const response = await fetch('https://jsonplaceholde.typicode.com/users');// pause
//         const data = await response.json();
//         console.log(data);
//     } catch (err) {
//         console.log('Some error', err);
//     }
// }

const animals = {
    tiger: 23,
    lion: 5,
    monkey: 3,
    bird: 40
}

function ObjectSpread(p1, p2, p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

// react
const {tiger, lion, ...rest} = animals;
// ObjectSpread(tiger, lion,rest);


// const array = [1, 2, 3, 4, 5, 6];
//
// function sum(a, b, c, d, e) {
//     return a + b + c + d + e
// }
// sum(...array)

//finally()
// const urls = ['https://jsonplaceholde.typicode.com/users'];
// Promise.all(urls.map(url => {
//     return fetch(url).then(people => people.json())
// })).then(array => {
//     console.log(array);
// }).catch(err => console.log('ughh fix it', err)).finally(() => console.log('some extra work'))

// parallel, sequence, Race
// 3 promises

const promisify = (item, delay) => {
    return new Promise((resolve) => {
        return setTimeout(() => {
            return resolve(item);
        }, delay)
    })
}
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 6000);

async function parallel() {
    const promises = [a(), b(), c()]; //
    const [op1, op2,op3] = await Promise.all(promises);
    return 'Parallel is done ' + op1 + op2 + op3
}

//parallel().then(console.log);

// race
async function race() {
    const promises = [a(), b(), c()];
    const op1 = await Promise.race(promises);
    return 'Race is done ' + op1;

}
//race().then(console.log) // .then(data => console.log(data))

async function sequence() {
    const op1 = await a(); //
    const op2 = await b(); //
    const op3 = await c(); //
    return 'Sequence is done ' + op1 + op2 + op3
}

//sequence().then(console.log)
parallel().then(console.log)
sequence().then(console.log)
race().then(console.log)

//