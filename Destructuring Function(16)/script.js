// Destructuring Function

//      memecah array hasil dari function menggunakan destructuring
// kekurangannya adalah, urutan value array yang diterima pasti sama dan tidak bisa di ubah.
// misal kita ingin menaruh variable perkalian di awal tetapi ternyata isinya adalah penjumlahan
// ini bisa terjadi karena urutan saat function dijalankan, yang mana urutan proses difunctionnya adalah [penjumlahan , perkalian]
// tetapi kita mengdestructuringnya dengan urutan [perkalian , penjumlahan]
// maka saat kita console.log() perkalian yang ditampilkan di konsole adalah hasil dari penjumlahan.
// ini sangat tidak flexible.
// function kalkulasi (a,b) {
//     return [a + b,a * b];
// }
// const [kali, jumlah] = kalkulasi(3,5); 
// console.log(kali);

//      kita juga dapat memberikan nilai default
// dengan menambahkan tanda(=) dilanjutkan nilai defaultnya
// function kalkulasi (a,b) {
//     return [a + b,a * b];
// }
// const [kali, jumlah, kurang = 'tidak ada'] = kalkulasi(5,2); 
// console.log(kurang);


//      apabila kita ingin membuat destructuring variable,tetapi tidak ingin memperdulikan urutan
// dari functionnya maka kita harus membuat function tersebut mereturn object
// bukan array.
// function kalkulasi(a,b) {
//     return { 
//         tambah : a + b,
//         kurang : a - b,
//         kali : a * b,
//         bagi : a / b
//     }
// };
// harus menggunakan ({}) apabila ingin membuat destructuring object
// disini urutan tidak berpengaruh karena menggunakan destructuring object
// const {tambah , kali ,kurang , bagi} = kalkulasi(10,5);
// console.log(kali);


//      Destructuring function argument
// kita bisa mengambil properti yang dibutuhkan saja dengan cara memecahnya
const mhs = {
    nama : 'aditya',
    kelas : '3g',
    email : 'oraora@gmail.com',
    nilai :{
        tugas : 80,
        uts : 90,
        uas : 85
    }
}
// memecah object menggunakan destructuring pada parameter/argument
// sehingga bisa kita permudah pemanggilannya dengan hanya menulis nama properti yang akan dipanggil saja  
function ambilValue({nama,email,nilai:{tugas,uas}}) {
    return `nama saya ${nama}, email saya adalah ${email} 
    nilai uas saya ${uas}.`;
};
console.log(ambilValue(mhs));







