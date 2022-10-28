import mongoose, { mongo } from "mongoose";

const ImagenRespuestaSchema = mongoose.Schema({
    idRespuestaTicket: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket",
        require: true
    },

    nombrePublicoImagen: {
        type: String,
        require: true,
        trim: true
    },

    nombrePrivateImagen: {
        type: String,
        require: true,
        trim: true
    }
}, {
    timestamps: true
});

const ImagenRespuesta = mongoose.model("ImagenRespuesta", ImagenRespuestaSchema);
export default ImagenRespuesta;