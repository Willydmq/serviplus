import Usuario from "../models/usuario.js";
import generarJWT from "../helpers/generarJWT.js";

const agregar = async (req, res) => {
  const { usuarioAcceso } = req.body;
  const existeusuario = await Usuario.findOne({ usuarioAcceso });

  if (existeusuario) {
    const error = new Error("Usuario ya esta registrado enla bse de datos");
    return res.status(400).json({ msg: error.message, ok: "NO" });
  }

  try {
    const usuario = new Usuario(req.body);
    const usuarioGuardado = await usuario.save();
    res.json({ body: usuarioGuardado, ok: "SI" });
  } catch (error) {
    console.log(error);
  }
};

const listar = async (req, res) => {
  console.log("respondiendo desde el metodo listar usuarios");
};

const eliminar = async (req, res) => {
  console.log("respondiendo desde el metodo eliminar usuarios");
};

const editar = async (req, res) => {
  console.log("respondiendo desde el metodo editar usuarios");
};

const listarUno = async (req, res) => {
  console.log("respondiendo desde el metodo listarUno usuarios");
};

const autenticar = async (req, res) => {
  const { usuarioAcceso, claveAcceso } = req.body;
  const usuario = await Usuario.findOne({ usuarioAcceso });
  if (!usuario) {
    const error = new Error("El usuario no existe");
    return res.status(404).json({ msg: error.message });
  }
  if (await usuario.comprobarClave(claveAcceso)) {
    res.json({
      _id: usuario._id,
      nombresUsuario: usuario.nombresUsuario,
      usuarioAcceso: usuario.usuarioAcceso,
      tokenJwt: generarJWT(usuario._id),
    });
  } else {
    const error = new Error("La clave es incorrecta");
    res.json({ msg: error.message });
  }
};

export { agregar, listar, eliminar, editar, listarUno, autenticar };
