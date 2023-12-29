let jumlahAngkot = 10;
let angkotBeroperasi = 6;
let angkotSelesai = 8;

for(let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {

    if(noAngkot <= angkotBeroperasi) {
        console.log('angkot ' + noAngkot + ' beroperasi dengan baik');
    } else if(noAngkot === angkotSelesai || noAngkot === 10){
        console.log('angkot ' + noAngkot + ' sedang lembur');
    } else {
        console.log('angkot ' + noAngkot + ' tidak beroperasi');
    }
    
}