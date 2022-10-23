import Rol from "../models/rol.js";

const agregar = async (req, res) => {
  try {
    const rol = new Rol(req.body);
    const rolAlmacenado = await rol.save();
    res.json({ body: rolAlmacenado, ok: "SI" });
  } catch (error) {
    console.log(error);
  }
};

const listar = async (req, res) => {
  console.log("respondiendo desde el metodo listar");
};

const eliminar = async (req, res) => {
  console.log("respondiendo desde el metodo eliminar");
};

const editar = async (req, res) => {
  console.log("respondiendo desde el metodo editar");
};

const listarUno = async (req, res) => {
  console.log("respondiendo desde el metodo listarUno");
};

export { agregar, listar, eliminar, editar, listarUno };
