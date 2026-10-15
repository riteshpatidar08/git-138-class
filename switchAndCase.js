//NOTE switch and case
let x = 3;
switch (x) {
  case 1:
    console.log('ONE');
    break;

  case 2:
    console.log('TWO');
    break;

  default:
    console.log('value doesnot match');
}

//NOTE multiple cases grouping
const status = 201;
switch (status) {
  case 200:
  case 201:
  case 202:
  case 203:
    console.log('Ok responses status code');
    break;

  case 400:
  case 401:
    console.log('client side error');
    break;
  default:
    console.log('No status found');
}
// fall-through

// case 200
// status = 200 , 201 console.log('ok response')
// 400, 401 => client side error

let username = 'ritesh123';
let password = 'ritesh888';

switch (username) {
  case 'ritesh123':
    switch (password) {
      case 'ritesh123':
        console.log('user is logged in');
        break;
      default:
        console.log('password donot match');
    }
    break;
  case 'vipul123':
  case 'sarthak123':
  case 'naman123':
  default:
    console.log('user with this username is not available');
}

// > 80 => old
// > 50 => middle age
// >30 =>  young
//     >18 => adult

// switch(age>90) => true
// case true

let age = 81;

switch (true) {
  case age >= 80:
    console.log(`TAG : VERY OLD - AGE OF PERSON IS ${age}`);
    break;

  case age >= 50:
    console.log(`TAG : MIDDLE AGE - AGE OF PERSON IS ${age}`);
    break;
}

//NOTE nested switch case :

//NOTE TEMPLATE LITERALS  :
const firstName = 'ritesh';
const email = 'ritesh@gmail.com';
console.log('My name is' + ' ' + firstName);
console.log(`My name is ${firstName} and my email is ${email}`);
