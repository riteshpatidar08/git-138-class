//WHAT IS SCOPE ?

//GLOBAL SCOPE AND LOCAL SCOPE (BLOCK SCOPE AND FUNCTION SCOPE);

// outside of any block or any function the variable will be declared in global scope.

// let a = 4 ;

//block
//block
if (true) {
  let a = 4; //reference error outside of this block
  const b = 5; //reference error outside of this block
  var c = 10; //leaks we can access its value out side of block
}

function test() {
  let a = 10;
  const b = 20;
  var c = 40;
}
console.log(c);

//lexical scope

let college = 'skit';

function outer() {
  let section = 'C';
  function inner() {
    console.log(section);
    console.log(college);
  }
  inner();
}

outer();

//NOTE What is scope ?
//NOTE Block scope ? (local scope)
//NOTE Function scope ? (local scope)
//NOTE Global scope ? (global)
//NOTE Lexical scope ?
//NOTE Shadowing ?
//NOTE Scope chaining ?

function newTest(a, b) {
  console.log(arguments);
  console.log(a, b);
}
newTest(2, 4);

const newTest1 = function (a, b) {
  console.log(arguments);
};

newTest1(1, 2);

const newTest2 = (a, b) => {
  console.log(arguments);
};
newTest2(3, 4);
