const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando con Vercel!");
});

// Endpoint para puntuar
app.post("/puntuar", (req, res) => {
  const { modalidad, agrupacion, puntuacion } = req.body;
  console.log("Puntuación recibida:", { modalidad, agrupacion, puntuacion });

  res.status(200).json({ message: "Puntuación registrada con éxito" });
});

// Endpoint para obtener el ranking
app.get("/ranking", (req, res) => {
  const ranking = [
    { agrupacion: "Los trastos", modalidad: "comparsas", puntos: 85 },
    { agrupacion: "Los cabecita loca", modalidad: "chirigotas", puntos: 90 },
    { agrupacion: "Ley natura", modalidad: "coros", puntos: 80 },
    { agrupacion: "ONG (organización no gaditana)", modalidad: "cuartetos", puntos: 75 },
  ];

  // Enviar el ranking como respuesta en formato JSON
  res.json(ranking);
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
