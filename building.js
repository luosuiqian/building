var express = require('express');
var path = require('path');
var app = express();

app.set('port', 80);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.urlencoded())
app.use(express.json())
app.use(express.cookieParser());
app.use(express.session({secret: 'woietohgklags'}));
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function(req, res) {
  return res.redirect('/');
});

app.start = function() {
  app.listen(app.get('port'), function() {
    console.log("Express server listening on port %d", app.get('port'));
  });
};

if (!module.parent) {
  app.start();
}

module.exports = app;

