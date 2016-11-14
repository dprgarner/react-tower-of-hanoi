var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var open = require('open');

var port = 8080;
var config = require("./webpack.conf.js").devServer(port);

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  contentBase: './build',
  stats: {colors: true}
});

server.listen(port);
open("http://localhost:" + port + '/webpack-dev-server/');