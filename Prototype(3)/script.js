
//      versi Prototype

// function Mahasiswa (nama,energi) {
//     this.nama = nama;
//     this.energi = energi;

// }

// Mahasiswa.prototype.makan =  function (porsi) {
//     this.energi += porsi;
//     console.log(`selamat makan! ${this.nama}`);
// };
// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     console.log(`selamat main! ${this.nama}`);
// };
// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += (jam * 2);
//     console.log(`selamat tidur! ${this.nama}`);
// };

//      Versi Class
class Mahasiswa {
    constructor (nama, energi){
        this.nama = nama;
        this.energi = energi;
    }
    
    makan (porsi) {
        this.energi += porsi;
        console.log(`selamat makan! ${this.nama}`);
    };

    main (jam) {
        this.energi -= jam;
        console.log(`selamat main! ${this.nama}`);
    };

    tidur (jam) {
        this.energi += (jam * 2);
        console.log(`selamat tidur! ${this.nama}`);
    };
}


let salim = new Mahasiswa("kodir",20);

console.log(salim.makan(2));
console.log(salim.energi);
console.log(Number.prototype);