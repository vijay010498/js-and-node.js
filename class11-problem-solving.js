// S1 :  "ab#z" , s2 : "az#z" - o/p => true
// az // s2 => az -> true
// "" "" -> true
// "Ab#z" "ab#z" -> false


// Generic function
// s1 = 100000
// s2 = 10000000
// false
// Time complexity = O(n + m) //n =  s1.length // m= S2.length
// Space complexity = O(n + m)//n =  s1.length // m= S2.length
const buildTheString = function (string) {
    const stringStack = [];
    for (let p = 0; p < string.length; p++) {
        if (string[p] !== '#') {
            stringStack.push(string[p]);
        } else {
            stringStack.pop();
        }
    }
    return stringStack;
}
const actualLogic = function (S1, S2) {
    const finalS1 = buildTheString(S1);
    const finalS2 = buildTheString(S2);
    if (finalS1.length !== finalS2.length) return false;
    else {
        for (let i = 0; i < finalS1.length; i++) {
            if (finalS1[i] !== finalS2[i]) return false
        }
    }
    return true;
}
// S1 :  "ab##z" , s2 : "az#z" - o/p => true
// Math -> 1 # => 2 char 2# => 4 char
// Two pointer solution
// Time complexity = O(n + m) //n =  s1.length // m= S2.length
// Space complexity = O(1)
const actualSolutionOpti = function (S1, S2) {
    let p1 = S1.length - 1;
    let p2 = S2.length - 1;
    while (p1 >= 0 || p2 >= 0) {
        if (S1[p1] === '#' || S2[p2] === '#') {
            if (S1[p1] === '#') {
                let charToRemoved = 2;
                while (charToRemoved > 0) {
                    p1--;
                    charToRemoved--;
                    if (S1[p1] === '#') {
                        charToRemoved += 2
                    }
                }
            } else if (S2[p2] === '#') {
                let charToRemoved = 2;
                while (charToRemoved > 0) {
                    p2--;
                    charToRemoved--;
                    if (S2[p2] === '#') {
                        charToRemoved += 2;
                    }
                }
            }
        } else {
            if (S1[p1] !== S2[p2]) return false
            else {
                p1--;
                p2--;
            }
        }
    }
    return true;
}
console.log(actualSolutionOpti('ab#z','az#z'));