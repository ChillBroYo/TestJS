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
