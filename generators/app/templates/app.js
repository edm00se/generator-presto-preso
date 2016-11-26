var express = require('express'),
  http = require('http'),
  path = require('path'),
  socketio = require('socket.io'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  routes = require('./routes/index'),
  app = express();

// view engine setup

app.set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use(favicon(path.join(__dirname, '/public/img/favicon.ico')))
    .use(logger('dev'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
      extended: true
    }))
    .use(cookieParser())
    .use(express.static(path.join(__dirname, 'public')))
    .use('/', routes);

var server = http.Server(app),
  io = socketio.listen(server),
  port = process.env.PORT || process.env.VCAP_APP_PORT || 5001; // usual Node.js port environment, Bluemix port environment, static 5001 as local failover

// / catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// / error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
      title: 'error'
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
    title: 'error'
  });
});

io.set('origins', '*:*'); // if you're running on something other than localhost, set your valid server name to listen on here!
io.sockets.on('connection', function (socket) {
  socket.emit('message', 'Welcome to Revealer');
  socket.on('slidechanged', function (data) {
    socket.broadcast.emit('slidechanged', data);
  });
});

server.listen(port, function () {
  console.log('Express server listening on port ' + port);
});

module.exports = app;
