const mongoose = require('mongoose');

let URL = 'mongodb://Enrique:Enrique3@ds125602.mlab.com:25602/lachonadb';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.connect(URL);

const articulosSchema = new Schema ({
    id : ObjectId,
    nombre : String,
    precio : Number,
    existencia : Number,
    descripcion : String
});

const ticketSchema = new Schema ({
    id : ObjectId,
    rfc : String,
    articulos : [{
        type : ObjectId,
        ref: 'Articulos'
    }],
    subtotal : [{
        type : ObjectId,
        ref : 'Articulos',
    }],
    iva : Number,
    total : Number
});



let Articulos = mongoose.model('Articulos',articulosSchema);
let Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = {Articulos, Ticket };