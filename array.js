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
// myArray.push('khairul', 22);
// // console.log(myArray.join(' - '));
// myArray.pop();
// console.log(myArray.join(' - '));

// // 3. unshift & shift = menambah & menghapus index pertama pada array
// myArray.unshift('mutaqim');
// // console.log(myArray.join(' - '));
// myArray.shift();
// console.log(myArray.join(' - '));

// 4. splice
// SecurityPolicyViolationEvent(indexAwal, mauDihapusBerapa, emelenBaru1, emelenBaru2, ...)
myArray.splice(2, 0, 'jenab', 'siti');
console.log(myArray.join(' - '));

// 5.slice = seperti mengiris nilai yang ada pada array. Dan slice akan membuat array baru tanpa menghilangkan array sebelumnya
let myArray2 = myArray.slice(0,2);
console.log(myArray2.join(' - '));

// 6. forEach likes a loop
let nama = ['jenap', 'lilis', 'naon'];
// nama.forEach(function(n) {
//     console.log(n);
// });

// map mengembalikan nilai array
let angka = [1,2,3,4,5,6,7,8,9];
let angka2 = angka.map(function(e) {
    return e * 3;
});
console.log(angka2);

// sort mengurutkan nilai array
let angka1 = [1,2,72,123,28,3,4,5,6,7,8,9,1000];
angka1.sort(function(a,b) {
    return a-b;
});
console.log(angka1);
// console.log(angka1.sort());

// find (satu nilai) & filter (banyak nilai)
let filterAngka = angka1.filter(function(x) {
    return x > 500;
});
console.log(filterAngka);

let findAngka = angka1.find(function(z) {
    return z > 10;
});
console.log(findAngka);