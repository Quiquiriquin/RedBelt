/*
    Modulos a exportar. 
    Express para hacer respuestas del servidor
    body-parser Para poder convertir a JSON
*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
/*
    Importacion de las variables Tipo, Cerveza que se crearon en client.js
*/
const  {
    Estilo,
    Cerveza
} = require('./client');

app.use(bodyParser.urlencoded( { extended : true } ));
// Convertir a JSON todo lo que se reciba
app.use(bodyParser.json());

/****************************************
 *      CREAR NUEVO TIPO DE CERVEZA     *
 ****************************************/

app.post('/api/v1/tipos/', (req, res) => {
    const { nombre , description } = req.body;

    let nuevoTipo = Estilo ( {
        nombre,
        description
    });

    nuevoTipo.save( (err, tip) => {
        res.status(201).send(tip);
    });
});

/****************************************
 *      INSERTAR UNA NUEVA CERVEZA      *
 ****************************************/

app.post('/api/v1/cervezas/', (req, res) => {
    const { nombre , pais , porcentaje , cantidad , estilo } = req.body;
    let nuevaCerveza = Cerveza ({
        nombre,
        pais,
        porcentaje,
        cantidad,
        estilo
    });
    nuevaCerveza.save( (err, cerveza ) => {
        res.status(201).send(err);
    });
});

/****************************************
 *      CONSILTAR TIPOS DE CERVEZA      *
 ****************************************/

app.get('/api/v1/cervezas/', (req, res) => {
    Cerveza.find( {} , (err, cervezas) => {
        Estilo.populate(cervezas,{path: 'estilo'} ,(err, result) => {
            res.status(200).send(result);
        })
    });
});

/****************************************
 *      CONSILTAR CERVEZAS              *
 ****************************************/

app.get('/api/v1/tipos/', (req, res) => {
    Estilo.find( {} , (err, estilo) => {
        res.status(200).send(estilo);
    });
});

app.listen(3000, () => {
    console.log('Beer database works good');
});