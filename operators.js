//NOTE OPERATORS :

// 5 + 5 => 2 operands  + operator

//NOTE airthmatic operator
// + , - , * , /  , ** , %

// 5 * 10 / 5

//NOTE assignment operator
//NOTE  =
//NOTE +=
//NOTE  -=
//NOTE *=
//NOTE /*
//NOTE **=

//NOTE comparison operator

//NOTE relational comparison  = < , > , >= , <=
//NOTE equality comparison  == , === , != , !==
//NOTE ==(loose equality )
//NOTE === strict equality
//NOTE !=   loose not equal
//NOTE !== strict not equal

//NOTE logical operator && || !(unary)

// && 1 kab deta hain jab operand kya ho 1 and 1 baki 0
// || 0 kb deta hain jab operand donot 0 ho
console.log(0 || 1);
console.log(1 || 1);
console.log(true || false);

// OR shortCuit evaluation
console.log('test' || null);
console.log(undefined || 45 || 'ritesh');
console.log(-0 || undefined || ' ');
// const products = products || [] ;
// Boolean(-0);

// AND shortCuit evaluation
console.log(undefined && null && 1);
console.log(undefined && 0);
console.log(true && 'samsung-tv'); // most used pattern in reactjs in rendering

// use case  [{name : "amit"}, {name:'rohan'}] && <h1>{user.name}</h1> in react
console.log('fdjk' > 0 || 4);
// console.log(false || 4)
//NOTE 'fdfd'=>type coercion => number /NAN > 0 false => 0 > 0 => false || 4 => 4

//NOTE ?? nullish coealsing operator
// it looks for null and undefined
// how it is different from or shortcuit evaluation null and undefined
// console.log('bye' ?? 'hello');
// undefiend
// const username = user.name ?? 'test-user'
// unary operator
let a = 4;
console.log(a++); //4
console.log(a); //5;
console.log(++a); //6
console.log(a--); //6
console.log(--a); //4
let b = 10;
console.log(++b + --b);

//NOTE  ternary operator ? :

true ? console.log('value is true') : console.log('value is false'); //react
