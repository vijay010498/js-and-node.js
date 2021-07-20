/*
const array = [
    [123, 2342, 34, 234, 234, 32],
    [123, 234, 234, 32],
    [123, 2342, 34, 234, 234, 32],
    [123, 2342, 34, 234, 234, 32],
    [123, 2342, 34, 32],
    [123, 2342, 234, 234, 32],
    [1, 2, 3, 3132, 23, 423, 120, 120]
]

console.log(array.sort((a, b) => {
    return a.sort((a, b) => a - b).length - b.sort((a, b) => a - b).length;
}));*/

const solution = (S) => {
    let front = 0;
    let back = 0;
    let op = '';
    while (front < S.length) {
        if (S[front] === 's')
            if (S[back] === 'm') {
                op += '-';
                back = front + 1;
            } else if (S[back] === 'p') {
                op += '+';
                back = front + 1;
            }
        front++;
    }
    return op;
}
console.log(solution("plusminusminusplusminusplusplusplusminus"));