/**
 * Users Controller
 * @module controllers/users
 * @author Ruben Barseghyan
 */
const Users = require('../models/Users'); //inqy constructor e dra hamar



exports.getAll = async(req, res, next)=>{
  try{
    const data = await Users.findAsync({}, {name:1, position:1, id:1});
    res.json(data);
  } catch(e){
    next(e);
  }
}

exports.getById = async (req, res, next)=>{
  try{
    const data = await Users.findAsync(req.params.id);
    res.json(data);
  }catch(e){
      next(e);
  }
}

exports.update = async(req, res, next)=>{
  try{
  const data = await Users.updateAsync(
    {_id:req.params.id},
    {name:req.body.name, email:req.body.email, age:req.body.age})
    res.json({"ok":"was update successfully"});
  }catch(e){
    next(e);
  }
}

exports.register = async(req, res, next)=>{
  try{
    const user = new Users(req.body);
    const data = await user.saveAsync();
    res.json({data:data});
  }catch(e){
    next(e);
  }
}

exports.remove = async (req, res, next)=>{
  try{
    const data = await Users.deleteOneSync({_id:req.params});
    res.json({data:data});
  }catch(e){
    console.log(e.message);
  }
}
