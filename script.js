// NOTE javascript is a high level language interpreted , dynamically typed , single threaded , first class function and multi paradigm language
//javascript js engine  v8 engine , spidermoney firebox

//NOTE website;
//NOTE variables  let , const , var
//NOTE  Variables is a pointer (name) where the values is stored in the memory.
//NOTE keywords are the reserved words for language  , each keyword have specific meaning ;
//NOTE javscript does not have variable type it only have value type ;

//NOTE variable
//NOTE  keywords used to cretae variables

let language = 'JS'; //declaration and intialization
language = 'java';
console.log(language);

let schoolName; //only declare cannot initiliaze with value (so js internally set undefined)
console.log(schoolName);

//NOTE variables created using let can be reassign and cannot redeclare (we cannot create another variable using same name used before)

//NOTE const

const metersInKm = 1000; //NOTE varibles declare with const keyword must intialize

//NOTE variables declare with usig const cnnot be reassign and redeclare

//NOTE var  (legacy keyword)

var stack = 'MERN';
stack = 'MEAN'; //reassign

console.log(stack);

var stack = 'PERN'; //redeclaration

console.log(stack);
