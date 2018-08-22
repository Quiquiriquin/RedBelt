let {Articulo  , Ticket } = require('./client.js');
const bodyparser = require('body-parser');
const express = require('express');
let app = express();

app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

/***************************************
 *          FUNCION DEL SERVIDOR       *
 ***************************************/

app.get('/', (req, res) => {
    res.send('Esta funcionando');
});

/***************************************
 *        INSERTAR ARTICULOS           *
 ***************************************/

app.post('/api/v1/articulos/', (req, res) => {
    let { nombre , existencia, precio, descripcion } = req.body;

    let nuevoArticulo = Articulo ({
        nombre,
        existencia,
        precio,
        descripcion
    });

    nuevoArticulo.save( (error, result) => {
        if(error) res.status(422).send(error);
        res.status(201).send(result);
    })
})

/***************************************
 *     CONSULTAR ARTICULOS BY ID       *
 ***************************************/
app.get('/api/v1/articulos/:id', (req, res) => {
    let {id} = req.params;
    Articulo
        .findById(id)
        .exec()
        .then( result => res.status(200).send(result))
        .catch( error => res.status(404).send(error));
});

/***************************************
 *     CONSULTAR ARTICULOS (TODOS)     *
 ***************************************/
app.get('/api/v1/articulos/', (req, res) => {
    Articulo
        .find({})
        .exec()
        .then( result => res.status(200).send(result))
        .catch( error => res.status(404).send(error));
});

/***************************************
 *        UPDATE ARTICULO BY ID        *
 ***************************************/
app.put('/api/v1/articulos/:id', (req, res) => {
    let {id} = req.params;
    Articulo
        .findByIdAndUpdate(
            id,
            { $set : req.body},
            { new : true}
        )
            .exec()
            .then( result => res.status(202).send(result))
            .catch( error => res.status(422).send(error));
})

/***************************************
 *        DELETE ARTICULO BY ID        *
 ***************************************/
app.delete('/api/v1/articulos/:id', (req, res) => {
    let {id} = req.params;
    Articulo
        .findByIdAndRemove(
            id,
        )
            .exec()
            .then( result => res.status(204).send(result))
            .catch( error => res.status(422).send(error));
})

/******************************* TICKETS **************************************************/

/******************************
 *      INSERTAR TICKETS      *
 ******************************/
app.post('/api/v1/tickets/', (req, res) => {
    let { rfc, articulos} = req.body;
    let nuevoTicket = Ticket ({
        rfc,
        articulos
    });

    nuevoTicket.save( (error, result) => {
        if(error) res.status(422).send(error);
        res.status(201).send(result);
    });

})

/***************************************
 *     CONSULTAR TICKETS BY ID         *
 ***************************************/
app.get('/api/v1/tickets/:id', (req, res) => {
    let {id} = req.params;
    Ticket
        .findById(id)
        .populate('articulos')
        .exec()
        .then( result => res.status(200).send(result))
        .catch( error => res.status(404).send(error));
});

/***************************************
 *     CONSULTAR TICKETS (TODOS)       *
 ***************************************/
app.get('/api/v1/tickets/', (req, res) => {
    Ticket
        .find({})
        .populate('articulos')
        .exec()
        .then( result => res.status(200).send(result))
        .catch( error => res.status(404).send(error));
});

/******************************
 *      BORRAR TICKETS        *
 ******************************/
app.delete('/api/v1/tickets/:id', (req, res) => {
    let {id} = req.params;
    Ticket
        .findByIdAndRemove(
            id,
        )
            .exec()
            .then( result => res.status(204).send(result))
            .catch( error => res.status(422).send(error));
})

/***************************************
 *        UPDATE TICKET BY ID          *
 ***************************************/
app.put('/api/v1/tickets/:id', (req, res) => {
    let {id} = req.params;
    Ticket
        .findByIdAndUpdate(
            id,
            { $set : req.body},
            { new : true}
        )
            .exec()
            .then( result => res.status(202).send(result))
            .catch( error => res.status(422).send(error));
})

/************* OBTENER IVA, SUBTOTAL Y TOTAL DE TICKET ***************/

