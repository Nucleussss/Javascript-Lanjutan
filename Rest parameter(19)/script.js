//      Rest Parameter

// Merepresentasikan argument pada function menjadi sebuah array 
// function funcW(a,b, ...arg) {
//     return arg;
// };
// console.log(funcW(1,2,3,4,5));

//  melakukan penjumlahan dengan Rest Parameter
// function funcW( ...arg) {
//     return arg.reduce( (accumulator, currentVal) => accumulator  + currentVal);
// };
// console.log(funcW(1,2,3,4,5));

// kita juga bisa melakukan array destructuring dengan rest parameter
// const kelompokMewarnai = ['samiaji','jupri','samin'];
// // maka element pertama akan masuk ke var ketua lalu yang lainnya-
// // akan menjadi array anggota. 
// const [ketua , ...anggota] = kelompokMewarnai;
// console.log(anggota); 

// object destructuring dengan rest parameter
// const team = {
//     pm : 'nurudin',
//     frontend : 'saipuji',
//     beckend : 'darmaji'
// };
// const {pm , ...anggota} = team;
// console.log(pm);
// for (const e in anggota) {
//     console.log (anggota[e])
// };


// filtering dengan rest parameter
function filter(type, ...value) {
    console.log(type);
    // typeof digunakan untuk mengetahui tipe data dari suatu nilai
    return value.filter( v => typeof v === type);
    
}
console.log(filter('string',1,3,5,'darmaji','cahyono'));

// const type = [1,2,3];
// console.log(typeof type[0])