import { conn } from "../db.js";

const getAlbumes = async (_, res) => {
    const [albumes] = await conn.query("SELECT * FROM albumes");
    res = albumes;
    return res
};

const getAlbum = async (req, res) => {
    const [album] = await conn.query("SELECT * FROM albumes WHERE id=?",[req.params.id]);
    res = album;
    return res
};

const createAlbum = async (req, res) => {
    // Completar con la consulta que crea un album
    // Recordar que los parámetros de una consulta POST se encuentran en req.body
    // Deberían recbir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del album",
            "artista": "Id del artista"
        }
    */
    const [result] = await conn.query("INSERT INTO albumes (nombre,artista) VALUES (?,?)",[req.body.nombre,req.body.artista]);
    return result;
};

const updateAlbum = async (req, res) => {
    // Completar con la consulta que actualiza un album
    // Recordar que en este caso tienen parámetros en req.params (el id) y en req.body (los demás datos)
    // Deberían recbir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del album",
            "artista": "Id del artista"
        }
    */
    await conn.query('UPDATE albumes SET nombre=?, artista=? WHERE id=?',[req.body.nombre,req.body.artista,req.params.id]);
};

const deleteAlbum = async (req, res) => {
    // Completar con la consulta que elimina un album
    // Recordar que los parámetros de una consulta DELETE se encuentran en req.params
    [result] = await conn.query("DELETE FROM albumes WHERE id=?",[req.params.id]);
    return result;
};

const getCancionesByAlbum = async (req, res) => {
    // Completar con la consulta que devuelve las canciones de un album
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getCanciones
    const[result]= await conn.query("SELECT * FROM canciones WHERE album=?",[req.params.id]);
    return result;
};

const albumes = {
    getAlbumes,
    getAlbum,
    createAlbum,
    updateAlbum,
    deleteAlbum,
    getCancionesByAlbum,
};

export default albumes;
