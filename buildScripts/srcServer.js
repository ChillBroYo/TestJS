var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
// using express as a package deployer for developement on local network
// can also be used for production
var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, function(err){
  if(err)
  {
    console.log(err);
  }
  else{
    open('http://localhost:' + port);
  }
})
