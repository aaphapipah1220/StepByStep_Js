// memunculkan seluruh isi array manual
// let myArray = ['aap', 'isra', 1, 2, true];
// console.log(myArray);

// for(let i = 0; i < myArray.length; i++){
//     console.log(myArray[i])
// }

// menambahkan isi array manual
// let herArray = [];
// herArray[0] = 'abc';
// herArray[1] = 1;
// console.log(herArray);

// method pada array
let myArray = ['aap', 'isra', 1, 2, true];
// 1. join
// console.log(myArray.join(' - '));

// 2. push & pop = menambah & menghapus index terakhir pada array
myArray.push('khairul', 22);
// console.log(myArray.join(' - '));
myArray.pop();
console.log(myArray.join(' - '));

// 2. unshift & shift = menambah & menghapus index pertama pada array
myArray.unshift('mutaqim');
// console.log(myArray.join(' - '));
myArray.shift();
console.log(myArray.join(' - '));