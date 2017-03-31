var path = require("path");
var webpack = require('webpack');

module.exports = {
  entry: {
    '@ngui/infinite-list': path.join(__dirname, 'src', 'index.ts')
  },
  resolve: {
    extensions: ['*', '.ts', '.js', '.json', '.css', '.html']
  },
  resolveLoader: {
    modules: ['node_modules']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "infinite-list.umd.js",
    library: ["infinite-list"],
    libraryTarget: "umd"
  },
  externals: [
    /^rxjs\//,    //.... any other way? rx.umd.min.js does work?
    /^@angular\//
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.ts$/, use: [{loader: 'ts-loader',options: {include: ['src/*.ts']}},{loader: 'angular2-template-loader'}]},
    ]
  }
};
