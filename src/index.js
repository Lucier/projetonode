const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Olá Mundo 3' });
});

app.listen(3333);
console.log('Servidor rodando na porta 3333');