import express from "express";
import {
  agregar,
  listar,
  eliminar,
  editar,
  listarUno,
  autenticar,
  crearCuenta
} from "../controllers/usuarioController.js";
import validarAutenticacion from "../middleware/validarAutenticacion.js";

const router = express.Router();

/* Un enrutador. privado*/
router.get("/", validarAutenticacion, listar);
router.get("/:id", validarAutenticacion, listarUno);
router.post("/", validarAutenticacion, agregar);
router.put("/:id", validarAutenticacion, editar);
router.delete("/:id", validarAutenticacion, eliminar);

/* Crear una ruta para el inicio de sesión y crear una cuenta. publico*/
router.post("/login", autenticar);
router.post("/crear-cuenta", crearCuenta);


export default router;
