// const greetUser = function(){
//     console.log('Hello User');
// }

// greetUser();

const farheniteTocelsius = function(tempInFarhenite){
    let tempInCelsius = (tempInFarhenite - 32) * 5/9;

    return tempInCelsius;
}

console.log(farheniteTocelsius(68));