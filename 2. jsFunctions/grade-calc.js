const getScore = function (studentScore, totalScore) {
    studentPercentage = (studentScore / totalScore) * 100;
    let scoreText = null;

    if(studentPercentage >= 90){
        scoreText = `You got A (${studentPercentage})`;
    } else if(studentPercentage >= 80 && studentPercentage < 90){
        scoreText = `You got B (${studentPercentage})`;
    } else if(studentPercentage >= 70 && studentPercentage < 80){
        scoreText = `You got C (${studentPercentage})`;
    } else if(studentPercentage >= 60 && studentPercentage < 70){
        scoreText = `You got D (${studentPercentage})`;
    } else{
        scoreText = `You got F (${studentPercentage})`;
    }

    return scoreText;
}

console.log(getScore(75, 100));
console.log(getScore(95, 100));