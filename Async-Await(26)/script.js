function runPromise() {
    return new Promise( (resolve,reject) => {
        const waktu = 6000;
        if (waktu < 5000){
            setTimeout( () => {
                resolve('selesai');
            },waktu);
        }else{
            reject('kelamaan')
        }
        
    });
};

async function ambilPromise() {
    try {
        const promise = await runPromise();
        console.log(promise);
    }catch (eror) {
        console.error(eror);
    };
};

ambilPromise()
// test1.then(resolve => console.log(resolve));
// const promise = runPromise();
// promise.then( hasil => console.log(hasil));