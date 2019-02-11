const msgs = require('./messages.json');

module.exports = keyName => msgs[keyName];

// module.exports = (fileName, keyName) =>{
//   return required(`./${fileName.json}`)[keyName];
// };
