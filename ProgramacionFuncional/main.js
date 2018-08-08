// // function triple(numero){
// //     return numero*3;
// // }

// // console.log(triple(3));

// let triple = function(numero){
//     return numero*3;
// }

// let variable = triple;

// console.log(variable(3));



// // Funciones de orden superior y funciones Callback

// let funcionOS = (callback) => {
//     console.log("Hola soy una funcion de OS");
//     callback();
// }

// let funcionCB = () => {
//     console.log("Hola soy una funcion callback");
// }

// funcionOS(funcionCB);



// let orden = (saludar) => {
//     console.log("Hola soy una funcion de orden superior");
//     saludar();
// }
// // Forma de ejecucion de forma al vuelo
// // orden(function () {
// //     console.log("Soy un callback");
// // });


// // Segunda forma. Pasando una funcion como variable
// let call = function(){
//     console.log("Hola a todos");
// }

// // orden(call);


// let miFuncion = (callback) => {
//     console.log("Soy una funcion de orden superior");
//     callback();
// }

// miFuncion( () => {
//     console.log("Soy la funcion callback");
// })




let saludar = (mensaje, formato) => {
    // console.log("Funciono");
    return console.log(formato(mensaje));
}


let formato = (mensaje) => {
    let seleccion = ((Math.random() * 10) + 1);
    if(seleccion > 5){
        return mensaje.toUpperCase();
    } else {
        return mensaje.toLowerCase();
    }
}

saludar("Hola como estas amigo", formato);



// Filter (filtro)

// let animales = [
//     {nombre : "Heladio", especie: "Tortuga"},
//     {nombre : "Jose",    especie : "Tigre"},
//     {nombre : "Carlos" , especie : "cuyo"},
//     {nombre : "Fabiola", especie: "Tortuga"},
//     {nombre : "Muricio", especie : "cuyo"},
//     {nombre : "Rogelio" , especie : "Pato"}
// ]


// let cuyos = [];


// // for(let i = 0; i < animales.length; i++){
// //     if(animales[i].especie == "cuyo"){
// //         cuyos.push(animales[i]);
// //     }
// // }

// cuyos = animales.filter( (animal) => {
//     return animal.especie == "cuyo";
// });


// console.log(cuyos);

// Map

// let animales = [
//     {nombre : "Heladio", especie: "Tortuga"},
//     {nombre : "Jose",    especie : "Tigre"},
//     {nombre : "Carlos" , especie : "cuyo"},
//     {nombre : "Fabiola", especie: "Tortuga"},
//     {nombre : "Muricio", especie : "cuyo"},
//     {nombre : "Rogelio" , especie : "Pato"}
// ]

// let patos = [];

// for(let i = 0; i < animales.length; i++){
//     if(animales[i].especie == 'Pato'){
//         patos.push(animales[i].nombre);
//     }
// }

// console.log(patos);


// patos = animales.map( function (animal) {
//     return animal.nombre;
// });

// console.log(patos);

//Ejercicio 1

let entrada = [
    "Hola amigos",
    "cinta roja cdmx gdl",
    "yei"
]

let salida = [];

let cambiar = (entrada) => {
    let flag = 0;
    let ans = "";
    for(let i = 0; i < entrada.length; i++){
        switch (flag) {
            case 0:
                if(entrada[i] == ' '){
                    flag = 1;
                    ans += entrada[i];
                    i++;
                } else {
                    ans += entrada[i].toUpperCase();
                }
                break;
            case 1:
                if(entrada[i] == ' '){
                    flag = 1;
                    ans += entrada[i];
                    i++;
                } else {
                    ans += entrada[i].toLowerCase();
                }
                break;
        }
    }
    // for(let i = 0; i < entrada.length; i++){
    //     if(entrada[i] == ' ' && flag == 0){
    //         flag = 1;
    //         ans += entrada[i];
    //         i++;
    //     } else if (entrada[i] == ' ' && flag == 1){
    //         flag = 0;
    //         ans += entrada[i];
    //         i++;
    //     }
    //     if(flag == 0){
    //         ans += entrada[i].toUpperCase();
    //     } else {
    //         ans += entrada[i].toLowerCase();
    //     }
    // }
    return ans;
}

let ansCambiar = (entrada,cambiar) => {
    let resul = [];
    for(let i = 0; i < entrada.length; i++){
         resul.push(cambiar(entrada[i]));
    }
    return resul;
}
salida = ansCambiar(entrada,cambiar);
console.log(salida);


// Ejercicio 2


let tiempo = [
    120,
    80,
    100,
    200
];

let resultadoHoras = tiempo.filter(
    (horas) => {
        return horas/60 >= 2;
    }
);

console.log(resultadoHoras);


// Ejercicio 3 

let numeros = [
    1,
    3,
    5,
    7,
    9
];

let resulNum = numeros.filter( (numeros) => {
    return numeros*7 < 35;
});

console.log(resulNum);


