// Cuando el usuario haga una petición de tipo GET a la URL que se muestra abajo, 
// deberá pasar el ID de la factura de la que desea calcular su subtotal, IVA y total
app.get('/api/tickets/total/:id', (req, res) => {

    // Definimos las variables donde guardaremos los calculos necesarios. 
    // Incializamos las variables en 0 para especificar que contendran NUMEROS.
    let subtotal=0, IVA=0, total=0;

    // Primero buscamos el ticket en cuestión, usando el ID que nos manda el usuario
    Ticket
        .findById(req.params.id) // Tomo el ID directamente de los parámetros de la petición
        .populate('articulos')  // Uso POPULATE aquí para obtener los JSONs completos de cada artículo, y no solo su ID 
        .exec()
        .then( ticket => {  // Al ejecutar los métodos anteriores, se devuelve una promesa. La cachamos con un ".then"
            // Dentro del "then", escribimos un callback. Al ejecutarse este callback, haremos lo siguiente: 
            console.log(ticket) // Muestro en consola mi JSON de ticket, solo para checar que todo vaya cool :)
            
            // Recorro mi atributo "articulos" de mi JSON del ticket. El atributo "articulos" es un arreglo, por lo que 
            // debemos recorrer este arreglo para obtener el subtotal. Calculamos el subtotal sumándole a "subtotal" el precio de todos los artículos que hallemos al iterar:
            for (let i=0; i < ticket.articulos.length; i++){
                subtotal += ticket.articulos[i].precio // En cada iteracion, sumaremos el precio del articulo a lo que contenga "subtotal"
            }

            // Calculamos el IVA, el cual sería el 16% de nuestro subtotal (no recuerdo cómo se calcula el IVA, creo que sí era así jejeje)
            IVA = (subtotal * 0.16);

            // Obtenemos el total sumando el subtotal y el IVA
            total = (subtotal + IVA);

            // Muestro en consola mis variables, para revisar que contengan los resultados correctos...
            console.log(`subtotal: ${subtotal}, IVA: ${IVA}, total: ${total}`);

            // Finalizamos este ".then" regresando OTRA PROMESA. 
            // En esta nueva promesa actualizaremos los valores de subtotal, IVA y total de nuestro ticket. 
            // Los parámetros que recibe son: ID, Atributos a modificar, y un objeto que, al agregarlo, me permite regresar el nuevo documento y no el viejo :D
            // Agrego al final el metodo ".exec()" para ejecutar los cambios. Al igual que en el caso anterior, 
            // esta última línea de código, por ser una promesa, también debe ser cachada con un ".then()"
            return Ticket.findByIdAndUpdate(req.params.id, {subtotal: subtotal, IVA: IVA, total: total}, {new: true}).exec()
        })
        .then(ticketActualizado => {  // Cachamos la segunda promesa, la de "Ticket.findByIdAndUpdate" en este .then()
            console.log(ticketActualizado) // Mostramos en consola nuestro ticket actualizado
            res.send(ticketActualizado) // Mandamos al cliente el ticket con los datos actualizados
        })
        .catch(err => res.send(err))    // En caso de que cualquiera de las dos promesas tenga un error, estos errores serán cachados en un solo ".catch()"

});



// app.get('/api/v1/tickets/:id/total/', (req, res) => {
//     let subtotal = 0, iva = 0, total = 0;
//     let {id} = req.params;
//     Ticket
//         .findById(id)
//         .populate('articulos')
//         .exec()
//         .then( ticket => {
//             // console.log(ticket);
//             for(let i = 0; i < ticket.articulos.lenght; i++){
//                 subtotal += ticket.articulos[i].precio;
//             }

//             iva += subtotal * 0.16;
//             total += subtotal + iva;

//             return Ticket.findByIdAndUpdate(ticket.id, {IVA : iva, subtotal : subtotal, total : total},{new : true}).exec()
//         })
//         .then( ticketActualizado => res.status(202).send(ticketActualizado))
//         .catch( error => res.status(400).send(error));
// });

app.listen(5000, () => {
    console.log("Funciona correctamente la base de LaChona");
})