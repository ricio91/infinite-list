const webpack = require('webpack');

const config = {
  resolve: {
    extensions: ['*', '.ts', '.webpack.js', '.web.js', '.js'],
    alias: {
      '@ngui/infinite-list': '../src/index.ts'
    }
  },
  devtool: 'source-map',
  entry: './app/main.ts',
  module: {
    loaders: [
      { test: /\.ts$/, use: [{loader: 'ts-loader',options: {include: ['src/**/*.ts', 'app/**/*.ts']}},{loader: 'angular2-template-loader'}]},
      { test: /\.html$/, loader: 'raw' }
    ]
  },
  plugins: [],
  output: {
    path: `${__dirname}/build/`,
    publicPath: '/build/',
    filename: 'app.js'
  }
};

if (process.env.NODE_ENV === 'prod') {
  config.plugins = [
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ];
  config.module.loaders.push({
    test: /\.ts$/, loader: 'strip-loader?strip[]=debug,strip[]=console.log'
  });
}

module.exports = config;
