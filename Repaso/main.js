// //  Variables

// var saludo;
// let hola;  // ECMASCSCRIPT 6

// // Declaracion de variable
// let y;
// // Asignacion de variabley
// y = 1;
// // Tipos de datos
// let numero = 10;
// let caracter = 'a';
// let cadena = "cadena";
// let booleano = true;

// // console.log("Hola");
// // console.log(numero);

// // estructuras de control 

// //CONDICIONAL IF

// // if (5 < 10) {
// // 	console.log("5 es menor que 10");
// // }

// let edad = 94;

// if (edad >= 18) {
// 	console.log("Eres legal");
// } else {
// 	console.log("No eres legal");
// }

// if (edad >= 60) {
// 	console.log("estas ruco");
// } else {
// 	console.log("estas chavo, chavo");
// }


// let fruta = "pera";
// 	fruta = "manzana";

// if(fruta == "manzana"){
// 	console.log("Es una "+fruta);
// } else if(fruta == "pera"){
// 	console.log("Es una "+fruta);
// } else if(fruta == "platano"){
// 	console.log("Es una "+fruta);
// }

// // switch

// switch (fruta) {
//  	case "manzana":
//  		console.log("Es una "+fruta);
//  		break;
//  	case "pera":
//  		console.log("Es una "+fruta);
//  		break;
//  	case "platano":
//  		console.log("Es una "+fruta);
//  		break;
//  	default:
//  		console.log("No es nada");
//  		break;
//  } 



// // ARREGLO 

// var arreglo = [];

// // arreglo = [1,"hola",true];
// // console.log(arreglo);


// arreglo = [
// 	"hola",
// 	"como",
// 	"estas",
// 	"mi",
// 	"nombre",
// 	"es",
// 	"mauricio"
// ];
// for(var i = 0; i < arreglo.length; i ++){
// 	console.log(arreglo[i]);
// }

// var numeros = [];

// for(var x = 1 ; i <10 ; i ++){
// 	numeros.push(x);
// }

// console.log(numeros);


/* Ejercicio 

	a partir de una cadena de texto, por ejemplo: 
		var texto = cadenita;

	muestren en consola esa cdena de texto pero convirtiendo los caracteres
	en una sucesion de minusculas y mayusculas, es decir:

	resultado -> cAdEnItA
*/

var texto = "cadenita";
var res = [];

for(var i = 0; i < texto.length; i++){
	if(i%2 == 0){
		res.push(texto[i].toUpperCase());
	} else {
		res.push(texto[i].toLowerCase());
	}
}

// for( var i = 0; i < texto.length; i++){
// 	if(i%2 == 0){
// 		texto[i].toUpperCase();
// 		console.log(texto);
// 	} else {
// 		texto[i].toLowerCase();
// 		console.log(texto);
// 	}
// }


// console.log(texto);
console.log(res.join(""));









