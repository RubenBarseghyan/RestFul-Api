/**
 * Category Controller
 * @module controllers/statistics
 * @author Ruben Barseghyan
 */
const Stat = require('../models/ServerStatistics');



exports.getAll = async(req, res, next)=>{
  try{
    const data = await Stat.findAsync({});
    res.json(data);
  } catch(e){
    console.log(e.message);
  }
}
exports.getByTime = (req, res, next)=>{
  
}

exports.getById = async (req, res, next)=>{
  try{
    const data = await Stat.findAsync(req.params.id);
    res.json(data);
  }catch(e){
      next(e);
  }
}

exports.update = async(req, res, next)=>{
  try{
  const data = await Stat.updateAsync(
    {_id:req.params.id},
    {});
    res.json({"ok":"was update successfully"});
  }catch(e){
    next(e);
  }
}

exports.create = async(req, res, next)=>{
  try{
    const book = new Stat(req.body);
    const data = await book.saveAsync();
    res.json({data:data});
  }catch(e){
    next(e);
  }
}

exports.remove = async (req, res, next)=>{
  try{
    const data = await Stat.deleteOneSync({_id:req.params});
    res.json({data:data});
  }catch(e){
    console.log(e.message);
  }
}
