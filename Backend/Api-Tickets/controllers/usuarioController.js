import Usuario from "../models/Usuario.js";
import generarJWT from "../helpers/generarJWT.js";

const agregar = async (req, res) => {
    //evitar usuarios duplicados por el usuarioAcceso
    const { usuarioAcceso } = req.body;
    const existeUsuario = await Usuario.findOne({ usuarioAcceso });

    if (existeUsuario) {
        const error = new Error("Usuario ya esta registrado en la base de datos.");
        return res.status(400).json({ msg: error.message, ok: "NO" });
    }

    try {
        const usuario = new Usuario(req.body);
        const usuarioGuardado = await usuario.save();
        res.json({ body: usuarioGuardado, ok: "SI" });
    } catch (error) {
        console.log(error);
    }
}

const listar = async (req, res) => {
    console.log("respondiedo desde el metodo listar");
}

const eliminar = async (req, res) => {
    console.log("respondiedo desde el metodo eliminar");
}

const editar = async (req, res) => {
    console.log("respondiedo desde el metodo editar");
}

const listarUno = async (req, res) => {
    console.log("respondiedo desde el metodo listarUno");
}

const autenticar = async (req, res) => {
    const { usuarioAcceso, claveAcceso } = req.body;

    //comprobar si el usuario existe
    const usuario = await Usuario.findOne({ usuarioAcceso });
    if (!usuario) {
        const error = new Error("El usuario no existe.");
        return res.status(404).json({ msg: error.message, ok: "NO_EXISTE" });
    }

    //comprobar la contraseña
    if (await usuario.comprobarClave(claveAcceso)) {
        res.json({
            _id: usuario._id,
            nombresUsuario: usuario.nombresUsuario,
            usuarioAcceso: usuario.usuarioAcceso,
            tokenJwt: generarJWT(usuario._id)
        });
    } else {
        const error = new Error("La clave es incorrecta.");
        res.json({ msg: error.message, ok: "CLAVE_ERRONEA" });
    }
}

const crearCuenta = async (req, res) => {
    console.log('crear cuenta')
    //evitar usuarios duplicados por el usuarioAcceso
    const { usuarioAcceso } = req.body;
    const existeUsuario = await Usuario.findOne({ usuarioAcceso });

    if (existeUsuario) {
        const error = new Error("Usuario ya esta registrado en la base de datos.");
        return res.status(400).json({ msg: error.message, ok: "NO" });
    }

    try {
        const usuario = new Usuario(req.body);
        const usuarioGuardado = await usuario.save();
        res.json({ body: usuarioGuardado, ok: "SI", msg: "Registro creado correctamente." });
    } catch (error) {
        console.log(error);
    }
}

export {
    agregar,
    listar,
    eliminar,
    editar,
    listarUno,
    autenticar,
    crearCuenta
}