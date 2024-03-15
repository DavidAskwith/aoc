const fs = require('fs');

const file = fs.readFileSync('./input.txt', 'utf8')

const colorLimits = {
    red: 12,
    green: 13,
    blue: 14,
};

const games = file.split('\n').slice(0, -1).reduce((i, line) => {
    const sets = line.split(':').pop().trim().split(';');
    const gameIsValid = sets.map((set) => {
        console.log(set);
        const validSet = set.split(',').map((pairs) => {
            const cubeColorPair = pairs.trim().split(' ');
            const count = cubeColorPair[0];
            const color = cubeColorPair[1];
            /* console.log(cubeColorPair) */
            return count <= colorLimits[color];
        }).every((val) => val === true);

        return validSet;

    }).every((val) => val === true);

    console.log(gameIsValid);
    if (gameIsValid) {
        return  i + Number(line.substring(line.indexOf(' ') + 1, line.indexOf(':')));
    }
    return i;
}, 0);

console.log(games);

