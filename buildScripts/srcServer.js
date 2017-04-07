import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

const port = 3000;
// using express as a package deployer for developement on local network
// can also be used for production
const app = express();
//webpack implementation
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
noInfo: true,
publicPath: config.output.publicPath
}));

app.get('/users', function(req, res){
  //Hard coding for simplicity
  res.json([
    {"id":1, "firstName":"Bob", "lastName":"Smith", "email":"bob@gmail.com"},
    {"id":2, "firstName":"Tammy", "lastName":"Thorton", "email":"tammy@gmail.com"},
    {"id":3, "firstName":"John", "lastName":"Fuentes", "email":"john@gmail.com"}
  ])
})

app.get('/images', function(req, res){
  res.json([
    {"filePath":"https://staticdelivery.nexusmods.com/mods/110/images/74627-0-1459502036.jpg"},
    {"filePath":"https://saltmarshrunning.com/wp-content/uploads/2014/09/bananasf.jpg"},
    {"filePath":"https://www.organicfacts.net/wp-content/uploads/2013/06/Pineapple.jpg"}
  ])
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, function(err){
  if(err)
  {
    console.log(err); //eslint-disable-line no-console
  }
  else{
    open('http://localhost:' + port);
  }
})
