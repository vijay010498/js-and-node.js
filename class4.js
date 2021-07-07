// java  - statically typed
// javascript - dynamically typed

// Java
// String name; // variables have types
// name = 'vijay' // values have types
// name = 34 // error

// Javascript
let name; // no types
name = 'vijay'
name = 55;

//console.log(name);

// Functional programming
// oops -  java , c++ - classes , objects
// FP - js, lamp - functions , data

// all about data
// separate the data and functions

// Principle to follow
// Pure functions
// 1. Same input -> same output
// 2. No side effects

// No side effects
const array = [23, 23, 454, 33453, 234234, 234]; // data
// console.log(array);
// console.log(...array);

function mutateArray(arr) {
    arr.forEach((item, index) => {
        arr[index] = item + 1;
    });
}

// No side effects
function mutateArray1(arr) {
    return arr.map((item) => {
        return item + 1;
    });
}

//
// console.log(array);
// console.log(mutateArray1(array));
// console.log(array);

// same i/p => o/p
function addTwo(num1, num2) {
    return num1 + num2 + Math.random();
}

// console.log(addTwo(1, 2));
// console.log(addTwo(1, 2));
// console.log(addTwo(1, 2));
// console.log(addTwo(1, 2));
// console.log(addTwo(1, 2));

// To be a perfect function
// 1 task
// Return statement
// Pure
// composable
// predictable - 100 %

// Immutability - Not changing the data or state
const obj = {
    name: 'name'
}

function clone(obj) {
    return {...obj}; // pure function
}

//
function updateName(obj) { // pure function
    const obj2 = clone(obj)
    obj2.name = 'sara';
    return obj2;
}

// FP
// High order functions
// function take or returns a function

const hof = () => {
    return function (a) {
        return 'GOOD';
    }
}
// const hofFun = hof();
// console.log(hofFun());
// console.log(hof()());

const hof1 = (fn) => {
    return fn(5); // x = 5
}

// console.log(hof1);
// const gg = hof1();
// console.log(hof1(function a(x) {
//     return x;
// }));

// closure -
const closure = function () {
    let count = 0;
    return function incr() {
        count++;
        return count;
    }
}
const increment = closure(); //increment ?
//console.log(increment);
// console.log(increment()); // o/p ?
// console.log(increment());
// console.log(increment());
// console.log(increment());

// currying
// 1 argument at a time
const multiple = (a, b) => {
    return a * b;
}
console.log(multiple(2, 3));
const cMult = (a) => {
    return (b) => {
        return a * b; //
    }
}
const cumil5 = cMult(5); // bank server call - Api
console.log(cumil5(6));

// cooking competition
let competitor = {
    name: 'neha',
    totalDishesCooked: 0,
    dishes: [],
    ingredientsUsed: [],
    cookingInProgress: '',
}
const ingredients = ['pasta', 'pasta-sauce', 'olive-oil']
const dish = 'Italian-Pasta'
const ingredients1 = ['pasta', 'pasta-sauce', 'olive-oil']
const dish1 = 'Italian-Pasta'
const pip = (f, g) => {
    return (...args) => {
        return f(g(...args));
    }
}

function makeACompetitorCooking(...functions) {
    return functions.reduce(compose);
}

console.log(competitor);
competitor = makeACompetitorCooking(
    increaseTotalDishesCooked,
    completeCooking,
    cookingIngredients,
    washTheIngredients,
    collectTheIngredients
)(competitor, ingredients, dish);
competitor = makeACompetitorCooking(
    increaseTotalDishesCooked,
    completeCooking,
    cookingIngredients,
    washTheIngredients,
    collectTheIngredients
)(competitor, ingredients1, dish1);
console.log(competitor);

// Rules
// At any given time a competitor can cook one dish at a time
// once the dish has been cooked he/she can cook next dish

// steps
// 1. collect the ingredients for cooking. -  collectTheIngredients(competitor, ingredients, dish)
// 2. Wash the ingredients
// 3. cooking
// 4. Complete the cooking //
// 5. Update the totalDishesCooked //

function collectTheIngredients(competitor, ingredients, dish) {
    const updatedIngredientsUsed = competitor.ingredientsUsed.concat(ingredients);
    return Object.assign({}, competitor, {ingredientsUsed: updatedIngredientsUsed, cookingInProgress: dish})
}


function washTheIngredients(competitor) {
    // const WashedIngredientsUsed = competitor.ingredients.concat(ingredients);
    return Object.assign({}, competitor, {})
}

function cookingIngredients(competitor) {
    // const CookingIngredientsUsed = competitor.ingredients.concat(ingredients);
    return Object.assign({}, competitor, {})
}

function completeCooking(competitor, dish, ingredientsUsed) {
    const currentCookingInProgress = competitor.cookingInProgress;
    const updatedDishes = competitor.dishes.concat(currentCookingInProgress);
    return Object.assign({}, competitor, {dishes: updatedDishes, cookingInProgress: ''});
}

function increaseTotalDishesCooked(competitor) {
    const {dishes} = competitor;
    const updatedDishesCooked = dishes.length;
    return Object.assign({}, competitor, {totalDishesCooked: updatedDishesCooked});
}



















