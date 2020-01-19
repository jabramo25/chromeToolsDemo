var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.get("/frameworks", function(req, res) {
    res.json([
        {
            "name": "Angular",
            "maintainer": "Google",
            "release": "2010-08-20"
        },
        {
            "name": "React",
            "maintainer": "Facebook",
            "release": "2013-05-29"
        },
        {
            "name": "Vue",
            "maintainer": "Evan You",
            "release": "2014-02-01"
        }
    ]);
  })
module.exports = app;
