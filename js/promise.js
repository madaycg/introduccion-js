const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = false;
    if (auth) {
        resolve('Usuario autenticado'); // el promise se cumple
    }
    else {
        reject('no se puede iniciar sesión') // el promise se cumple
    }
});

usuarioAutenticado
.then ((resultado) => console.log(resultado))
.catch ( (error) => console.log(error))

// en los promise existen tres valores
// Pending: no se ha cumplido pero tampoco esta rechazado
// Fulfilled: ya se cumplio
// Rejected: Se ha rechazado o no se pudo cumplir