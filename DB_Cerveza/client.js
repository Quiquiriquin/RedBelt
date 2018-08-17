/*
    Importacion del modulo require de npm
*/
const mongoose = require('mongoose');

/* 
 URL de base de datos. 
 Usuario. Enrique Contraseña. Enrique3
*/
let url = 'mongodb://Enrique:Enrique3@ds121382.mlab.com:21382/beerdb';

/* 
    Conexion con la base de datos 
*/
mongoose.connect(url);
/* 
    Asignacion de la clase Schema de mongoose en la variable Schema.
    Schema = mongoose.Schema
*/
var Schema = mongoose.Schema;
/*
    Asignacion de la clase ObjectId de mongoose en la varible Schema
    ObjectId = Schema.ObjectId = mongoose.Schema.ObjectId
*/
var ObjectId = Schema.ObjectId;

const estiloSchema = new Schema ({
    estilo : ObjectId,
    nombre : String,
    description: String
});

const cervezaSchema = new Schema ({
    cerveza : ObjectId,
    nombre : String,
    pais : String,
    porcentaje : Number,
    cantidad : Number,
    estilo : {
        type : Schema.ObjectId,
        ref : 'Estilo'
    }
});

var Cerveza = mongoose.model('Cerveza', cervezaSchema);
var Estilo = mongoose.model('Estilo', estiloSchema);

module.exports = { Cerveza, Estilo };