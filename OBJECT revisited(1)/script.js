//      Object.create()
// fungsi yang mengacu ke object parent.
// dalam hal ini obj Mahasiswa yang mengacu ke obj MethodMahasiswa
// tujuannya adalah penghematan memori, dengan membuat MethodMahasiswa
// terpisah dari Mahasiswa sehingga tidak terjadi duplikasi method

let MethodMahasiswa = {
    makan : function (porsi) {
        this.energi += porsi;
        console.log(`selamat makan! ${this.nama}`);
    },

    
    main : function (jam) {
        this.energi -= jam;
        console.log(`selamat main! ${this.nama}`);
    },
    
    tidur : function (jam) {
        this.energi += (jam * 2);
        console.log(`selamat tidur! ${this.nama}`);
    }
};



function Mahasiswa (nama,energi) {
    // Object.create(MethodMahasiswa) akan memanggil 
    // method yang dibutuhkan saja
    
    let mahasiswa = Object.create(MethodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let kodir = Mahasiswa("kodir",20);