const express = require('express');
const connect = require('./configuration/db');
const cors = require('cors');
//Creacion del servidor
const app = express();

//Conexion a la base de datos
connect();
app.use(cors());

app.use(express.json())

app.use('/api/productos', require('./routes/producto'));

//Ruta principal
/*app.get("/", (req, res) => {
    res.send("Hola mundo");
})*/

//Escuchar
app.listen(4000, () => {
    console.log('El servidor corre perfecto');
});