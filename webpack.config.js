const path = require('path');

module.exports = {
  entry: './component.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
};
