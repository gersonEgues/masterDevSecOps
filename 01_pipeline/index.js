const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde Express!');
});

app.listen(3000, () => {
  console.log(`Servidor Express escuchando en el puerto 3000`);
});
