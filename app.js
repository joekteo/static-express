
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);

//Create Router
var router = express.Router();

router.get('/', function(req,res) {
  res.sendfile('./public/index.html');
});

router.get('/about', function(req,res) {
  res.sendfile('./public/about.html');
});

app.use('/', router);
