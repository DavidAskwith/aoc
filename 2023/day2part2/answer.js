const fs = require('fs');

const file = fs.readFileSync('./input.txt', 'utf8')

const colorLimits = {
    red: 12,
    green: 13,
    blue: 14,
};

const games = file.split('\n').slice(0, -1).reduce((i, line) => {
console.log(line.split(':').pop().trim().split(/;|,/));
    const gameLowestValues = line.split(':').pop().trim().split(/;|,/).reduce((i, pairs) => {
        const cubeColorPair = pairs.trim().split(' ');
        const count = cubeColorPair[0];
        const color = cubeColorPair[1];
        /* console.log(cubeColorPair) */

        if (Number(count) > i[color] || i[color] === null) {
            i[color] = count
        }

        console.log(i)
        return i;
    }, { red: null, green: null, blue: null });

console.log(((gameLowestValues.red ?? 1) * (gameLowestValues.blue ?? 1) * (gameLowestValues.green ?? 1)))
    return i + ((gameLowestValues.red ?? 1) * (gameLowestValues.blue ?? 1) * (gameLowestValues.green ?? 1))

}, 0);
console.log(games);

