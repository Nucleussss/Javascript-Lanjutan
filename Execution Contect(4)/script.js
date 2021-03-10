// Execution Contect / tahapan eksekusi code 
// Hoisting & Scope


//      Creation phase
// proses Hoisting 
// menaikan variabel dan function terlebih dahulu lalu mengisi variable dengan nilai undifend
// dan mengisi function dengan isi dari function itu sendiri.

//      Execution phase
// lanjut ke proses eksekusi code, seperti mengisi variable dengan nilai yang diinputkan.


// Contoh Kasus :
// Membedah proses eksekusi dari code berikut.

function satu() {
    // 5. mengisi variable local dengan undefined
    // var nama = undefined; 

    var nama = "sandika";   // 6. mengisi nama dengan "sandika"
    console.log(nama);  // 7. -> menampilkan "sandika" yang diambil dari variable local
}

function dua() {
    console.log(nama);  // 9. menampilkan "erik" yang berasal dari variable global
}

// 1. hoisting -> mengisi variable dengan undefined
// var nama = undefined;

console.log(nama);  // 2. -> menampilkan nilai undefined
var nama = "erik";  // 3. -> mengisi nama dengan "erik"
satu();             // 4. menjalankan fungsi satu 
dua("doddy");       // 8. menjalankan fungsi dua
console.log(nama);  // 10. menampilkan "erik" yang berasal dari variable global