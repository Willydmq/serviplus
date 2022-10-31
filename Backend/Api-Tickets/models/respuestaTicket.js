import mongoose from "mongoose";

const respuestaTicketSchema = mongoose.Schema({
    idTicket: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket",
        require: true,
        trim: true
    },

    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        require: true,
        trim: true
    },

    fechaRespuestaTicket: {
        type: Date,
        require: true,
        trim: true
    },

    horaRespuestaTicket: {
        type: Date,
        require: true,
        trim: true
    },

    descripcionTicket: {
        type: String,
        require: true,
        trim: true
    }
}, {
    timestamps: true
});

const RespuestaTicket = mongoose.model("RespuestaTicket", respuestaTicketSchema);
export default RespuestaTicket;