const mongoose = require('mongoose');
const BlubPromise = require('bluebird');

mongoose.Promise = BlubPromise;// mongoose promisey grvac e

BlubPromise.promisifyAll(mongoose);//bluebird um ;

mongoose.connect('mongodb://localhost/book_api')
.catch(console.error);

module.exports = mongoose;
