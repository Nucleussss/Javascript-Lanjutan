//      Arrow function

// Macam2 penulisan Arrow function

// Arrow function tanpa parameter
// jika tanpa parameter kurung() harus tetap di tulis
const tampilHello = () => `Hello World`; 
console.log(tampilHello());

// Arrow function 1 parameter
// apabila codenya hanya 1 baris maka tidak perlu kurung kurawal{} 
// dan juga tidak perlu return,ini disebutnya dengan Implisit Return
const tampilNama = nama => `halo ${nama}`; 
console.log(tampilNama("aditya"));

// Arrow function 2 parameter
// apabila ada 2 paramaeter maka harus menggunakan kurung() 
const tampilNama2 = (nama,waktu) => `halo ${nama},selamat ${waktu}`; 
console.log(tampilNama2("darmanu","siang"));



// Study Case
const nama = ["samiaji","puji","koswara"];

// membuat fungsi yang menghitung jumlah huruf untuk setiap nilai padda array.
const jumlahNama = nama.map(nama => nama.length);
console.log(jumlahNama)

// menampilkan  object objNama 
const objNama = nama.map(nama => 
    ({nama:nama,
    jmlHuruf:nama.length})
)
console.table(objNama);
