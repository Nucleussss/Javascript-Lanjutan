function Mahasiswa(nama,nim) {
    this.nama = nama,
    this.nim = nim
}
const doddy = new Mahasiswa("doddy",234444);
const muklis = new Mahasiswa("muklis",23423523);

//      Template Literal

// menggunakan back tick
// untuk membuat tamplate literal kita membutuhkan backtick.
const nama = `aditya putra prasetya`;

// Multi-line string
// membuat multiline string dengan backtick dan enter
// untuk membuat baris baru.
const nama2 = `sarotobi
bin
muklis`;

// Embeded exspression
// kita juga bisa menambahkan exspresion di dalam template literal.
const sapaMuklis = `Halo nama saya ${muklis.nama}, dan nim saya adalah ${muklis.nim}`

//      HTML fragment
const kelas = document.querySelector(".kelas");

// 1. HTML fragment simple
// const el = `<div class="mhs">
//     <ul>
//         <li>nama : ${doddy.nama} /li>
//         <li>nim : ${doddy.nim}</li>
//     </ul>
// </div>`;
// kelas.innerHTML = el;

// 2. Looping di HTML fragment
// const mhs = [
//     {
//         nama:'sarmajai',
//         kelas: '5d'
//     },
//     {
//         nama:'wahyudi',
//         kelas: '3t'
//     },
//     {
//         nama:'marwa',
//         kelas: '9k'
//     },
// ];

// const el = `<div class="mhs">
//     ${mhs.map( e => {
//         return `<ul>
//             <li>nama : ${e.nama}</li>
//             <li>kelas : ${e.kelas}</li>
//         </ul>`
//     }).join('')}
// </div>`
// kelas.innerHTML = el;


// 3.pengkondisian di dalam html fragment
// const lagu = {
//     penyanyi: "snapdoog",
//     judul: "tarera rera",
//     featuring : "wahyudi"
// };

// const tampil = `<div class="lagu">
//     <ul>
//         <li>penyanyi : ${lagu.penyanyi}</li>
//         <li>judul : ${lagu.judul} ${lagu.featuring ? `(feat.${lagu.featuring})` : ``}</li>
//     </ul>
// </div>`;
// kelas.innerHTML = tampil;

// 4. neasted
// HTML fragment bersarang

const mhs = {
    nama:'sarasvati',
    kelas:'A',
    matakuliah :[
        'pemrograman beroreantasi object',
        'Graf dan auto mata',
        'matematika komputasi',
        'bahasa inggris'
    ]
};

const tampilMhs = `<div class="mhs">
    <h3>Nama : ${mhs.nama}</h3>
    <h3>Kelas : ${mhs.kelas}</h3>
    <h3>Matakuliah :</h3>
    <ol>
        ${mhs.matakuliah.map( matkul => {
            return `<li>${matkul}</li>`
        }).join("")}
    </ol>
</div>`;

kelas.innerHTML = tampilMhs;
console.log(el)