const mongoose = require('mongoose');
const db = require('../lib/db_coonect');

const serverStattSchema = new db.Schema({
  dbn: {
    type:Array
  },
  ram: {
    type:Array
  },
  network: {
    type:Array
  },
  harrd_drive: {
    type:Array
  }
});

module.exports = mongoose.model('server_statistics', serverStattSchema);
