// let miObjeto = {
//     texto: "Hola",
//     numero: 20,
//     booleano: true,
//     arreglo: [1,2,3],
//     objeto: {perro: "Fido"},
//     funcion : function(){
//         return "soy una funcion";
//     }
// };

// console.log(miObjeto);
// console.log(miObjeto.funcion());


// POO

// let empleado = {
//     sueldoBase: 5000,
//     tarifa: 200,
//     extra: 4,
//     calcularSueldo : function(){
//         return this.sueldoBase + (this.extra * this.tarifa);
//     }
// };

// console.log(empleado.calcularSueldo());




let triangulo = {
    base: "10",
    altura: "15",
    area : function(){
        return (this.base * this.altura)/2;
    },
    perimetro: function(){
        return this.base*3;
    }
}

// console.log(triangulo.area());

let cuadrado = {
    lado: "10",
    area : function(){
        return Math.pow(this.lado,2);
    },
    perimetro : function(){
        return lado*4;
    } 
}

// console.log(cuadrado.area());

let rectangulo = {
    base: "10",
    altura: "5",
    area: function(){
        return this.base * this.altura;
    },
    perimetro: function(){
        return (this.base * 2) + (this.altura * 2);
    }
}



// ------------ Clases --------------------

// class Perro {
//     constructor(nombre, raza, edad){
//         this.nombre = nombre;
//         this.raza = raza;
//         this.edad = edad;
//     }

//     ladrar(){
//         return "wooof woof";
//     }

//     comer(comida){
//         return `${this.nombre} esta comiendo ${comida}`; 
//     }
// }

// let helper = new Perro("Ayudante de Santa","Galgo",7);

// console.log(helper);
// console.log(helper.comer("croquetas"));

// let fido = new Perro("Fido", "Salchicha", 10);
// console.log(fido.comer("Salchichas"));


// class Persona {
//     constructor(nombre, edad, sexo, peso, altura){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.sexo = sexo;
//         this.peso = peso;
//         this.altura = altura;
//     }

//     esMayorEdad(){
//         if(this.edad > 18){
//             return "Es mayor de edad";
//         } else {
//             return "No es mayor de edad";
//         }
//     }

//     calcularIMC(){
//         return this.peso/Math.pow(this.altura,2);
//     }

//     generarRFC(){
//         this.RFC = this.nombre + this.edad + this.sexo;
//     }
// }

// let yo = new Persona("Enrique",20,"H",78,1.76);
// console.log(yo);


// console.log(yo.generarRFC());
// console.log(yo.RFC);
// console.log(yo.esMayorEdad());
// console.log(yo.calcularIMC().toFixed(2));


class Cuenta {
    constructor(titular, cantidad){
        this.titular = titular;
        this.cantidad = cantidad;
    }

    ingresar(amount){
        if(this.cantidad + amount > 900){
            return `Cantidad excedida, no se puede hacer el deposito\nSaldo de ${this.cantidad}`;
        } else {
            this.cantidad += amount;
        }
        return `Deposito de ${amount} \nSaldo de ${this.cantidad}`;
    }

    retirar(amount){
        if(this.cantidad - amount < 100){
            return `No se puede retirar la cantidad solicitada\nDisponible ${this.cantidad}`;
        } else {
            this.cantidad = this.cantidad - amount;
            return `Retirado ${amount} quedan ${this.cantidad} disponibles`;
        }
    }
}

let cuentaMia = new Cuenta("Enrique", 200);

console.log(cuentaMia.cantidad);
console.log(cuentaMia.ingresar(800));
console.log(cuentaMia.ingresar(600));
console.log(cuentaMia.retirar(750));
console.log(cuentaMia.retirar(700));