const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Bienvenida
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Ver usuarios
app.get('/users/', function (req, res) {
  res.send('Estas en la página de usuarios');
});

// Crear un usuario
app.post('/users/', (req, res) => {
  // console.log(req.body);
  let nuevoUsuario = req.body;
  console.log(nuevoUsuario);

  res.status(201).send(nuevoUsuario);
})

// Update usuario
app.put('/users/:id/' , (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.status(200).send("Usuario actualizado exitosamente");
});


// Delete 
app.delete('/users/:id/', (req, res) => {
  console.log(req.params);
  res.status(204).send(req.params);
});





// Incialización del servidor

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

