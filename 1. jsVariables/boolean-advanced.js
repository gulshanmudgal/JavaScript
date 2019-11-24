let isAccountlocked = false;
let user = 'admin';

if(isAccountlocked){
    console.log('Account Locked!!!');
} else if(user === 'admin'){
    console.log('Welcome, Admin');
} else{
    console.log('Welcome');
}


//Challenge Area
let temp = 45;

if(temp <= 32) {
    console.log('it\'s Freezing out there!');
} else if(temp >= 110) {
    console.log('it\'s way too hot out there!');
} else {
    console.log('It\' alright to go out');
}