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
    res.send('Funcionando');
}); 



// Crear un nuevo programa 
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

// Crear nuevo alumno

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


app.get('/api/v1/alumno/', (req, res) => {
    Alumno.find( {} , ( error, alumnos ) => {
        Programa.populate(alumnos,{ path : 'programa'}, (err, result)=>{
            res.send(result);
        })
        // res.send(alumnos);
    })
})

app.listen(8000, () => {
    console.log("Server working on port 8000");
})