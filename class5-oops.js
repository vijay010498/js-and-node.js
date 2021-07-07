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
const peter = createElf1('peter', 'stones');
peter.attack = elfFunctions.attack;
console.log(peter.attack());

// prototype

//  this => function ()=>

// new kw
// funny js
// class
// inheritance
// extends
// poly
// enca
// abstraction

