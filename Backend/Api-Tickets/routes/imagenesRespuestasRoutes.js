import express from "express";
const router = express.Router();
import { agregar, listar, eliminar, editar, listarUno } from "../controllers/imagenRespuestaController.js";

router.get("/", listar);
router.get("/:id", listarUno);
router.post("/", agregar);
router.put("/", editar);
router.delete("/", eliminar);

export default router;