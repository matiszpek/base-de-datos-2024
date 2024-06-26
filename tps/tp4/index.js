import express from "express";
const app = express();
const port = 3000;

import artistas from "./controllers/artistas.js";
import albumes from "./controllers/albumes.js";
import canciones from "./controllers/canciones.js";

app.use(express.json());

app.get("/", (_, res) => {

    console.log("a")
    res.send("SpoTICfy API working!");
});

app.get("/albumes",async (_, res) => {
    const albu = await albumes.getAlbumes();
    res.send(albu);
});

app.get("/albumes/:id",async (req, res) => {
    const [albu] = await albumes.getAlbum(req.params.id);
    res.send(albu);
});

app.post("/albumes",async (req, res) => {
    let albu = await albumes.createAlbum(req.body);
    res.send(albu);
});

app.get("/canciones",async (_, res) => {
    const can = await canciones.getCanciones();
    res.send(can);
});
app.get("/canciones/:id",async (req, res) => {
    const [can] = await canciones.getCancion(req.params.id);
    res.send(can);
});



/* ------------------- Rutas ------------------- */

// Artistas
// Completar con las rutas de artistas
// Para acceder a cada funcion de artistas, se debe hacer de la siguiente forma:
// artistas.getArtistas;
// artistas.getArtista;
// ...

// Albumes
// Completar con las rutas de albumes
// Para acceder a cada funcion de albumes, se debe hacer de la siguiente forma:
// albumes.getAlbumes;
// albumes.getAlbum;
// ...

// Canciones
// Completar con las rutas de canciones
// Para acceder a cada funcion de canciones, se debe hacer de la siguiente forma:
// canciones.getCanciones;
// canciones.getCancion;
// ...

app.listen(port, () => {
    console.log(`SpoTICfy API listening at http://localhost:${port}`);
});
