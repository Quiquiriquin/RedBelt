const express = require('express');
const bodyParser = require('body-parser');

const {
    Alumno,
    Programa
} = require('./client');

var app = express();

app.use(bodyParser.urlencoded( { extended : true } ));
app.use(bodyParser.json());


// Metodo GET para comprobar que el servidor funciona
app.get('/', (req, res) => {
    
}); 



/* ******************************************
 *         CREAR UN NUEVO PROGRAMA          * 
 ********************************************/ 

app.post('/api/v1/programa/', (req, res) => {
    const{ descripcion, duracion} = req.body;
    let nuevoPrograma = Programa({
        descripcion,
        duracion
    });
    nuevoPrograma.save( (req, pr) => {
        res.status(201).send(pr);
    });
});

/* ******************************************
 *         CREAR UN NUEVO ALUMNO            * 
 ********************************************/ 

app.post('/api/v1/alumno/',(req, res)=> {
    const { nombre, apellidos, edad, programa } = req.body;
    let nuevoAlumno = Alumno ( {
        nombre,
        apellidos,
        edad,
        programa
    });
    nuevoAlumno.save( (err, alumno) => {
        res.status(201).send(alumno);
    });
});
/* ******************************************
 *          CONSULTAR A TODOS LOS ALUMNOS   * 
 ********************************************/ 

app.get('/api/v1/alumno/', (req, res) => {
    Alumno.find( {} , ( error, alumnos ) => {
        Programa.populate(alumnos,{ path : 'programa'}, (err, result)=>{
            res.send(result);
        })
    })
})

/****************************************
 *   CONSULTAR 1 SOLO ALUMNO BY ID      *
 ****************************************/

 app.get('/api/v1/alumno/:id/', (req, res) => {
    let {id} = req.params;
    Alumno.findById(id).exec()
        .then( alumno => 
            Programa.populate(alumno , {path : 'programa'}, (err, result) => {
                res.status(200).send(result);
            }))
        .catch( err => res.send(err));
    });

/* ******************************************
 *              BORRAR ALUMNOS              * 
 ********************************************/

app.delete('/api/v1/alumno/:id', (req, res) => {
    let {id} = req.params;
    Alumno.findByIdAndRemove(id).exec()
        .then( alumno => res.status(204).send(alumno))
        .catch( err => res.send(err));
});

 /* ******************************************
 *             BORRAR PROGRAMAS              * 
 ********************************************/

app.delete('/api/v1/programa/:id', (req, res) => {
    let {id} = req.params;
    Programa.findByIdAndRemove(id).exec()
        .then( alumno => res.status(204).send(alumno))
        .catch( err => res.send(err));
});

 /* ******************************************
 *           ACTUALIZAR ALUMNO               * 
 *********************************************/

 app.put('/api/v1/alumno/:id', (req, res) => {
    let {id} = req.params;
    Alumno.findByIdAndUpdate(id, { $set : req.body},{new : true}).exec()
        .then( alumno => res.send(alumno))
        .catch( err => res.send(err));
 });


app.listen(8000, () => {
    console.log("Server working on port 8000");
})