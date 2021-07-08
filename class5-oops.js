// oops
// data and functions
// oops
// this kw
// new kw
// Prototype
// Es6 classes
// Inheritance
// Object.create()
// private vs public
// 4 principles of oop

// simple example
let dragon = {
    name: 'tanya', // data AKA state
    fire: true, // data -  AKA state
    sign() {
        if (this.fire) {
            return `I am ${this.name}, the fire`
        }
    },
    fight() {
        return 'I can fight'
    }
}
//console.log(dragon.sign());

// Fp data  / functions
const dragon1 = {
    name: 'tanya',
    fire: true,
}

function sign(dragon) {
    if (dragon.fire) {
        return `I am ${dragon.name}, the fire`
    }
}

//console.log(sign(dragon));

// Factory functions
// create a game
// fairy tale game

// naive approach

const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack() {
        return 'attack with ' + elf.weapon
    }
}

const elf1 = {
    name: 'neha',
    weapon: 'bow',
    attack() {
        return 'attack with ' + elf.weapon
    }
}

//console.log(elf1.attack());
function createElf(name, weapon) {
    return {
        name, /// same as name : name
        weapon, // weapon : weapon
        attack() {
            return 'attack with ' + weapon
        }
    }
}

// const orwell = createElf('orwell', 'bow');
// console.log(orwell.attack());
// const neha = createElf('neha', 'stones');
// console.log(neha.attack());
// kishore
// vijay
// 1000 elf's

// Prototype inheritance - closer to oops
const elfFunctions = {
    attack() {
        return 'attack with ' + this.weapon // this peter .
    }
}
function createElf1(name, weapon) {
    return {
        name,
        weapon,
    }
}
// const peter = createElf1('peter', 'stones');
// peter.attack = elfFunctions.attack;
// console.log(peter.attack());

// Object.Create()
function createElf2(name, weapon) {
    // O
    let newElf = Object.create(elfFunctions);
    newElf.name = name;
    newElf.attack = elfFunctions.attack;
    newElf.weapon = weapon;
    return  newElf;
}
// const peter2 = createElf2('peter', 'stones');
// console.log(peter2.attack());

// constructor functions
// close to oops
function ElfConstruct(name, weapon) {
   this.name =  name;
   this.weapon = weapon;
}
// ElfConstruct.prototype.attack = function (){
//     return  'attack with ' + this.weapon; // this  => peter3
// }
ElfConstruct.prototype.attack =  () =>{
    return  'attack with ' + this.weapon; // this => global this =  windows
    // () => lexically scoped => this =>
    // function => dynamically scoped => this => based on who call it
}
// const peter3 = new ElfConstruct('Peter','stones'); //
// console.log(peter3.attack());

//
let a = 5;
let b = new Number(5);
// console.log(a);
// console.log(b);
// console.log(typeof a);
// console.log(typeof b);
// console.log(a == b );
// console.log(a === b);

// ===
// new


// using class
class Elf {
    constructor(name, weapon) {
        this.name = name; // this =  peter4
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
    //
    //
}
const peter4 = new Elf('Peter','bow'); //
//console.log(peter4.attack());

// this keyword
// new binding
function  Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person('Xavier', 55);

// implicit binding
const personImplicit = {
    name : 'Karen',
    age : 120,
    hi() {
        console.log('hi' + this.name);
    }
}

//personImplicit.hi();

// Inheritance
class Elf1 {
    constructor(name, weapon)  {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}
// const fiona = new Elf('Fioan', 'ninja');
// const ogre = {...fiona};
// console.log(fiona.attack());
// //console.log(ogre.attack());
// console.log(ogre === fiona);

class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon;
    }
}

class ElfInherit extends Character {
    constructor(name, weapon, type) {
        super(name,weapon);
        this.type = type;
    }
    // sing
    // call
}

class Orge1 extends Character {
    constructor(name, weapon,color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() {
        return 'Strongest fort in the world';
    }
}
const dolby = new ElfInherit('Dolby', 'cloth' ,'house');
console.log(dolby.attack());
const shrek = new Orge1('Shrek', 'club', 'green');
console.log(shrek.attack());
console.log(shrek.makeFort());


// Exercise
/*
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return 'attack with ' + this.weapon
    }
}
*/

//Polymorphism--
//Extend the Character class to have a Queen class. The output of the below code should be:
//const victoria = new Queen('Victoria', 'army', 'hearts'); // create a new instance with the queen having (name, weapon, type). Type includes: 'hearts', 'clubs', 'spades', 'diamonds'

//victoria.attack() // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '
