let penumpang = ['aap', 'neng'];

let tambahPenumpang = function(namaPenumbang, penumbang) {
    if (penumbang.length == 0) {
        penumbang.push(namaPenumbang);
        return penumbang;
    } else {
        for( let i = 0; i < penumbang.length; i++) {
            if(penumbang[i] == undefined) {
                penumbang[i] = namaPenumbang;
                return penumbang;
            }
            
            else if (penumbang[i] == namaPenumbang) {
                console.log(namaPenumbang + ' sudah ada didalam angkot');
                return penumbang;
            }

            else if (i == penumbang.length - 1) {
                penumbang.push(namaPenumbang);
                return penumbang;
            }
        }
    }
}