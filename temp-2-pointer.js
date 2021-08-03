const drawGraph = function (week, totalDefects, closedDefects) {
    return `Graph drawn for week:'${week}' , with total defects : '${totalDefects}', and closed defects : '${closedDefects}'`;
}
const getWeek = function (creationDate) {
    if (creationDate === 1) {
        return 1;
    } else if (creationDate === 2) {
        return 2
    } else if (creationDate === 3) {
        return 3
    } else if (creationDate === 4) {
        return 4;
    }
}
const defects = [
    {
        defectId: "1238219",
        creationDate: 1,
        closedDate: 1312323
    },
    {
        defectId: "123821923234",
        creationDate: 1,
        closedDate: 1312323
    },
    {
        defectId: "1238219232342323",
        creationDate: 1,
    },
    {
        defectId: "1238219232342323",
        creationDate: 1,
        closedDate: 1312323
    },
    {
        defectId: "1238219232342323",
        creationDate: 2,
        closedDate: 1312323
    },
    {
        defectId: "1238219232342323",
        creationDate: 2,
        closedDate: 1312323
    },
    {
        defectId: "1238219232342323",
        creationDate: 2,
        closedDate: 1312323
    },
    {
        defectId: "1238219232342323",
        creationDate: 2,
        closedDate: 1312323
    },
    {
        defectId: "1238219232342323",
        creationDate: 3,
        closedDate: 1312323
    },
    {
        defectId: "1238219232342323",
        creationDate: 3,
        closedDate: 1312323
    },
    {
        defectId: "1238219232342323",
        creationDate: 3,
        closedDate: 1312323
    },
    {
        defectId: "1238219232342323",
        creationDate: 4,
    }
]

const solve = function (defects) {
    let totalDefects = 0;
    let closedDefects = 0;
    let j = 0;
    for (let i = 0; i < defects.length; i++) {
        let iWeek = getWeek(defects[i].creationDate);
        let jWeek = getWeek(defects[j].creationDate);
        if (iWeek !== jWeek) {
            console.log(drawGraph(jWeek, totalDefects + 1, defects[i].closedDate ? closedDefects + 1 : closedDefects));
            totalDefects = 0;
            closedDefects = 0;
            j = i;
            if (i === defects.length - 1)
                console.log(drawGraph(iWeek, totalDefects + 1, defects[i].closedDate ? closedDefects + 1 : closedDefects));
        } else if (iWeek === jWeek) {
            totalDefects++;
            if (defects[i].closedDate)
                closedDefects++;
            if (i === defects.length - 1)
                console.log(drawGraph(jWeek, totalDefects + 1, closedDefects + 1));
        }
    }
}

solve(defects);