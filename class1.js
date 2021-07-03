// data types
// 1. let - var - general def
// 2. const - equal to java final

let var1 = "vijay";
const var2 = "hhh";
const var3 = [1, 2, 3, 4, 5];

// objects, Map

// TIme complexity = O(1)
const obj1 = {
    "key1": "value1",
    "key2": [123],
}

// obj[key1]
// obj[key2]

// Map o(1)
const mp = new Map();

// FUNCTION 2 options
const printHello = function (par1, par2) {
    console.log(par1);
}

// 2ND OPTION
const printHello1 = (par1) => {
    console.log(par1);
}

// [1,2,34,5,6] // target = 7
// O(N^2)
// O(1)
const sol = function (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return "MATCH FOUND";
            }
        }
    }
    return "NO MATCH FOUND";
}
// [] , {}
// O(N)
// O(N)
const sol1 = function (arr, target) {
    const map = {};
    for (let  i = 0 ; i < arr.length; i++) {
        let NTF =  target - arr[i];
        if (map[arr[i]])
            return "MATCH FOUND";
        else {
            map[NTF] = true;
        }
        console.log(map);
    }
    return "NO MATCH FOUND";
}


const arr = [123,23,42,3412,313,123];

const sortedArray = arr.sort((a,b) =>{
    return b - a;
});
console.log(sortedArray);












