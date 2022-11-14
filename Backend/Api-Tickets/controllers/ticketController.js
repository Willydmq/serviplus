import Ticket from "../models/tickets.js";

const agregar = async (req, res) => {
  console.log("respondiendo desde el metodo crear");
};

const listar = async (req, res) => {
 const tickets = await Ticket.find().populate('idCategoria',{
  nombreCategoria:1,
  _id:0
 }).populate('idCliente',{
  nombresUsuario:1,
  _id:0
 });
 res.json(tickets);
};

const eliminar = async (req, res) => {
  console.log("respondiendo desde el metodo eliminar");
};

const editar = async (req, res) => {
  console.log("respondiendo desde el metodo editar");
};

const listarUno = async (req, res) => {
  console.log("respondiendo desde el metodo listarUno");
};

export { agregar, listar, eliminar, editar, listarUno };
