/**
 * Category Controller
 * @module controllers/Category
 * @author Ruben Barseghyan
 */
const Cat = require('../models/Category');



// exports.getAll = (req, res, next)=> {
//   Cat.findAsync({}, {name: 1, position: 1, id: 1})
//       .then((data) => {
//         res.json(data);
//       })
//       .catch((err) => {
//         res.json(err);
//       });
// }


exports.getAll = async(req, res, next)=>{
  try{
    const data = await Cat.findAsync({}, {name:1, position:1, id:1});
    res.json(data);
  } catch(e){
    next(e);
  }
}
//------verevy promisov e grvac u error obrabotka exac
// exports.getAll = (req, res, next)=> {
//   Cat.find({}, {name: 1, position: 1, id: 1}, (err, data) =>{
//     console.log(data);
//     res.json(data);
//   });
// }

// exports.getById = (req, res, next) => {
//   Cat.findById(req.params.id, (err, data) =>{
//     console.log(data);
//     res.json(data);
//   })
//   }

// exports.getById = (req, res, next)=>{
//   Cat.findByIdAsync(req.params.id)
//   .then((data)=>{
//     res.json(data);
//   })
//   .catch((err)=>
// res.json(err)
// )}

exports.getById = async (req, res, next)=>{
  try{
    const data = await Cat.findAsync(req.params.id);
    res.json(data);
  }catch(e){
      next(e);
  }
}

  // exports.update = (req, res, next) => {
  //   Cat.update(
  //     { _id: req.params.id },
  //     { name: req.body.name, position: req.body.position},
  //   (err) => {
  //     if(err) console.log(err);
  //     res.json({ok: 'ok'});
  //   });
  // };

  // exports.update = (req, res, next)=>{
  //   Cat.updateAsync(
  //     {_id:req.params.id},
  //     {name:req.body.name, position:req.body.position})
  //     .then((data)=>{
  //       res.json({"ok":"ok"});
  //     })
  //     .catch((err)=>{
  //       res.json(err);
  //     })
  // }

  exports.update = async(req, res, next)=>{
    try{
    const data = await Cat.updateAsync(
      {_id:req.params.id},
      {name:req.body.name, position:req.body.position});
      res.json({"ok":"was update successfully"});
    }catch(e){
    console.log(e.message);
    }
  }

  // exports.create = (req, res, next) => {
  //   const cat = new Cat(req.body);
  //   cat.save((err, data) => {
  //     if(err) return res.json({ error: err })
  //     return res.json({ data: data });
  //   });
  // }

  // exports.create = (req, res, next)=>{
  //   const cat = new Cat(req.body);
  //   cat.saveAsync()
  //   .then((data)=>{
  //     res.json({data:data});
  //     })
  //
  //   .catch((err)=>{
  //     res.json(err);
  //   });
  // }


  exports.create = async(req, res, next)=>{
    try{
      const cat = new Cat(req.body);
      const data = await cat.saveAsync();
      res.json({data:data});
    }catch(e){
      next(e);
    }
  }

  // exports.remove = (req, res, next) => {
  //   Cat.deleteOne({_id: req.params.id}, (err)=>{
  //     if(err){
  //       console.log(err);
  //       res.json({removed:true});
  //     }else{
  //         res.json({ok: 'it wad deleted'});
  //     }
  //   });
  // }



  //
  // exports.remove = (req, res, next)=>{
  //   Cat.deleteOneAsync({_id:req.params.id})
  //   .then((data)=>{
  //     res.json({remove:true});
  //   })
  //   .catch((err)=>{
  //     res.json({err})
  //   })
  // }

  exports.remove = async (req, res, next)=>{
    try{
      const data = await cat.deleteOneSync({_id:req.params});
      res.json({data:data});
    }catch(e){
      console.log(e.message);
    }
  }
