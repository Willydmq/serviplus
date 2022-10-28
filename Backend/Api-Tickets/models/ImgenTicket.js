import mongoose, { mongo } from "mongoose";

const ImagenTicketSchema = mongoose.Schema({
    idTicket: {
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

const ImagenTicket = mongoose.model("ImagenTicket", ImagenTicketSchema);
export default ImagenTicket;