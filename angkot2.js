// for (let angkot = 1; angkot <= 6; angkot++) {
//     console.log('Angkot no. ' + angkot + 'beroperasi dengan baik');
// }

let jumlahAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik');
    noAngkot++;
}

for(noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi')
}