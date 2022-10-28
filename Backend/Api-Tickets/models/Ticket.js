import mongoose from "mongoose";

const ticketSchema = mongoose.Schema({
    idCategoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categoria",
        require: true,
        trim: true
    },

    idCliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        require: true,
        trim: true
    },

    horaTicket: {
        type: Date,
        require: true,
        trim: true
    },

    fechaTicket: {
        type: Date,
        require: true,
        trim: true
    }, 

    asuntoTicket: {
        type: String,
        require: true,
        trim: true
    },

    descripcionTicket: {
        type: String,
        require: true,
        trim: true
    },

    numeroTicket: {
        type: Number,
        require: true,
        trim: true
    },

    estadoTicket: {
        type: Number,
        require: true,
        trim: true
    }
}, {
    timestamps: true
});

const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;