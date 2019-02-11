const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');

const category = require('./routes/categories');
const users = require('./routes/users');
const books = require('./routes/books');
const statistics = require('./routes/statistics');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) =>{
  if(!req.headers.token || config('token') != req.headers.token){
    return res.json({"err":" there is no token or erorr token"});
  }
  next();
});

app.use('/category', category);
app.use('/users', users);
app.use('/books', books);
app.use('/statistics', statistics);


app.listen(3000);
// M V C View rest apium clinety linum e kam angulyar kam ... charts.js module

//messages errornery piti grenq mongoosov

// yandex i perevodchiki token ---  trnsl.1.1.20181220T074235Z.419169669c7a89b0.5afde20bb6217c588f67d7b3fb523f4817177ff5
//npm run main     ---------------------to run the pproject

//pm2 start app.js pm2 nstcneluc heto

//myus jsonov pm2 start process.json---- naxqan pm2 stop all
