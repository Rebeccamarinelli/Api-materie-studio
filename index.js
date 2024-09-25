
const materie = require('./data/data');
const express = require('express');
const app = express();
const port = 3000;

// Middleware per gestire le richieste JSON
app.use(express.json());

// Una rotta di esempio: GET /users
app.get('/', (req, res) => {
    res.json(materie);
  });

app.get('/api/materie', (req, res) => {
  res.json(materie);
});

// Avvio del server
app.listen('https://apimaterie.onrender.com' || port, () => {
  console.log(`API ascolta su http://localhost:${port}`);
});