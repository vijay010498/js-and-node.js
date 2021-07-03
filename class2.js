// 03/07/21 - String and Array methods

// strings
let str1 = "this is string"
let str2 = 'this is string 2'

// string append
//console.log(str1 + str2);

// Template string
// console.log(`Vijay ${str1}`);


// string methods

// length
// console.log(str1.length);


//slice
//console.log(str1.slice(0,3));
//console.log(str1.slice(0,4));
//console.log(str1.slice(5));

// substring
//console.log(str1.substring(0,4));

// replace


// case conversion
str1.toLowerCase();
str1.toUpperCase();

// trim
str1.trim();

// padStart
let text = "123";
console.log(text.padStart(4, "0"));

// padEnd
text.padEnd(4, "12");

// charAt
let text1 = "Hello";
text1.charAt(2);

// charCodeAt
text1.charCodeAt(2);

// split
const gg = "This is string";
const ggArray = gg.split(" ");
console.log(ggArray);
const sortedArray = ggArray.sort((a, b) => {
    return a.length - b.length;
});
console.log(sortedArray);

// for (let i = 0; i < gg.length; i++) {
//     console.log(gg[i]);
// }


// Array methods
const myArray = [1, 2, 3, 4, 5, 6, 7];
// forEach
// myArray.forEach((num, index) => {
//    console.log(num,index);
// });
// for (let num of myArray) {
//     console.log(num);
// }

// push insert at end  -  O(1)
myArray.push(8);
console.log(myArray);

// pop - remove at end
myArray.pop();

// shift  -  remove 1st element O(N)
myArray.shift();
console.log(myArray);

// unshift O(N)
myArray.unshift(50);
console.log(myArray);

// length
myArray.length;

// indexOf
const arr4 = [10, 20, 20, 40, 50];
console.log(arr4.indexOf(20));

// lastIndex
console.log(arr4.lastIndexOf(20));

// includes
console.log(arr4.includes(10));

// splice modifies the original array
arr4.splice(1, 1);
console.log(arr4);

// join array to string
const gg1 = "This is string";
const ggArray1 = gg.split(" ");
const sortedArray1 = ggArray.sort((a, b) => {
    return a.length - b.length;
});
console.log(sortedArray1);
const sortedString = sortedArray.join("");
console.log(sortedString);

// map
const array7 = [1, 2, 10, 16];
const doubledArray = array7.map((num) => {
    return num += 1;
});
console.log(doubledArray);
console.log(array7);

// filter
const evenArray = array7.filter((num) => {
    return num === 2;
})
console.log(evenArray);
console.log(array7);

// reduce
const reducedValue = array7.reduce((a, num) => {
    return a + num;
}, 0); // default  - 100 - starting value
console.log(reducedValue);

// ... spread operator
const arr9 = ["this", "is", "string array"]
console.log(...arr9);
console.log(...array7);


// Es2019
// flat
const nestedArray = [1, [2, 3], [4, 5]];
//console.log(nestedArray.flat());
const deptArray = [1, 2, [3, 4, [5]]];
console.log(deptArray.flat(2));


[4,3,2,1]
[1,2,3,4];

// queue
class queue {
    constructor() {
        this.values = [];
    }
    enqueue(val) {
        this.values.push(val);
    }
    dequeue() {
        this.values.shift();
    }
}

// classes
class Car {
    constructor(brand) {
        this.carName = brand
    }
    present() {
        return this.carName;
    }
}
class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show(){
        return this.present() + this.model;
    }
}

const myCar = new Model("BMW","5 series");
console.log(myCar.show());




