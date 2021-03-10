const angka = [-1,8,9,1,4,-5,-4,3,2,9];

//      mencari angka >= 3

// menggunakan for
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         angka2.push(angka[i]);
//     }
// }
// console.log(angka2)

// menggunakan filter()
// let angka2 = angka.filter(e => e >= 3);
// console.log(angka2);


//      mengkalikan semua angka dengan 2
// menggunakan map()
// const hasilKali = angka.map( e => e * 2);
// console.log(hasilKali);


//      menjumlahkan semua isi array angka
// menggunakan reduce(
// const hasilJml = angka.reduce((total,currentVal) => total + currentVal, 0);
// console.log(hasilJml);


// menggabungkan semua function  berikut menjadi 1 deklarasi
// dengan method cain yaitu di tandai dengan titik(.)

let angka2 = angka.filter(e => e > 5)
    .map( e => e * 3)
    .reduce((total,currentVal) => total + currentVal);

console.log(angka2);



