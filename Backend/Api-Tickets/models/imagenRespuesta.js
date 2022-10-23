import mongoose from "mongoose";

const imagenRespuestaSchema = mongoose.Schema(
  {
    idRespuestaTicket: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
      require: true,
    },
    nombrePublicoImagen: {
      type: String,
      require: true,
      trim: true,
    },
    nombrePrivateImagen: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const ImagenRespuesta = mongoose.model(
  "ImagenRespuesta",
  imagenRespuestaSchema
);

export default ImagenRespuesta;
