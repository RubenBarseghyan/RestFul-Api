//en jamanak ogtvel enq nconf moduly  isk hima kogtvinq mer sarqacic

const config = require('./config.json'); //miacnenq app.js mej
module.exports = (key) => config[key];
