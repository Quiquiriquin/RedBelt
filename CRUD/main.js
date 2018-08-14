let request = require('request');

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com';

        

// Defino una promesa que encapsule a mi petición
// let crearUsuario = new Promise( (resolve, reject) => {
//     // crear una peticion el modulo de request
    
//     let URI = '/api/v1/authors/';
//     let URL = URL_BASE + URI;
//     let jsonSend = {
//         "name"          : "Juan",
//         "last_name"     : "Rulfo",
//         "nacionalidad"  : "MX",
//         "biography"     : "Me llamo Juan",
//         "gender"        : "M",
//         "age"           : "20"
//     }

//     request.post( { url : URL , formData : jsonSend} ,(error,response,body) => {
//         response.statusCode == 201
//         ? resolve(JSON.parse(body))
//         : reject(JSON.parse(body));
//     });
// });

// crearUsuario
//     .then( respuesta => console.log(respuesta))
//     .catch( error => console.log(error));


let obtenerUsuario = new Promise( (resolve, reject) => {
    // crear una peticion el modulo de request
    let id = "1137";
    let URI = '/api/v1/authors/';
    let URL = URL_BASE + URI + id;

    request.get( URL, (error,response,body) => {
        response.statusCode == 200
        ? resolve(JSON.parse(body))
        : reject(error);
    });
});

// obtenerUsuario
//     .then( usuario => console.log(usuario))
//     .catch( error => console.log(error));


// let obtenerUsuarios = new Promise( (resolve, reject) => {
//     // crear una peticion el modulo de request
//     let URI = '/api/v1/authors/';
//     let URL = URL_BASE + URI;
    
//     request.get( URL, (error,response,body) => {
//         response.statusCode == 200
//         ? resolve(JSON.parse(body))
//         : reject(error);
//     });
// });

// obtenerUsuarios
//     .then( usuarios => console.log(usuarios))
//     .catch( error => console.log(error));



let updateUsuario = new Promise( (resolve, reject) => {
    // crear una peticion el modulo de request
    let ID = "1137/";
    let URI = '/api/v1/authors/';
    let URL = URL_BASE + URI + ID;
        
    let jsonUpdate = {
        "name"          : "Juan",
        "last_name"     : "Barajasx",
        "nacionalidad"  : "USA",
        "biography"     : "Me llamo Barajas",
        "gender"        : "M",
        "age"           : "25"
    }
    request.put( { url: URL , formData : jsonUpdate }, (error,response,body) => {
        response.statusCode == 200
        ? resolve(JSON.parse(body))
        : reject(response.statusCode);
    });

});
    
updateUsuario
    .then( usuarios => console.log(usuarios))
    .catch( error => console.log(error));

let deleteUsuario = new Promise ( (resolve, reject) => {
    let ID = "1137/";
    let URI = '/api/v1/authors/';
    let URL = URL_BASE + URI + ID;

    request.delete( URL , (error, response, body) => {
        response.statusCode == 200
        ? resolve(JSON.parse(body))
        : reject(error);
    });
});

deleteUsuario
    .then ( borrado => console.log(borrado))
    .catch( error => console.log(error));
