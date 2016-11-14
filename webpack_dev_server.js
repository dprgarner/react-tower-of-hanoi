var argv = require('minimist')(process.argv.slice(2));
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var open = require('open');

var port = argv._[0];
var config = require("./webpack.conf.js").devServer(port);

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  contentBase: './build',
  noInfo: false,
  quiet: false,
  stats: {
    assets: false,
    chunkModules: false,
    chunks: true,
    colors: true,
    hash: false,
    timings: true,
    version: false,
  },
});

server.listen(port);
if (argv.open || argv.o) {
  open("http://localhost:" + port + '/webpack-dev-server/');
}