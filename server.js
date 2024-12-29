const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Ranking inicial
let ranking = {
  'Los que siempre llegan tarde': 0,
  'Los impertinentes': 0,
  'Los que no se enteran': 0,
  'Los del último asiento': 0,
  'Los despistados': 0,
  'Los de la bombilla fundida': 0,
  'Los del disfraz olvidado': 0,
  'El jardín secreto': 0,
  'Los guardianes del tiempo': 0,
  'La melodía perdida': 0,
  'El alma de Cádiz': 0,
  'Los viajeros del sur': 0,
  'La sombra de la luna': 0,
  'Los eternos soñadores': 0,
  'La voz del silencio': 0,
};

// Ruta para obtener el ranking
app.get('/ranking', (req, res) => {
  res.json(ranking);
});

// Ruta para votar
app.post('/votar', (req, res) => {
  const { agrupacion } = req.body;
  if (ranking[agrupacion] !== undefined) {
    ranking[agrupacion] += 1; // Incrementa el voto
    res.json({ message: '¡Voto registrado!', ranking });
  } else {
    res.status(400).json({ error: 'Agrupación no encontrada.' });
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});