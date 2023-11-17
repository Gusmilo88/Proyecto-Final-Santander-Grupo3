const mongoose = require('mongoose');

const db = process.env.DB_MONGOOSE;

mongoose.connect(db)
    .then(() => console.log("Base de datos conectada"))
    .catch(error => console.log("Error en la conexion: " + error))
