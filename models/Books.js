const mongoose = require('mongoose');
const db = require('../lib/db_coonect');

const messages = require('../messages');

const bookSchema = new db.Schema({
  name: {
    type: String,
    trim: true,
    required:messages('required')
  },
  authors:{
    type: Array,
    required: true,
    trim:true,
  },
  image: {
    type:String,
    trim: true,
    required:true
  },
  price: {
    type: Number,
    required: true,
  },
  sold: {  //vacharvac qanak
    type: Number
  },

  pages: {
    type: Number,
    // required: function() {
    //   return this.pages + messages('minPage');
    // }
  },

  language: {
      type: Array,
      required: true,
    },
  type: {  //vor janr e
    type: Array,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  sale: {
    type: Number,
    default: 0
  },
  reviews: {
    type: Array,
  },
  date_add: {
    type: Date,
    default: new Date(),
  },
  date_create: {
    type: Date,
    required:messages('required'),
  },

});

module.exports = mongoose.model('book', bookSchema);//collectiono hanunn e inch uzum e linum e
