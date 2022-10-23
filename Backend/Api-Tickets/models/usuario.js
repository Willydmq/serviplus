import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema(
  {
    idRol: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rol",
      require: true,
      trimp: true,
    },
    nombresUsuario: {
      type: String,
      require: true,
      trim: true,
    },
    celularUsuario: {
      type: Number,
      require: true,
      trim: true,
    },
    correoUsuario: {
      type: String,
      require: true,
      trim: true,
    },
    direccionUsuario: {
      type: String,
      require: true,
      trim: true,
    },
    usuarioAcceso: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    claveAcceso: {
      type: String,
      require: true,
      trim: true,
    },
    estadoUsuario: {
      type: Number,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;
