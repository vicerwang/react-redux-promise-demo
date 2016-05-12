'use strict';

module.exports = {
  entry: [ 'babel-polyfill', './src/index.jsx' ],
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        loaders: [
          'react-hot',
          'babel?{presets:["es2015","stage-0","react"],plugins:["transform-decorators-legacy","add-module-exports"]}'
        ],
        exclude: /node_modules/
    }]
  }
};
