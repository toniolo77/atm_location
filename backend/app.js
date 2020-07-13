var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser= require('body-parser');
var logger = require('morgan');
var cors = require('cors');

var cajerosRouter = require('./routes/cajeros');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

//public folder
const DIR= 'public';
app.use(express.static(path.join(__dirname, DIR)));

//Enable Cors
const corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions));

app.use('/cajeros', cajerosRouter);
app.use((req,res,next) => {
  res.status(404).send({status:0,res:{},msg:"Page not found"})
});

module.exports = app;
