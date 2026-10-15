//NOTE what is conditional Statement ?
//NOTE expression and statement

// if(condition){

// } else if(conditon){

// } else{

// }
// one liner
if (true) console.log('this something');
//truthy and falsy values
let data = 'products';
if (data) {
  console.log(data);
} else {
  console.log('data is not available');
}

// if else
let status = 'success';
if (status === 'pending') {
  console.log('data is in fetching mode...');
} else if (status === 'success') {
  document.write('<h1>Data fetching completed !</h1>');
} else {
  console.log('something went wrong');
}

//  window interaction  functions :
// alert() , prompt() , confirm();
// alert('hellooooo');
// let input = prompt('enter your name');
// let NumInput = Number(prompt('enter the product price'));
// alert(input);
// alert(typeof NumInput);
// let isAvailable = confirm("are you available for today's meeting");
// console.log(isAvailable);

//NOTE find the largest a,b,c ;  conditional ;

//NOTE create a user login system using nested if else :
//NOTE 1. check username  2. if correct check password 3.if correct look for isVerified flag 4. if exist look for role === 'admin' 5. if matched then show "Hello {username} , Welcome to dashboard"
//NOTE  2. take all the input using prompt.

let experiance = 4;
let skills = 'js';
if (experiance === 4) {
  if (skills === 'js') {
    console.log('we have found our candidate');
  } else {
    console.log('skills doesnt match');
  }
} else {
  console.log('we are looking candidate with over 4+ years of experiance');
}

//SOlUTION

let username;
let password;
let isVerified;
let role = 'customer';

// const isRegister = confirm('Click below to start registering');

// if (isRegister) {
//   username = prompt('Enter username');
//   password = prompt('Enter your password');
//   isVerified = true;
// }
// console.log(username, password, isVerified, role);

//NOTE ternary operator
let statuss = 500;
statuss === 200
  ? console.log('OK')
  : statuss === 500
  ? console.error('Internal server error')
  : console.log('status value not found');

let course = 'mern';
let isPaid = true;

course === 'mern'
  ? isPaid
    ? (console.log('course is paid , i am not joining'), console.log('hello'))
    : console.log('i will join ')
  : console.log('mern course is not available');
// isTrue ? value dfj ? value2

if (false) {
  console.log('hello');
  console.log('hi');
}

// 46(tricky questions)
//  + 20   200+