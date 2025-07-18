const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde Express - cambios gerchoque! - cambio 3 - 4 - 5');
});

app.listen(3000, () => {
  console.log('Servidor Express escuchando en el puerto 3000');
  console.log('pruebas de cambios git');
  console.log('pruebas 3');
  console.log('pruebas 4');
  console.log('pruebas 5');
  console.log('pruebas 6');
});
