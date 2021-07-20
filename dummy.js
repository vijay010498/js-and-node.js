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


// Input -  activities and tasks
// Expected output - Activity-1 has completed 0%
// Activity-2 has completed 100%..... and so on
const activities = [
    {
        name: 'activity-1',
        id: 'ACT-1',
        tasks: [1, 2]
    },
    {
        name: 'activity-2',
        id: 'ACT-2',
        tasks: [3]
    },
    {
        name: 'activity-3',
        id: 'ACT-3',
        tasks: [4, 5, 6, 7, 8]
    },
    {
        name: 'activity-4',
        id: 'ACT-4',
        tasks: [9, 10]
    },
]
// statuses
// 0 - Not Started
// 1 - Work in progress
// 2 - Completed
const tasks = [
    {
        name: 'Task-1',
        id: 1,
        status: 0,
        activity: "ACT-1"
    },
    {
        name: 'Task-2',
        id: 2,
        status: 0,
        activity: "ACT-1"
    },
    {
        name: 'Task-3',
        id: 3,
        status: 2,
        activity: "ACT-2"
    },
    {
        name: 'Task-4',
        id: 4,
        status: 2,
        activity: "ACT-3"
    },
    {
        name: 'Task-5',
        id: 5,
        status: 2,
        activity: "ACT-3"
    },
    {
        name: 'Task-6',
        id: 6,
        status: 0,
        activity: "ACT-3"
    },
    {
        name: 'Task-7',
        id: 7,
        status: 1,
        activity: "ACT-3"
    },
    {
        name: 'Task-8',
        id: 8,
        status: 2,
        activity: "ACT-3"
    },
    {
        name: 'Task-9',
        id: 9,
        status: 2,
        activity: "ACT-4"
    },
    {
        name: 'Task-10',
        id: 10,
        status: 2,
        activity: "ACT-4"
    }
]