import express from "express";
import {
  agregar,
  listar,
  eliminar,
  editar,
  listarUno,
} from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/", listar);
router.get("/:id", listarUno);
router.post("/", agregar);
router.put("/", editar);
router.delete("/", eliminar);

export default router;
