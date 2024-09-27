
const materie = require('./data/data');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://localhost:4200', // Specifica l'origine permessa (es: il tuo frontend)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Metodi permessi
  allowedHeaders: ['Content-Type', 'Authorization'], // Header permessi
  credentials: true // Permette l'invio di cookie
};

// Usa il middleware CORS con le opzioni specificate
app.use(cors(corsOptions));

// Middleware per gestire le richieste JSON
app.use(express.json());




// Una rotta di esempio: GET /users
app.get('/', (req, res) => {
    res.json(materie);
  });


// Avvio del server
app.listen(process.env.PORT || port, () => {
  console.log(`API ascolta su http://localhost:${port}`);
});