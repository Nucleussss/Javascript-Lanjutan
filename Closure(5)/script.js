// CLOSURE 
// closure adalah sebuah function yang dikembalikan oleh function lainnya,
// dan memiliki akses ke parent functionnya.

function init() { // outer function
    let nama = "sapik" // local variable

    function tampilNama() { // inner function (closure*)
                            // begitu innner function memerlukan akses ke outer function
                            // maka itu disebut dengan Closure

        console.log(nama); // akses ke parent variable
    }
    tampilNama();
}
init();

// Lexical Scope
// proses penelusuran variable nama yang akan di tampilkan ke console.log(nama).

// Tujuan penggunaan Closure
// - untuk membuat function Factories.
// - untuk membuat private Method.

// Function Factories
function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`halo ${nama}, Selamat ${waktu}.`);
    }
}
// function ucapkanSalam dijalankan sebagian
let selamatPagi = ucapkanSalam("pagi");

// function selamatPagi merepresentasikan inner function yang ada didalam function ucapkanSalam
selamatPagi("sapi'i");


// private Method

// IIFE (immediately invoked function ekspresion)
// membuat variable yang didalam IIFE menjadi tidak dapat diakses dari luar alias Private
let tambah = (function() {
    let counter = 0;

    return function () {
        return ++counter;
    }
})();

console.log(tambah());
console.log(tambah());
console.log(tambah());