// Konsep this pada Arrow function

const box = document.querySelector(".box");
box.addEventListener("click",function () {
    
    this.classList.toggle("size");

    setTimeout( () => {
        this.classList.toggle("caption");
    },500);

    // setTimeout( function () {
    //     this.classList.toggle("caption");
    // },500);
})


const Mahasiswa = function () {
    this.nama = 'sandi';
    this.umur = 30;
    this.sayHello = function () {
        console.log(`halo nama saya${this.nama}, umur saya ${umur} tahun`)
    }

        setInterval(() => {
            console.log(this.umur++);
        }, 500);
}

const sandi = new Mahasiswa();