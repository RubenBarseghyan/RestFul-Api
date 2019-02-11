const mongoose = require('mongoose');
const db = require('../lib/db_coonect');
const crypto = require('crypto');

const usersSchema = new db.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minLength: 3,
    maxLenghth: 90
  },
  email: {
    type: String,
    email:true,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
    required: true
  },
  address:{
    country: {type: String,required: true,},
    city: { type: String,required: true,},
  },
    image: {
      type: String,
      default:'default.jpg'
    },
    role: {
      type: String,
      enum: ['user', 'editor', 'admin'],
      default: 'user'
    },
    hash: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required:true
    },
    iteration: {
      type: Number,
      required: true,//true i texy krnanq texy karox enq message grel qani vor Stringy true e
    },
    created: {
      type: Date,
      default: Date.now(),
    }
  });

  usersSchema.virtual('password')
  .set(function(data){
    this.salt = String(Math.random());
    this.iteration = parseInt(Math.random()*18);
    this.hash = this.getHash(data);
  })
  .get(function(){
    return this.hash;
  });

  usersSchema.methods.getHash = function(password){
    let c = crypto.createHmac('sha1', this.salt);
    for(let i = 0; i< this.iteration; i++){
      c = c.update(password);
    }
    return c.digest('hex');
  };

  usersSchema.methods.checkPassword = function(data){
    return this.getHash(data) === this.hash
  };


module.exports = mongoose.model('users', usersSchema);
