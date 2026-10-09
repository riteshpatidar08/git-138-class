// // NOTE Javascript is a high level language interpreted , dynamically typed , single threaded , first class function and multi paradigm language
// //javascript js engine  v8 engine , spidermoney firebox

// //NOTE website;
// //NOTE variables  let , const , var
// //NOTE  Variables is a pointer (name) where the values is stored in the memory.
// //NOTE keywords are the reserved words for language  , each keyword have specific meaning ;
// //NOTE javscript does not have variable type it only have value type ;

// //NOTE variable
// //NOTE  keywords used to cretae variables

// let language = 'JS'; //declaration and intialization
// language = 'java';
// console.log(language);

// let schoolName; //only declare cannot initiliaze with value (so js internally set undefined)
// console.log(schoolName);

// //NOTE variables created using let can be reassign and cannot redeclare (we cannot create another variable using same name used before)

// //NOTE const

// const metersInKm = 1000; //NOTE variables declare with const keyword must intialize

// //NOTE variables declare with usig const cnnot be reassign and redeclare

// //NOTE var  (legacy keyword)

// var stack = 'MERN';
// stack = 'MEAN'; //reassign

// console.log(stack);

// var stack = 'PERN'; //redeclaration

// console.log(stack);

// //NAMING CONVENTION  how to name a variables
// // camelCase =>  firstName
// // pascalCase => FirstName
// // snakeCase => first_name python / sql
// // sql + node  camelCase => snake_case
// // name , firstName , lastName , collegeName => name , first_name , last_name , college_name

// // let firstName = 'ritesh' ✔️ ;

// // let first_nmae = 'ritesh' ;
// // let $firstname = 'dfd';
// // let firstName2 = 'dfg';

//NOTE Datatypes :

//NOTE String , Number , null , undefined , boolean , object ,       (BigInt , Symbol);

let language = 'Javscript';

//NOTE explicity string  implicity
console.log(language);
console.log(typeof language); //string

let age = 20;
console.log(typeof age);

//NOTE boolean variables naming
let isError = true;
//  isError , isLoading , isAuthenticated , isLoggedIn , isOpen , isEdit  ;

//NOTE   undefined ;

let collegeName;
console.log(typeof collegeName); //undefined absence of value

let price = null;
console.log(typeof null); //object

//NOTE object
const arr = [1, 2, 3, 4, 5];
console.log(typeof arr); //Note skip if you are new to array.

function test() {
  return 'hello';
}
console.log(typeof test); //NOTE you can skip if you are new to functions.

const car = {
  carName: 'test',
};

console.log(typeof car); //NOTE skip this if you are new to object.

//TODO point to remember :  the datatype of function is function but it is a callable object  we set properties on the functons in js and also call methods on the function.
// test.name = 'ritesh';
// test.firstname = 'new'
// console.log(test.firstname)
// test.apply() , test.bind()  ,
// let data ;
// console.log(data)
//words => intialization , declaration , implict , explicit , literal
// implict / jab language khud kare
// explict / jab user batata hain
// let firstName:string= 'test'

//TODO remember  BigInt + Symbol (going to cover in later section indepth with useCase);

//NOTE TYPE CONVERSION(explicit) + TYPE COERSION(implicit);

//TODo Remember => NaN , 'abc' => NaN  '1' => it going to convert into the number.

// console.log(Number(null));
// console.log(Number(undefined))

//use => localhost:5173/1 => '1' => Number('1') => 1 ;

// /NOTE ***** Boolean

//NOTE Truthy and fasly values kya hoti hain 

//NOTE when we convert any value or variable into boolean either it gives true or false , if it is giving false the value will be called falsy value  

console.log(Boolean('abc')); //true
console.log(Boolean('')); //false       //falsy values
console.log(Boolean(0)); //false        //falsy value
console.log(Boolean(false)); //false      //falsy value
console.log(Boolean(null)); //false       //falsy value
console.log(Boolean(undefined)); //false   //falsy value
console.log(Boolean(NaN)); //false       //falsy value
console.log(Boolean(-4)); //true
// console.log(Boolean([]))

console.log(String(2));
console.log(String(false));


//NOTE OPERATORS :  

// 5 + 5 => 2 operands  + operator

//NOTE airthmatic operator 
// + , - , * , /  , ** , % 

