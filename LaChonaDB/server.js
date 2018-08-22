const express = require('express');
const bodyparser = require('body-parser');

const { Articulos , Ticket } = require('./client');

var app = express();

app.use(bodyparser.urlencoded( { extended : true } ) );
app.use(bodyparser.json());

/* **********************************
 *      FUNCION DEL SERVIDOR        *
 ************************************/

app.get('/', (req, res) => {
    res.send('Funcionando');
});

/* **********************************
 *       INSERTAR ARTICULOS         *
 ************************************/

app.post('/api/v1/articulos/', (req, res) => {
    const { nombre, precio, existencia , descripcion } = req.body;
    let nuevoArticulo = Articulos ({
        nombre,
        precio,
        existencia,
        descripcion
    });
    nuevoArticulo.save( (articulo) => {
        res.status(201).send(articulo);
    });
});

 /* ****************************************
 *       CONSULTAR ARTICULOS (TODOS)       *
 *******************************************/

 app.get('/api/v1/articulos/', (req, res) => {
     Articulos.find( {} , (err, articulos) => {
         res.status(200).send(articulos);
     });
 });

/* ****************************************
*       CONSULTAR ARTICULOS CON ID        *
*******************************************/

app.get('/api/v1/articulos/:id' , (req, res) => {
    let {id} = req.params;
    Articulos.findById(id).exec()
        .then( articulo => res.status(200).send(articulo))
        .catch( error => res.send(error));
});

/* ****************************************
*          ACTUALIZAR ARTICULOS           *
*******************************************/

app.put('/api/v1/articulos/:id', (req, res) => {
    let {id} = req.params;
    Articulos.findByIdAndUpdate(id, { $set : req.body }, { new:true }).exec()
        .then( articulo => res.send(articulo))
        .catch( erro => res.send(erro));
});

/* ****************************************
*          BORRAR ARTICULOS BY ID         *
*******************************************/

app.delete('/api/v1/articulos/:id', (req, res) => {
    let {id} = req.params;
    Articulos.findByIdAndRemove(id).exec()
        .then( articulo => res.status(204).send(articulo))
        .catch( err => res.send(err));
});


/* **********************************
 *       INSERTAR TICKETS           *
 ************************************/

app.post('/api/v1/tickets/', (req, res) => {
    const { rfc , articulos } = req.body,
    subtotal = 0, iva = 0, total = 0;
    let nuevoTicket = Ticket ({
        rfc,
        articulos,
        subtotal,
        iva,
        total,
    });
    nuevoTicket.subtotal = nuevoTicket.subtotal();
    nuevoTicket.save( (ticket) => {
        res.status(201).send(ticket);
    });
 });

/* ****************************************
*       CONSULTAR TICKETS (TODOS)          *
*******************************************/

 app.get('/api/v1/tickets/', (req, res) => {
    // var total = 0;
    Ticket.find( {} , (err, ticket) => {
        Articulos.populate(ticket, { path : 'articulos'}, (err, result) => {
            res.status(200).send(result);
        });
    });
 });    

/*******************************************
*       CONSULTAR TICKETS BY ID            *
*******************************************/

app.get('/api/v1/tickets/:id', (req, res) => {
    let {id} = req.params;
    Ticket.findById(id).exec()
    .then ( tickets => {
        Articulos.populate(tickets, {path : 'articulos'}, (err, result) => {
            res.send(result);
        });
    });
});

/* ****************************************
*          ACTUALIZAR TICKETS             *
*******************************************/

app.put('/api/v1/tickets/:id', (req, res) => {
    let {id} = req.params;
    Ticket.findByIdAndUpdate(id, { $set : req.body }, { new:true }).exec()
        .then( ticket => res.send(ticket))
        .catch( erro => res.send(erro));
});

/* ****************************************
*          BORRAR TICKETS BY ID           *
*******************************************/

app.delete('/api/v1/tickets/:id', (req, res) => {
    let {id} = req.params;
    Ticket.findByIdAndRemove(id).exec()
        .then( ticket => res.status(204).send(ticket))
        .catch( err => res.send(err));
});

/* **********************************
 *      INICIO DEL SERVIDOR         *
 ************************************/

app.listen(4000, () => {
    console.log("La Chona server works. OK on port 4000 :)");
});