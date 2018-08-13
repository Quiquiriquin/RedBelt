const request = require('request');



// let promise = new Promise(function(resolve, reject) {
//    resolve("Esta promesa esta cumplida");
//    reject("Esta promesa no se cumplio"); 
    
// });

// promise.then( function (respuesta) {
//     console.log(respuesta);
// });

// let promesa = new Promise( (resolve, reject) => {
//     resolve("Se resolvió");
//     reject("No se resolvió");
// });

// console.log(promesa);
// console.log("Se van a imprimir los timeouts...");
// setTimeout(function(){console.log("Pasaron 3 segundos");}, 3000);
// setTimeout(function(){console.log("Pasaron 4 segundos");}, 4000);
// console.log("Se imprimieron los timeouts...");

// console.log("Se va a ejecutar la promesa");

// let promesa = new Promise( (resolve,reject) => {
//     setTimeout(()=>{resolve("Se resolvió la promesa");},3000);
// })
// promesa.then( (ans) => {console.log(ans);} )
// console.log("Se acaba de ejecutar la promesa");


// let promesa = new Promise( (resolve,reject) => {
//     let numero = 5;
//     if(numero%2 == 0){
//         resolve(`Numero ${numero} es par`);
//     } else {
//         reject(`Numero ${numero} no es par`);
//     }
// });

// promesa
//     .then((mensaje) => {console.log(mensaje);})
//     .catch( (mensaje) => {console.log(mensaje);});





// let promSwapi = new Promise ( (resolve, reject) => {
    
//     request.get('https://swapi.co/api/people/3/', (error, response, body) => {
//         response.statusCode == 200 
//         ? resolve(JSON.parse(body))       
//         : reject(error);
//     })

// } );

// promSwapi 
//     .then( (json) => console.log(json))
//     .catch( (error) => console.log(error));


// let climSwapi = new Promise ( (resolve, reject) => {
//     request.get('https://swapi.co/api/planets/3/', (error, response,body)=> {
//         response.statusCode == 200
//         ? resolve(JSON.parse(body))
//         : reject(response.statusCode);
//     });
// });

// climSwapi.then( (planeta) => console.log(`El nombre del planeta es ${planeta.name}\nSu clima es: ${planeta.climate}`))












