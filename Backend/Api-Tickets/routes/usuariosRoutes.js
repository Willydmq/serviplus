import express from "express";
const router = express.Router();
import { agregar, listar, eliminar, editar, listarUno, autenticar, crearCuenta } from "../controllers/usuarioController.js";
import validarAutenticacion from "../middleware/validarAutenticacion.js";

//rutas privadas
router.get("/", validarAutenticacion, listar);
router.get("/:id", validarAutenticacion, listarUno);
router.post("/", validarAutenticacion, agregar);
router.put("/", validarAutenticacion, editar);
router.delete("/", validarAutenticacion, eliminar);

//rutas publicas
router.post("/login", autenticar);
router.post("/crear-cuenta", crearCuenta);

export default router;