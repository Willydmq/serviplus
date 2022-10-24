import mongoose from "mongoose";

const imagenTicketSchema = mongoose.Schema(
  {
    idTicket: {
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

const ImagenTicket = mongoose.model("ImagenTicket", imagenTicketSchema);

export default ImagenTicket;
