//NOTE FUNCTION DECLARATION

printName();

function printName() {
  console.log('test');
}

//NOTE we can call function declaration type before declaration the function.

//NOTE FUNCTION EXPRESSION ;
// printNumber();
//NOTE ReferenceError: Cannot access 'printNumber' before initialization
//NOTE ReferenceError: collegeName is not defined; console.log(collegeName);

const printNumber = function () {
  return '1,2,3,4,5,6,7,8';
};

//NOTE we cannot call function expresssion before declaring it .

//NOTE ARROW FUNCTION;

const sum = () => {
  return 4 + 4;
};
sum();

//VARIATION OF WRITING AN ARROW FUNCTION

//NOTE if i have single paramter

const sumTwo = (a) => {
  return a + a;
};
//NOTE if i have single statement in function body ;
const sumThree = (a) => a + a;

const sumFour = (a, b) => {
  const z = 4;
  return a + b;
};
console.log(sumFour(1, 2));

//functions
//scope
//array and object
//spread operator / desturcutring
//array and object methods + string
//javascript internals (call stack , call heap , primitives , non primivites , event loop , callback queue , memory allocation )

//NOTE what is the difference between function declaration , function expression and arrow function ?

//NOTE IMP (HIGHER ORDER FUNCTION ) ;

//NOTE in javascript function treated as value
//NOTE first class functions

//NOTE higher order function => hof is a function which accpets a fn a paramter and also return a function
//NOTE Callback => callback fn is a function we passed  as an argument to another function , and that function is going to call that function.
function test(callback) {
  callback(); // callback     console.log(callback)
}

function input() {
  console.log('this function is called by test function');
}
// console.log(input)

test(input);

// test(function(){});

//NOTE variation 2
function neww(callback) {
  callback();
}

new (function () {
  console.log('i am a callback fn');
})();

//NOTE ***** variation 3 with arrow as a callback function
function newTest(callback) {
  callback();
}

newTest(() => {
  console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii i am arrow fn');
});

// function sum(a,b){
//   return a + b
// }
// const x = 4 ;
// const y = 4 ;
// sum(1,2)

//NOTE if isData flag is true you have to call a cb function pass the data as arugument in that cb and log the user data in the cb function ;

//

function dataRead(callback, isData) {
  let usersData = ['ritesh@123', 'raman@123'];
  if (isData) {
    callback(usersData);
  }
}

dataRead((usersData) => {
  console.log(usersData);
}, true);

// const multiply  = (a,b)=> a*b ;

function calculate(callback) {
  callback(1, 2);
}

calculate((a, b) => a * b);

//IIFE
(function () {
  console.log('database connected');
  console.log('cloudinary instance created');
})();

// testnew(()=>{
// });

//IIFE (immediately invoked function expression) ;
