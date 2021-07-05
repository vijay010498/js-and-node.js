// Functional pgmg

//Pure functions -
// No side effects
// Immutable

// no side effects
const array = [1, 2, 3];

// side effects
function a(arr) {
    arr.pop();
}

function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop();
    return newArray;
}
//console.log(removeLastItem(array));

// same input => same output
function b() {
    console.log('hi');
}
function a() {
    return Math.random();
}
function gf(num1, num2) {
    return num1 + num2 + Math.random();
}
const obj = {
    name : "vijay"
}
function clone(obj) {
    return {...obj}; // pure function
}

// HOF
const hof = () =>{
    return () => {
        return () => {
            return 6;
        }
    }
}
const retfunc = hof();
//console.log(retfunc());
//console.log(hof()());

//closure -
const closure = function () {
    let count = 0; // private
    return function increment() {
        count++;
        return count;
    }
}
const increment = closure();
//console.log(increment());
//console.log(increment());

// currying
const multiple = (a,b) =>{
    return a * b;
}
// using closure
const curriedMultiple = (a) =>{
    return (b) =>{
        return a*b;
    }
}
const curriedMutiplyBy5 = curriedMultiple(5);
const curriedMutiplyBy6 = curriedMultiple(6);
//console.log(curriedMutiplyBy5(2));
//console.log(curriedMutiplyBy6(1));

//Memoization - caching
function addTo80(n){
    return n + 80;
}
// caching
let cache = {}; // this is not a pure function
function memoizedAddTo80(n){
    if (n in cache) {
        console.log("From cache");
        return cache[n];
    }else {
        console.log("Long process");
        cache[n] = n + 80;  // 100 s
        return cache[n];
    }
}
// console.log(memoizedAddTo80(5));
// console.log(memoizedAddTo80(5));

// changing into pure functions
// closure
function memoizedAddTo80Opti(n) {
    let cache = {};
    return function (n) {
        if (n in cache) {
            console.log("From cache");
            return cache[n];
        }else {
            console.log("Long process");
            cache[n] = n + 80;  // 100 s
            return cache[n];
        }
    }
}
//
// console.log(memoizedAddTo80Opti(5));
// console.log(memoizedAddTo80Opti(5));
// console.log(memoizedAddTo80Opti(5));
// console.log(memoizedAddTo80Opti(5));
const memoized = memoizedAddTo80Opti();
// console.log(memoized(5));
// console.log(memoized(5));//
// console.log(memoized(5));
// console.log(memoized(5));

// 126. compose -
const compose = (f, g) => { // 1000 functions
    return (data) =>{
        return f(g(data)); // right to left
    }
}
// -50 * 3 = 150
const multipleBy3 = (num) =>{ // first
    return num * 3; // -150
}
const takeAbsolute = (num) =>{ // second / -150
    return Math.abs(num);
}
const multiplyBy3AndAbsolute =  compose(takeAbsolute, multipleBy3); // functions
//console.log(multiplyBy3AndAbsolute(-50));

//pipe
const pipe = (f, g) => {
    return (data) =>{
        return g(f(data)); // left to right
    }
}


// Amazon shopping
const user = {
    name : "neha",
    active : true,
    cart : [],
    purchases : [],
}


// Implement the cart feature
// 1. Add items to cart - addItemToCart(user, item)
// 2. Add 30% tax to the item in the cart - applyTaxToItems(user)
// 3. Buy item : cart[] -> purchases[] -  // buyItem(user)
// 4. Empty cart - // emptyCart(user)


// Bonus task
// Accept refunds -
// Track user history -  getUserHistory(user)

// solution
const compose1 = (f,g) => {
    return (...args) =>{
        return f(g(...args));
    }
}

function purchaseItem(...functions) {
    return functions.reduce(compose1);
}

console.log(purchaseItem(
    //emptyCart
    //buyItem
    applyTaxToItems, // called with  - updated cart  - user object
    addItemToCart, // updated cart  - user object
)(user, {name : 'laptop', price: 120000}));


function addItemToCart(user, item) { // pure function
    const updatedCart = user.cart.concat(item);
    return Object.assign({},user, {cart : updatedCart});
}
function applyTaxToItems(user) {
    const {cart} = user; // const cart = user.cart
    const taxRate = 1.3;
    const updatedCart = cart.map((item) =>{
        return {
            name : item.name,
            price : item.price * taxRate
        }
    });
    return Object.assign({}, user,{cart : updatedCart});
}





