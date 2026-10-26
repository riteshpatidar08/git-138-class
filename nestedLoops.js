//NOTE NESTED LOOPS ::

for (let outer = 1; outer <= 5; outer++) {
  for (let inner = 1; inner <= 5; inner++) {
    console.log(outer, inner);
  }
}

// 1 , 1
// 1, 2
// 1,3
// 1,4
// 1,5
// 2 , 1
// 2,2
// 2,3
// 2,4
// 2,5

//NOTE  i <= 10 let i = 1 /
//NOTE j <= 10 let j = 1
//NOTE  print the table from 1 to 10 using nested loops ..

//NOTE sqaure with numbers
let totalRows = 5;
for (let i = 1; i <= totalRows; i++) {
  let stars = '';
  for (let j = 1; j <= totalRows; j++) {
    stars += `${j} `;
  }
  console.log(stars);
}

let totalRowss = 8;
for (let i = 1; i <= totalRowss; i++) {
  let stars = '';
  for (let j = 1; j <= totalRowss; j++) {
    stars += `${j} `;
  }
  console.log(stars);
}

//note right triangle
for (let i = 1; i <= 5; i++) {
  let stars = '';
  for (let j = 1; j <= i; j++) {
    stars += '* ';
  }
  console.log(stars);
}

//note inverted right traiangle
for (let i = 5; i >= 1; i--) {
  let stars = '';
  for (let j = 1; j <= i; j++) {
    stars += '* ';
  }
  console.log(stars);
}

// i = 1
// start = '' ;
// j = 1 , 1 <= 5 : true
// start = '* '
// j = 2 , 2 <= 5 ; true
// star = '* * '

// j = 5 , 5 <= 5 ; true
// star ='* * * * *'
// j = 6 , false

// i = 2

// *****
// *****
// *****
// *****
// *****
