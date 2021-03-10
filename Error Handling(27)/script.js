
// ketika tombol search di klik
const tombolCari = document.querySelector('.tombol-cari');
tombolCari.addEventListener('click', async function () {
    try{
        const inputKeyword = document.querySelector('.input-keyword');
        const movies = await ambilMovie(inputKeyword);
        tampilMovie(movies);
    }catch (error){
        alert(error)
    }
});

// mengambil movie dengan fetch
function ambilMovie(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=bce1bb38&s=' + keyword.value)
        .then(respons =>{
            if (!respons.ok) {
                throw new Error(respons.statusText);
            }else{
                return respons.json();
            }
        }).then(respons => {
            // respons.Search
            if (respons.Response === 'False') {
                console.log(respons)
                throw new Error(respons.Error);
                
            }else {
                return respons.Search
            }
        });
};

// menampilkan list movie ke user
function tampilMovie (movies){
    let card = '';
    movies.forEach(movie => {
        card += cardMovie(movie) 
    });
    const daftMovie = document.querySelector('.daftar-movies');
    daftMovie.innerHTML = card;
};

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

// ketika tombol detail di klik
document.addEventListener('click',async function (e) {
    if (e.target.classList.contains('detail-movie')) {
        const detail = await ambilMovieDetail(e.target);
        tampilkanDetailMovie(detail)
    }
    
})

// mengambil detail movie
function ambilMovieDetail (e) {
    return fetch('http://www.omdbapi.com/?apikey=bce1bb38&i='+ e.dataset.imdbid)
        .then(respons => respons.json()).then(respons => respons)
}

// menampilkan detail movie ke user
function tampilkanDetailMovie(detail) {
    const movieDetail = modaldetail(detail);
            const detailCont = document.querySelector('.detail-container');
            detailCont.innerHTML = movieDetail;
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
