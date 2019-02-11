


//users country
//users age interval
//gender -> book type
//users payment type


//cotegory book country
//category book sale
//category views count


//all profit
// month profit
// day profiit


//server statistics

//server proc
//db  --real time -10s
//ram   --real time -10s
//network  --real time -10s
//ssd/ hdd  --real time -10s
//log  --real time-10s


const mongoose = require ('mongoose');
const db = require('../lib/db_coonect');
const statisticSchema = new db.Schema({
  userCountry:{
    type:String,
    required:true
  },
  userAgeInterval :{
    type:Number,
    required: true
  },
  userGender: {
    type:Boolean,
    default:"male"
  },
  userPaymentType:{
    type: Array,
    required: true
  },
  categoryBookCountry: {
    type: String,
    required: true
  },
  categoryBookSale: {
    type:Array,
    required: true,

  },
  categoryViewCount: {
    type: Number,
    required true,
  },
  
})
