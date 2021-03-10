// Fetch sama seperti $.ajax yg sama2 melakukan request 

// contoh 1
// const ditepati = false
// const janji1 = new Promise((resolve,reject) =>{
//     if (ditepati) {
//         resolve('janji ditepati');
//     } else {
//         reject('janji tidak ditepati');
//     }
// });

// janji1.then(response => console.log(`OK! ${response}`))
// .catch(respons => console.log(`Tidak OK! ${respons}`));

// contoh 2
// const ditepati = true;
// const janji1 = new Promise((resolve,reject) =>{
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('janji ditepati');
//         },5000)
        
//     } else {
//         setTimeout(() => {
//             reject('janji tidak ditepati');
//         },5000)
//     }
// });
// console.log('mulai');
// janji1.finally( ()=> console.log('hore wis mari gays!!')).then(response => console.log(`OK! ${response}`))
// .catch(respons => console.log(`Tidak OK! ${respons}`));
// console.log('selesai');

// contoh 3
const ditepati = true;
const film = new Promise((resolve) =>{
    if (ditepati) {
        setTimeout(() => {
            resolve([{
                judul : 'the squear',
                pemeran : 'sapik,jumari,saipudin'
            }]);
        },3000)
        
    }
});
const lombaMasak = new Promise((resolve) =>{
    if (ditepati) {
        setTimeout(() => {
            resolve([{
                tema : '4 sehat 5 sempurna',
                budget : '$10.000'
            }]);
        },2000)
    };
});
// Promise.all digunakan untuk menjalankan promise secara bersamaan.
Promise.all([film,lombaMasak]).finally(() => console.log(`dah siap boss q!`)).then( ([film,lombaMasak]) => console.log(film));