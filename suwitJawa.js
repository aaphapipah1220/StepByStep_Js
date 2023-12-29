let player = prompt('pilih : gajah, semut, orang :' );

var enime = Math.random();
if(enime < 0.35) {
    enime = 'gajah';
} else if(enime >= 0.35 && enime < 0.73) {
    enime = 'orang';
} else {
    enime = 'semut';
}

let result = '';

if(player == enime) {
    result = 'SERI';
} else if (player =='gajah') {
    // if(enime == 'orang') {
    //     result = 'MENANG';
    // } else {
    //     result = 'KALAH';
    // }
    result = (enime == 'orang') ? 'MENANG' : 'KALAH';
} else if (player == 'orang') {
    result = (enime == 'gajah') ? 'KALAH' : 'MENANG';
} else if (player == 'semut') {
    result (enime == 'orang') ? 'KALAH' : 'MENANG';
} else {
    result = 'memasukan pilihan yang salah'
}

alert('Kamu memilih : ' + player + ' dan komputer memilih : ' + enime + '\n Maka hasilnya : Kamu ' + result);