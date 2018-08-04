// class Animal {
//     constructor(nombre, peso){
//         this.nombre = nombre;
//         this.peso = peso;
//         console.log("Se creo un animal");
//     }

//     getNombre(){
//         return this.nombre;
//     }
//     comer(comida){
//         return `Mi Animal esta comiendo ${comida}`;
//     }
// }

// class Perro extends Animal{
//     constructor(nombre, peso, raza, color){
//         super(nombre,peso);
//         this.raza = raza;
//         this.color = color;
//         console.log("Se creo un perro");
//     }

//     ladra(){
//         return "Wooof woooof";
//     }
// }

// let pug = new Perro("Solovino","12","Pug","Beige");

// console.log(pug.getNombre());
// console.log(pug.ladra());


// class Largometraje {
//     constructor(tiempo){
//         this.tiempo = tiempo;
//     }

//     getTiempo(){
//         return this.tiempo;
//     }
// }

// class Pelicula extends Largometraje {
//     constructor(tiempo,genero){
//         super(tiempo);
//         this.genero = genero;
//     }
// }

// class Documental extends Largometraje{
//     constructor(tiempo,director){
//         super(tiempo);
//         this.director = director;
//     }
// }


// class Cine {
//     constructor(largometraje){
//         this.largometraje = largometraje;
//     }

//     reproducir(){
//         return `Reproduciendo..... ${this.largometraje.getTiempo()}`;
//     }
// }

// let doc = new Documental("90 min","Pedro Torres");
// let pel = new Pelicula("120 min","Accion");
// let sala1 = new Cine(doc);
// let sala2 = new Cine(pel);

// console.log(sala1.reproducir());
// console.log(sala2.reproducir());


// // class Rectangulo {

// //     constructor(alto,ancho){
// //         this.ancho = ancho;
// //         this.alto = alto;
// //     }

// //     getAncho(){
// //         return this.ancho;
// //     }

// //     getAlto(){
// //         return this.alto;
// //     }

// //     setAncho(nuevoAncho){
// //         this.ancho = nuevoAncho;
// //     }

// //     setAlto(nuevoAlto){
// //         this.alto = nuevoAlto;
// //     }

// //     calcularArea(){
// //         return this.ancho * this.alto;
// //     }
// // }

// // let rect = new Rectangulo(12,45);
// // console.log(rect.calcularArea());

// // class Cuadrado extends Rectangulo {
// //     constructor(lado,lado1) {
// //         super(lado,lado1);
// //     }
// // }

// let cuadrado1 = new Cuadrado(12,12);
// cuadrado1.setAlto(15);
// console.log(
//     (cuadrado1.ancho == cuadrado1.alto) ? "Es cuadrado" : "No es cuadrado"
// );


// class Figura {
//     constructor(ladoA,ladoB){
//         this.ladoA = ladoA;
//         this.ladoB = ladoB;
//     }

//     calcularArea(){
//         if(this.ladoA == this.ladoB){
//             return Math.pow(this.ladoA,2);
//         } else {
//             return this.ladoA * this.ladoB;
//         }
//     }
// }

// class Rectangulo extends Figura {
//     constructor(alto,ancho){
//         super(alto,ancho);
//     }
// }

// class Cuadrado extends Figura{
//     constructor(lado){
//         super(lado,lado)
//     }
// }

// let cuadrado1 = new Cuadrado(12);
// let rectangulo1 = new Rectangulo(15,12);

// console.log(cuadrado1.calcularArea());
// console.log(rectangulo1.calcularArea());



class Electrodomestico {
    constructor(consumo,color,peso){
        this.precio = 0;
        this.color = color;
        this.peso = peso;
        this.consumo = consumo;
    }
}

class Lavadora extends Electrodomestico{
    constructor(color,consumo,peso,carga){
        super(consumo, color, peso);
        this.carga = carga;
    }
    calcularPrecio(){
        return this.precio = this.consumo * this.carga;
    }
}

let lava = new Lavadora("roja",20,40,15);
// console.log(lava.calcularPrecio());



class Construccion {
    constructor(puertas,ventanas,pisos){
        this.puertas = puertas;
        this.ventanas = ventanas;
        this.pisos = pisos;
        this.ancho = 0;
        this.largo = 0;
        this.dir = "";
        this.altura = 0;
    }
    calcularSQM(){
        return this.largo*this.ancho;
    }

    getDir(){
        return this.dir;
    }
    
    setDir(nDir){
        return this.dir = nDir;
    }
}

class Casa extends Construccion{
    constructor(puertas,ventanas,pisos,dir,altura,largo,ancho){
        super(puertas,ventanas,pisos);
        this.dir = dir;
        this.altura = altura;
        this.largo = largo;
        this.ancho = ancho;
    }
}

class Edificio extends Construccion{
    constructor(puertas,ventanas,pisos,dir,altura,largo,ancho){
        super(puertas,ventanas,pisos);
        this.dir = dir;
        this.altura = altura;
        this.largo = largo;
        this.ancho = ancho;
    }
}


let house = new Casa(4,5,1,"Eucalipto 56","5 metros",10,10);
let build = new Edificio(100,500,20,"Eligio Ancona 4","40 metros",20,15);

console.log(house.calcularSQM());
console.log(build.calcularSQM());