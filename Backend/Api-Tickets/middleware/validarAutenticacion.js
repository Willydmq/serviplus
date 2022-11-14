import jwt from "jsonwebtoken";
import Usuario from "../models/usuario.js";

const validarAutenticacion = async (req, res, next) => {
    // console.log(req.headers.authorization);
  let tokenJwt;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      tokenJwt = req.headers.authorization.split(" ")[1];
      //   console.log(tokenJwt);

      const decode = jwt.verify(tokenJwt, process.env.JWT_SECRET);
      //   console.log(decode);

      req.usuario = await Usuario.findById(decode.id).select(
        "-claveAcceso -estadoUsuario -createdAt -updatedAt -__v -idRol -celularUsuario -correoUsuario -direccionUsuario"
      );
      //   console.log(req.usuario);
      return next();
    } catch (error) {
      return res
        .status(404)
        .json({ msg: "hubo un error", ok: "TOKEN_INVALIDO" });
    }
  }
  if (!tokenJwt) {
    const error = new Error("Token no Valido");
    return res.status(401).json({ msg: error.message, ok: "TOKEN_INVALIDO" });
  }
  next();
};

export default validarAutenticacion;
