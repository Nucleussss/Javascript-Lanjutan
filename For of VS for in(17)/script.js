//      For of VS For in

// For of adalah pengulangan yang bisa dilakukan pada iterable object
// macam - macam iterable object :
// 1.String, 2.Array, 3.Argumen/NodeList, 4.TypedArray, 5.Map, 6.Set, 7.User-defined Iterable.

//      for of hanya memiliki 1 parameter dan parameter tersebut merepresentasikan
// setiap element poda object. jadi for of tidak mempunyai parameter untuk index(i).
// const arr =[1,2,3,4];
// for (const e of arr) {
//     console.log(e)
// }

//      agar bisa menggunakan index pada for of,maka kita harus mengakalinya dengan 
// fungsi bawaan javascript yaitu .entries()
// const arr =['heng','fast','daroo','sapi'];
// for (const [i,e] of arr.entries()) {
//     console.log(`${e} ${i+1}`)
// };

//      For of juga bia digunakan untuk melooping Nodelist
// const tes = document.querySelectorAll('.tes');
// for (const e of tes) {
//     console.log(e.innerHTML);
// };

//      For of juga bisa diterapkan pada (arguments)
// function tampil() {
//     let stack = '';
//     for (const e of arguments) {
//         console.log(e)
//     }
//     return stack
// }
// tampil('asdads',"adsasd",'asdad');


//       For in bisa melakukan iterasi untk properti pada object
const pangan = {
    padi : 8,
    kedelai : 9,
    jagung : 13,
    tomat : 12
}
// e disini merepresentasikan tiap2 properti pada object
// apabila kita ingin mengambil valuenya maka syntak nya "objectnya[e]"
for (const e in pangan) { 
    console.log(pangan[e]);
}