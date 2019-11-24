//undefined for variable

let name;

if(name === undefined){
    console.log('Please enter your name');
}
else{
    console.log(name);
}

//undefined as parameter argument
let square = function(num){
    console.log(num);
}

square();

//undefined as return type
let result = square(3);
console.log(result);


//Using null

let age = 27;

age = null;

console.log(null);