// === - Equality operator with type checking
// !== - Inequality operator with type checking
// == - Equality operator without type checking
// != - Inequality operator without type checking
// > - greater than operator
// < --less tha operator
// >= - greater than equal to
// <= - less than equal to

let equals = "32" !== 32;

//console.log(equals);


//Challenge Area
let age = 65;

let isChild = age <= 7;
let isSenior = age >= 65;

if(isChild){
    console.log('You are eligible for childs discounted rate');
}

if(isSenior){
    console.log('You are eligible for seniors discounted rate');
}