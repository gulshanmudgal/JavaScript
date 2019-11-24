let name = 'Gulshan Kumar';

console.log(name.length);
console.log(name.toUpperCase());

let password = 'let@password';

let isValid = false;
isValid = (password.length >= 8) && !(password.toLocaleLowerCase().includes('password'));

console.log(isValid);