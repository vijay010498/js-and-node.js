// asynchronous js
// Web Apis
// Callbacks
// Async / await
// Microtask Queue - Job Queue
// Task Queue -  Callback queue
// Promises
// Event loop

// async

// web apis

// setTimeout
// setTimeout(() => {
//     console.log('Hi there');
// }, 5000) // 1000ms  -
//
// setTimeout(() => {
//     console.log('1', 'Is is the loneliest number');
// },0) // exe 2
//
// setTimeout(() => {
//     console.log('2', 'can be bad as one');
// },10) // exe 3
//
// console.log('3', 'This is async'); // exe 1

// program ?

// Js Engine
// Memory Heap -  memory allocation
// Call stack -  actual code execution
const a = 1;
const b = 2;
const c = 3;

// console.log('1');
// console.log('2');
// console.log('3');
//
// const one = () => {
//     const two = () => {
//         console.log('4');
//     }
//     two();
// }
// one();

// stack
// console.log('4');
//two() -  exe
//One() - this is the first -  run and remove from the call stack

// async
// Recursion
// function call itself
function foo() {
    foo();
}

// foo();

// setTimeout
// sync
// console.log('1');
// setTimeout(() => {
//     console.log('2'); // only 2 sec
// },2000);
// console.log('3');

// real life example
// game
// function movePlayer(pos, direction, callback) { // callback =  function //100 , 'Left'
//     console.log('Player moved ' + pos + " in " + direction);
//     return callback(); //
// }
// movePlayer(100, 'left',function () {
//     movePlayer(400, 'left', function () {
//         movePlayer(10, 'Right', function () {
//             movePlayer(22,'left', function () {
//             })
//         })
//     })
// })

// some good ex

function grabTweets(url, callback) {
    console.log('Got tweets from ' + url);
    return callback(false, ['tweet 1', 'tweet 2']);
}

function displayTweets(tweets) {
    console.log(...tweets);
}

grabTweets('twitter/vitalikbuternin', (error, vitalTweets) => {
    if (error) {
        throw Error;
    }
    displayTweets(vitalTweets);
    grabTweets('twitter/kishore', (error, kishoreTweets) => {
        displayTweets(kishoreTweets);
    });
})

// cooking competition using async programming
let competitor = {
    name: 'neha',
    totalDishesCooked: 0,
    dishes: [],
    ingredientsUsed: [],
    cookingInProgress: '',
}
const ingredients = ['pasta', 'pasta-sauce', 'olive-oil']
const dish = 'Italian-Pasta'


// Rules
// At any given time a competitor can cook one dish at a time
// once the dish has been cooked he/she can cook next dish
// A competitor has to spend at least 3 min for a single dish

// steps
// 1. collect the ingredients for cooking. -  collectTheIngredients(competitor, ingredients, dish)
// 2. Wash the ingredients
// 3. cooking // setTimeout
// 4. Complete the cooking //
// 5. Update the totalDishesCooked //

function collectTheIngredients(competitor, ingredients, dish, callback) {
    const updatedIngredientsUsed = competitor.ingredientsUsed.concat(ingredients);
    const updatedObject = Object.assign({}, competitor, {
        ingredientsUsed: updatedIngredientsUsed,
        cookingInProgress: dish
    });
    console.log('Ingredients Collected ' + [...ingredients]);
    return callback(updatedObject);
}

