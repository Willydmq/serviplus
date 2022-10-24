import express from "express";
import {
  agregar,
  listar,
  eliminar,
  editar,
  listarUno,
} from "../controllers/rolController.js";
import validarAutenticacion from "../middleware/validarAutenticacion.js";

const router = express.Router();

router.get("/", validarAutenticacion, listar);
router.get("/:id", validarAutenticacion, listarUno);
router.post("/", validarAutenticacion, agregar);
router.put("/:id", validarAutenticacion, editar);
router.delete("/:id", validarAutenticacion, eliminar);

export default router;
