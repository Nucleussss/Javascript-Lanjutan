// fetch() adalah sebuah method pada API javascript yg digunakan
// untuk mengambil data/resouce dari network, dan hal tersebut mengembalikan
// sebuah Promise yg ketika keadaannya fullfiled(selesai) akan ada sebuah Response yang tersedia

// Menggunakan Jquery
// $('.tombol-cari').on('click',function () {
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=bce1bb38&s=' + $('.input-keyword').val(),
    
//         success: (result) => {
//             const movie  = result.Search;
//             let movies = '';
//             movie.forEach(e => {
//                 movies += cardMovie(e)
//             });
//             $('.daftar-movies').html(movies);
    
//             // ketika tombol detail di klik
//             $('.detail-movie').on('click',function () {
//                 $.ajax({
//                     url : 'http://www.omdbapi.com/?apikey=bce1bb38&i='+ $(this).data('imdbid'),
//                     success : (e) => {
//                         let movDetail = modaldetail(e);
//                     $('.detail-container').html(movDetail);
//                     }
//                 })
//             })
            
//         },
    
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     });
// })

// menggunakan vanilla javascript dengan fetch
const tombolCari = document.querySelector('.tombol-cari');
tombolCari.addEventListener('click',function () {
    
    const inputKeyword = document.querySelector('.input-keyword');

    fetch('http://www.omdbapi.com/?apikey=bce1bb38&s=' + inputKeyword.value)
        .then(respons => respons.json()).then(respons => {
            const movies = respons.Search;
            let card = '';
            movies.forEach(movie => {
                card += cardMovie(movie) 
            });

            const daftMovie = document.querySelector('.daftar-movies');
            daftMovie.innerHTML = card;

            const detailMov = document.querySelectorAll('.detail-movie');
            detailMov.forEach(e => {
                e.addEventListener('click',function () {
                    let movieDetail ='';
                    fetch('http://www.omdbapi.com/?apikey=bce1bb38&i='+ e.dataset.imdbid)
                        .then(respons => respons.json()).then(respons => {
                            movieDetail = modaldetail(respons);
                            const detailCont = document.querySelector('.detail-container');
                            detailCont.innerHTML = movieDetail;
                        })
                    
                });
            });
            
        });
});

function cardMovie(e) {
    return `<div class="col-md-4 mt-4">
                <div class="card" >
                    <img src="${e.Poster}" class="card-img-top" >
                    <div class="card-body">
                        <h5 class="card-title">${e.Title}</h5>
                        <p class="card-text">${e.Year}</p>
                        <a href="#" class="btn btn-primary detail-movie" data-imdbid='${e.imdbID}' data-bs-toggle="modal" data-bs-target="#MovieDetail">Details</a>
                    </div>
                </div>
            </div>`
}

function modaldetail(e) {
    return `<div class="container-fluid">
    <div class="row ">
        <div class="col-sm-5">
            <img src="${e.Poster}" class"img-fluid" >
        </div>

        <div class="col-sm">
            <div class="card" >
                <ul class="list-group list-group-flush">
                <li class="list-group-item"> <h4>${e.Title}</h4> </li>
                <li class="list-group-item"><strong>Released:</strong> ${e.Released} </li>
                <li class="list-group-item"><strong>Genre:</strong> ${e.Genre} </li>
                <li class="list-group-item"><strong>Actors:</strong> ${e.Actors}</li>
                <li class="list-group-item"><strong>Plot:</strong> <br> ${e.Plot}</li>
                </ul>
            </div>
        </div>
    </div>
</div>`;
}


const h2 = document.querySelector('h2');
h2.addEventListener('click',function () {
    console.log(h2.textContent)
})