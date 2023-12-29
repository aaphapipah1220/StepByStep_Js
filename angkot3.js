let jumlahAngkot = 10;
let angkotBeroperasi = 6;

for(let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {

    if(noAngkot <= angkotBeroperasi) {
        console.log('angkot ' + noAngkot + ' beroperasi dengan baik');
    } else {
        console.log('angkot ' + noAngkot + ' tidak beroperasi');
    }
    
}