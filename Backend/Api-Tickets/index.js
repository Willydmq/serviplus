//const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import cors from 'cors';

//importar archivos de las rutas
import rolesRoutes from './routes/rolesRoutes.js';
import usuariosRoutes from './routes/usuariosRoutes.js';
import categoriasRoutes from './routes/categoriasRoutes.js';
import ticketsRoutes from './routes/ticketsRoutes.js';
import respuestasTicketsRoutes from './routes/respuestasTicketsRoutes.js';
import imagenesTicketsRoutes from './routes/imagenesTicketsRoutes.js';
import imagenesRespuestasRoutes from './routes/imagenesRespuestasRoutes.js';

//iniciamos el servidor de express
const app = express();
app.use(express.json());//para leer datos en formato json

//inicializamos las variables de ambiente
dotenv.config();

//conectar a la base de datos mongoDB
conectarDB();

//permitir conexiones externas con cors
const listaBlanca = [process.env.FRONTEND_URL]
const corsOptions = {
    origin: function (origin, callback) {
        if (listaBlanca.includes(origin)) {
            //puede consumir el api
            callback(null, true);
        } else {
            //no puede consumir el api
            callback(new Error("Error de permisos cors."));
        }
    },
};
app.use(cors(corsOptions));

//routing
app.use("/api/roles", rolesRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/categorias", categoriasRoutes);
app.use("/api/tickets", ticketsRoutes);
app.use("/api/restickets", respuestasTicketsRoutes);
app.use("/api/imagenestickets", imagenesTicketsRoutes);
app.use("/api/imagenerespuestas", imagenesRespuestasRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});