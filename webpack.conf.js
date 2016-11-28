var os = require('os');
var path = require('path');

var _ = require('underscore');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var baseConfig = {
  entry: {
    app: ['./src/start'],
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'frontend.bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new CopyWebpackPlugin([
      {from: './src/index.html'},
      {from: './src/style.css'},
    ]),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};

exports.devServer = function (port) {
  var entry = JSON.parse(JSON.stringify(baseConfig.entry));
  entry.app.unshift(
    'webpack-dev-server/client?http://' + os.hostname() + ':' + port + '/'
  );
  return _.extend({}, baseConfig, {
    entry: entry,
    devServer: {
      inline: true,
    },
    devtool: 'source-map',
  });
};

exports.test = function () {
  return _.extend({}, baseConfig, {
    externals: {
      'cheerio': 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
    },
  });
};
