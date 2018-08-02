// function miFuncion () {
//     console.log("hola");
// }

// miFuncion();

// function miNuevaFuncion(nombre) {
//     console.log("Hola "+nombre);
// }

// let miNombre = "Enrique"

// miNuevaFuncion(miNombre);

// function saludar (nombre){
//     console.log(`Hola ${nombre}`);
// }

// saludar(miNombre);

// SCOPE - ALCANCE

// function suma(num1,num2){
//     let resultado = num1 + num2;
//     return resultado;
// }

// let ans =  suma(2,3);
// console.log(ans);

// console.log(suma(3,2));

// console.log(resultado);

// let funcionAnonima = function(){
//     console.log("funcion anonima");
// }

// console.log(funcionAnonima());

// let funcionAnonima = () => {
//     console.log("Soy una arrow function");
// }

// // funcionAnonima();

// let esMayorEdad = (edad) => {
//     if(edad >= 18){
//         return "Es mayor de edad";
//     } else {
//         return "No es mayor de edad";
//     }
// }

// console.log(esMayorEdad(16));


// -------- Temperatura ------------- 
let temp = 37, ans = 0;

let farenheit = (temp) => {
    ans = ((temp*9)/5) + 32;
    return ans;
}

console.log(farenheit(temp));


// --------------- Tabla ------------

let num = 4;

let tabla = (num) => {
    for(let i = 0; i <= 10; i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

console.log(tabla(num));


// ------------ Promedio-----------

let arr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];

let avr = (arr) => {
    let ans = 0;
    for(let i = 0; i < arr.length; i++){
        ans += arr[i];
    }
    return ans/arr.length;
}

console.log(avr(arr));


// ---------- Empleados --------

let nombres = [
    ["juan",100],
    ["Enrique",500],
    ["Bryan",800],
    ["Mauricio",100],
    ["Lalo",20],
    ["Beto",30],
    ["Charly",900],
    ["Josue",350]
];

let compara = (nombres) => {
    let sel = [nombres[0][0],nombres[0][1]];
    console.log(sel);
    for(let i = 0; i < nombres.length; i++){
        if(nombres[i][1] < nombres[i+1][1]){
            sel.push(nombres[i+1][0],nombres[i+1][1]);
        } 
    }
    return sel;
}

console.log(compara(nombres));
// ---------------- Funcion N parametros ----------

let amigos = (a,b,x,d,c) => {}

console.log(amigos.length);


// ------------- Array de pares ------------

let par = [];

let llenar = () => {
    for(let i = 0; par.length <= 20; i++){
        if(i%2 == 0){
            par.push(i);
        }
    }
}

llenar();

console.log(par.join(" "));

// // ------------- Auto -------------

let distancia = 120;

let calcula = (distancia) => {
    return ((distancia*1)/73)*1000;
}
let answ = calcula(distancia)/60;
answ = answ.toFixed(2);
console.log(answ);

// // ---------- Palindromo ---------

let cadena = "anita lava la tina",
    copia = "";

let palin = (cadena) => {
    let x = cadena.length - 1;
    for(let i = 0; i < cadena.length; i++){
        copia += cadena[x];
        if(cadena[x] != copia[i]){
            return "No es Palindromo";
        } 
        x--;
    }
    return "Es Palindromo";
}

console.log(palin(cadena));


// // ------------ Fibonacci ------------

let number = 10;

let fibo = (number) => {
    let n1 = 0,
        n2 = 1,
        n3;
        console.log(n1);
        console.log(n2);
    for(let i = 2; i <= number; i++){
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
        console.log(n3);
    }
}

fibo(number);

// objetos

