//      distructuring Variable / assigment


//          destructuring Array 


// memecah array menjadi variabel baru
// const test = ['satu','dua','tiga','empat','lima'];
// const [a,b,c,d,e] = test;
// console.log(e)

// skipping items
// mengskip item pada array yang akan dipecah 
// const test = ['satu','dua','tiga','empat','lima'];
// const [a,,,d,e] = test;
// console.log(a);
// console.log(d);

// swap item dengan distructuring array 
// let test = 1;
// let test2 = 3;

// console.log(test);
// console.log(test2);
// [test,test2] = [test2,test];
// console.log(test);
// console.log(test2);

// return value pada return fungsi
// function coba() {
//     return [1,2];
// }
// const [a,b] = coba();
// console.log(a);

// rest parameter
// function coba() {
//     return [1,2,3,4,5];
// }
// const [ ...itm] = coba();
// console.log(itm);




//          distructuring object

// memecah property pada object
// const mhs = {
//     nama : 'aditya',
//     id : 2356245,
//     email : 'youmusrTry@gmail.com'
// };
// // nama variable harus sama seperti nama properti pada objct 
// const {nama , id } = mhs;
// console.log(nama);
// console.log(id);


// assigment tanpa deklarasi pada objct
// ({nama,id,email} = {
//     nama : 'aditya',
//     id : 2356245,
//     email : 'youmustTry@gmail.com'
// });
// console.log(email);


// kala ingin mengubah nama variable saat proses distructuring
// const mhs = {
//     nama : 'aditya',
//     id : 2356245,
//     email : 'youmusrTry@gmail.com'
// };
// // menggunakan tanda(:) dilanjutkan nama variable yg baru
// const {nama:n , id:i } = mhs;
// console.log(n);
// console.log(i);

// memberikan default value 
// const mhs = {
//     nama : 'aditya',
//     id : 2356245,
//     email : 'youmusrTry@gmail.com'
// };
// // memberikan nilai default saat distructuring object.
// const {nama:n , id:i ,email = 'sumire@gamail.com'} = mhs;
// console.log(email)

// memberi nilai default + mengubah nama variable
// const mhs = {
//     nama : 'aditya',
//     id : 2356245,
//     email : 'youmusrTry@gmail.com'
// };
// // memberikan nilai default saat distructuring object.
// const {nama:n , id:i ,email : e = 'sumire@gamail.com'} = mhs;
// console.log(e)


// memberikan rest parameter saat distructuring
// const mhs = {
//     nama : 'aditya',
//     id : 2356245,
//     email : 'youmusrTry@gmail.com'
// };
// // disini ...value berupa object
// const {nama:n , ...value} = mhs;
// console.log(value);

// mengambil feild pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    nama : 'aditya',
    id : 2356245,
    email : 'youmusrTry@gmail.com'
};

// menyaring properti dari objbct dengan distructuring
function tampil({nama,id}) {
    return `${nama} ${id}`
};

console.log(tampil(mhs));

