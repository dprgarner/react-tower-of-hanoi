var os = require('os');
var path = require('path');

var webpack = require('webpack');

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
  return Object.assign({}, baseConfig, {
    entry: entry,
    devServer: {
      inline: true,
    },
  });
};

exports.test = function () {
  return Object.assign({}, baseConfig, {
    externals: {
      'cheerio': 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
    },
  });
};
