// let angka = parseInt(prompt('masukan angka : '))

// if else
// if(angka == 1) {
//     alert('anda memasukan angka 1');
// } else {
//     alert('anda memasukan angka ' + angka);
// }

// if else if else
// if(angka % 2 === 0) {
//     alert('anda memasukan bilangan genap');
// } else if(angka % 2 === 1) {
//     alert('anda memasukan bilangan ganjil');
// } else {
//     alert('anda memasukan ' + angka);
// }


// switch
// switch(angka) {
//     case 1 : //ini harus nilai. tidak bisa memakai kondisi
//         alert('anda memasukan angka 1');
//         break;
//     case 2 :
//         alert('anda memasukan angka 2');
//         break;
//     default :
//         alert('anda memasukan angka random');
//         break;
// }


let item = prompt('masukan makanan kesukaan anda : ');

switch(item) {
    case 'nasi' :
    case 'jagung' :
    case 'nasi goreng' :
        alert('anda menyukai makanan sehat');
        break;
    case 'pizza' :
    case 'hot dog' :
        alert('anda menyukai makanan tidak sehat');
        break;
    default :
        alert('saya tidak mengerti maksud anda');
        break;
}