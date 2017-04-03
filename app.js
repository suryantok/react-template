var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');




//var index = require('./routes/index');
var router = require('./server/routers');
var aaar = require('./server/routers');
var elastiSvc = require('./server/models/elasticService');

var doc1 = {
    "id": 1,
    "title": "Oracle released its latest database Oracle 12g",
    "body": "Yestaday Oracle has released its new database Oracle 12g, this would make more money for this company and lead to a nice profit report of annual year."
}

var doc2 = {
    "id": 2,
    "title": "Oracle released its profit report of 2015",
    "body": "As expected, Oracle released its profit report of 2015, during the good sales of database and hardware, Oracle's profit of 2015 reached 12.5 Billion."
}

var index = elastiSvc.elasticlunr.Index;
elastiSvc.elasticlunr.addIndex(index, doc1);
elastiSvc.elasticlunr.addIndex(index, doc2);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
