import Rol from "../models/rol.js";

const agregar = async (req, res) => {
  const { nombreRol } = req.body;
  const existeRol = await Rol.findOne({ nombreRol });

  if (existeRol) {
    const error = new Error("Rol ya esta registrado en la base de datos");
    return res.status(400).json({ msg: error.message, ok: "NO" });
  }
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
