//Multiple Arguments
const add = function(a, b) {
    return a + b;
}

let result = add(2, 3);
console.log(result);

//Default Arguments
const getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name : ' + name + ' - Score : ' + score;
}

let scoreText = getScoreText();
console.log(scoreText);

//Challenge Area
const getTip = function (total, tipPercent = 0.2) {
    return `A ${tipPercent * 100}% on ${total} would be ${total * tipPercent}`;
}

console.log(getTip(100));