// membuat Object / function

// cara 1 - function declaration
// this dalam declaration mengembalikan nilai global
function halo() {
  console.log("hallo bro");
}
halo();

// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`met makan ${nama}`);
//   };

//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`yah main mulu si lu ${nama}`);
//   };

//   return mahasiswa;
// }
// let aap = Mahasiswa("Aap", 10);

// cara 2 - object literal
// this dalam literal mengembalikan nilai yang bersangkutan
let obj = {};
obj.say = function () {
  console.log("hi this is example from object literal");
};
obj.say();

// let human = {
//   nama: "kucing",
//   nyawa: 10,
//   makan: function (porsi) {
//     this.nyawa += porsi;
//     console.log(`hi bro ${this.nama} selamat makan yup!`);
//   },
// };

// cara 3 - constructor
// this dalam constructor mengembalikan nilai yang baru
function said() {
  console.log("this one example from constructor");
}
new said();

function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`met makan ${nama}`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`yah main mulu si lu ${nama}`);
  };
}
let aap = new Mahasiswa("Aap", 10);
