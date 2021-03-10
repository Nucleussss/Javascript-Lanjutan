//      Spread operator

//       bisa digunakan untuk menggabunakan 2 array
// const arr1 = [1,2,3,4,5];
// const arr2 = ['dodi','sapi','dakas','daef','feasd'];
// // kita juga bisa menyisipkan element baru cth = [...arr1,'element baru',...arr2]
// const MergeArr = [...arr1 ,...arr2];
// console.log(MergeArr);

//      meng-copy Array
// const arr = ['dodi','sapi','dakas','daef','feasd'];
// // mengcopy dengan menggunakan spred operator tidak akan mempengaruhi array yang asli
// const arrCopy = [...arr];
// arrCopy[0] = 'suplaier';
// console.log(arr);
// console.log(arrCopy);


const h1 = document.querySelector('h1');
const char = [...h1.textContent].map( e => `<span>${e}</span>`).join('');
h1.innerHTML = char;

