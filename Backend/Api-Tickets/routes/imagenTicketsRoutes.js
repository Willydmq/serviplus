import express from "express";
import {
  agregar,
  listar,
  eliminar,
  editar,
  listarUno,
} from "../controllers/imagenTicketController.js";

const router = express.Router();

router.get("/", listar);
router.get("/:id", listarUno);
router.post("/", agregar);
router.put("/:id", editar);
router.delete("/:id", eliminar);

export default router;
