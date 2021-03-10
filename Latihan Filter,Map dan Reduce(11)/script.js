// Latihan
// menampilkan  jumlah vidio dan total durasi dari playlist JAVASCRIPT LANJUTAN

// ambil semua elemen vidio
const  vidios = Array.from(document.querySelectorAll("[data-duration]")); 

// pilih yang hanya "JAVASCRIPT LANJUTAN"

    const jsLanjut = vidios.filter(function (vidio) {
        // mengambil isi dari tag li dengan .textContent.includes()
        if (vidio.textContent.includes("JAVASCRIPT LANJUTAN")){
            return vidio;
        } 
    }); 

// ambil durasi vidio
let jsDuration = jsLanjut.map(function (durasi) {
        // mengembalikan isi dari attr data
        return durasi.dataset.duration;
})

// ubah durasi  menjadi INT,ubah menit menjadi detik
    .map(waktu => {
        let num = waktu.split(":").map(part => parseFloat(part) );
        return (num[0]*60) + num[1];
    })

// jumlahkan semua detik
    .reduce( (total,currentVal) => total + currentVal,0);

// ubah format ke jam,menit,detik
    const jam = Math.floor(jsDuration / 3600);
    jsDuration = jsDuration - jam * 3600;

    const menit = Math.floor(jsDuration / 60);

    const detik = jsDuration - menit*60;

// simpan di DOM

const jmlDurasi = document.querySelector(".jumlah-durasi");
const jmlVidio = document.querySelector(".jumlah-vidio");
jmlVidio.textContent = `${jsLanjut.length} vidio`
jmlDurasi.innerHTML = `${jam} jam,${menit} menit,${detik} detik`;