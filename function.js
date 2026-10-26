//What is function ?

// rows = 8 pomendra
// paramters variables => argument store hoga
function printRightTraingle(rows) {
  for (let i = 1; i <= rows; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
      stars += '* ';
    }
    console.log(stars); //function body logic run krna hain when i call a function resuable logic
  }
}
//call the function
//pomendra
printRightTraingle(8); //argument => real values
printRightTraingle(10);
printRightTraingle(12);

function printDetails(username, cityName) {
  return `my name is ${username} , i lived in ${cityName}`;
  //  console.log('hello')
}
const res = printDetails('pomendra', 'jaipur');
console.log(res);

function printHallowPattern(n) {
  //outerloop
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        row += '*';
      } else {
        row += ' ';
      }
    }
    console.log(row);
  }
}

printHallowPattern(10);
// printDetails('pomendra' , 'jaipur')
// printDetails('pomendra' , 'jaipur')
// printDetails('pomendra' , 'jaipur')

//NOTE create a function to print Hallow square pattern ?
// write to function to check a number is even and odd ?
//NOTE create a function print multiplication table ?
// multiplicationtable('table from 1 to 50' , '50*30')

//NOTE Pyramid , Inverted pyramid , Hourglass Pattern + Diamond Pattern
//NOTE HOURGLASS PATTERN => Inverted + Pyramid
//NOTE DIAMOND PATTERN  => Pyramid + Inverted
