import Rol from "../models/rol.js";
import dominios from "../helpers/dominios.js";

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
    res.json({ body: rolAlmacenado, ok: "SI", msg:"Registro Creado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

const listar = async (req, res) => {
  const roles = await Rol.find();
  res.json(roles);
};

const eliminar = async (req, res) => {
  const { id } = req.params;

  const rol = await Rol.findById(id);

  if (!rol) {
    const error = new Error("Registro no encontrado");
    return res.status(404).json({ msg: error.message, ok: "NO" });
  }

  try {
    await rol.deleteOne();
    res.json({ msg: "Registro eliminado correctamente", ok: "SI" });
  } catch (error) {
    console.log(error);
  }
};

const editar = async (req, res) => {
  const { id } = req.params;

  const rol = await Rol.findById(id);

  if (!rol) {
    const error = new Error("Registro no encontrado");
    return res.status(404).json({ msg: error.message, ok: "NO" });
  }

  rol.nombreRol = req.body.nombreRol || rol.nombreRol;
  rol.estadoRol = req.body.estadoRol || rol.estadoRol;

  try {
    const rolGuardado = await rol.save();
    res.json({
      body: rolGuardado,
      msg: "Registro editado correctamente",
      ok: "SI",
    });
  } catch (error) {
    console.log(error);
  }
};

const listarUno = async (req, res) => {
  const { id } = req.params;

  const rol = await Rol.findById(id);

  if (!rol) {
    const error = new Error("Registro no encontrado");
    return res.status(404).json({ msg: error.message, ok: "NO" });
  }

  res.json(rol);
};

const comboRoles = async (req, res) => {
  const roles = await Rol.find({estadoRol:dominios.ESTADO_ACTIVO_ROL});
  res.json(roles);
};

export { agregar, listar, eliminar, editar, listarUno, comboRoles};
