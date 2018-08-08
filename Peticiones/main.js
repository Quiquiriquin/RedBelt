// let modulo = require("./modulo.js");

// let ans = modulo.sumar(1,2);

// console.log(ans);


// const request = require("request");
// // A request le podemos enviar dos campos un URL y un Callback(Funcion anónima)
// request.get('https://swapi.co/api/people/10/', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });


// JSON = JavaScript Object Notation

// API = Application Programming INterface

const request = require("request");
// A request le podemos enviar dos campos un URL y un Callback(Funcion anónima)
request.get('https://swapi.co/api/people/4/', function (error, response, body) {
    if(response.statusCode == 200){
        let respuesta = JSON.parse(body);
        console.log(respuesta.films[0]);
        request.get(respuesta.films[0],function(error,response,body){
            let respuesta = JSON.parse(body);
            console.log(respuesta);
        })
    } else {
        console.log(error);
    }
});














