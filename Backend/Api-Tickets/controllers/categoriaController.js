import Categoria from "../models/categoria.js"

const agregar = async (req, res) => {
  try{
    const categoria = new Categoria(req.body);
    const categoriaGuardada = await categoria.save();
    res.json({body:categoriaGuardada, msg:"Documento creado correctamente", ok: "SI"})
  }catch (error){
    console.log(error)
  }
};

const listar = async (req, res) => {
  const categorias = await Categoria.find();
  res.json(categorias)
};

const eliminar = async (req, res) => {
  const {id} = req.params;
  
  const categoria = await Categoria.findById(id);
  
  if(!categoria){
    const error = new Error("Documento no encontrado");
    return res.status(404).json({msg: error.message, ok: "SI"})
    
  }
  
  try{
    await categoria.deleteOne();
    res.json({msg: "Documento eliminado correctamente", ok: "SI"});
  }catch(error){
    console.log(error)
  }
};

const editar = async (req, res) => {
  const {id} = req.params;
  
  const categoria = await Categoria.findById(id);
  
  if(!categoria){
    const error = new Error("Documento no encontrado");
    return res.status(404).json({msg: error.message, ok: "SI"})
    
  }
  
  categoria.nombreCategoria = req.body.nombreCategoria || categoria.nombreCategoria;
  
  try{
    const categoriaGuardada = await categoria.save();
    res.json({body: categoriaGuardada, msg: "Documento actualizado correctamente", ok: "SI"});
  }catch(error){
    console.log(error)
  }
};

const listarUno = async (req, res) => {
  const {id} = req.params;
  
  const categoria = await Categoria.findById(id);
  
  if(!categoria){
    const error = new Error("Documento no encontrado");
    return res.status(404).json({msg: error.message, ok: "SI"})
    
  }
  res.json(categoria);
};

export { agregar, listar, eliminar, editar, listarUno };
