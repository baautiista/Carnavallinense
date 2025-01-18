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

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
