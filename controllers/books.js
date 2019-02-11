/**
 * Category Controller
 * @module controllers/Books
 * @author Ruben Barseghyan
 */
const Books = require('../models/Books');



exports.getAll = async(req, res, next)=>{
  try{
    const data = await Books.findAsync({}, {name:1, position:1, id:1});
    res.json(data);
  } catch(e){
    next(e);
  }
}

exports.getById = async (req, res, next)=>{
  try{
    const data = await Books.findAsync(req.params.id);
    res.json(data);
  }catch(e){
      next(e);
  }
}

exports.update = async(req, res, next)=>{
  try{
  const data = await Books.updateAsync(
    {_id:req.params.id},
    {name:req.body.name, position:req.body.position});
    res.json({"ok":"was update successfully"});
  }catch(e){
    next(e);
  }
}

exports.create = async(req, res, next)=>{
  try{
    const book = new Books(req.body);
    const data = await book.saveAsync();
    res.json({data:data});
  }catch(e){
    next(e);
  }
}

exports.remove = async (req, res, next)=>{
  try{
    const data = await Books.deleteOneSync({_id:req.params});
    res.json({data:data});
  }catch(e){
    console.log(e.message);
  }
}
