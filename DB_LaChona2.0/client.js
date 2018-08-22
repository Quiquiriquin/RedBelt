const mongoose = require('mongoose');


let URL_DB = 'mongodb://Enrique:Enrique3@ds125602.mlab.com:25602/lachonadb';

mongoose.connect(URL_DB, () => {
    console.log("Conectado exitosamente a la base de datos");
});

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

const articulosSchema = new Schema ({
    artiuclo        : ObjectId,
    nombre          : { type : String, required : true },
    existencia      : { type : Number, required : true },
    precio          : { type : Number, required : true },
    descripcion     : { type : String, required : true }
});

const ticketSchema = new Schema ({
    ticket      : ObjectId,
    rfc         : String,
    subtotal    : {type : Number, default : 0},
    IVA         : {type : Number, default : 0},
    total       : {type : Number, default : 0},
    articulos    : [{
        type : ObjectId,
        ref : 'Articulo'
    }]
});

let Articulo = mongoose.model('Articulo', articulosSchema);
let Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = { Articulo, Ticket };