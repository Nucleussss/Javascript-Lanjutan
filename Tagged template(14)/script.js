// penggunaan Tagged Tamplate Literal

const mhs = {
    nama : "aditya",
    kelas : "3d",
    nim : 234234
};

function sapa(string , ...arg) {
    // string.forEach((str,i) => {
    //     hasil += `${str}${ arg[i] ? `<span class="bgMerah">${arg[i]} </span>` : `` }`
    // });

    return string.reduce( (string,curr,i) => {
        return `${string}${curr}${arg[i] ? `<span class="bgMerah"> ${arg[i]} </span>` : ``}`
    },``);
}

const sapaMhs = sapa `halo nama saya ${mhs.nama}, saya kelas ${mhs.kelas} dan nim saya adalah ${mhs.nim}`;
const kelas = document.querySelector(".kelas");
kelas.innerHTML = sapaMhs;

console.log(sapaMhs)