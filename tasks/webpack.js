import path from 'path';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';


import { isProduction } from './utils';

let config = {

  // I would recommend using different config variables
  // depending on the eviroment.
  // The package 'webpack-merge' can help with that.
  // This tenary setup is just for simplicity sake.
  entry: isProduction ? {
    main: './scripts/main.js'
  } : {
      main: [
        './scripts/main.js',
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client'
      ]
    },
  output: {
    filename: './scripts/bundle.js',
    path: isProduction ? path.resolve(__dirname, '../dist') : path.resolve(__dirname, '../src')
  },
  context: path.resolve(__dirname, '../src'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      // loader: "eslint-loader"
      use: [
        'babel-loader', 'eslint-loader'
      ]
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          js: 'babel-loader!eslint-loader'
        }
      }
    }, {
      test: /\.(njk|nunjucks)$/,
      loader: 'nunjucks-loader'
    }]
  },
  devtool: isProduction ? 'none' : 'source-map',
  plugins: isProduction ? [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ] : [
      new webpack.HotModuleReplacementPlugin(),
      new BundleAnalyzerPlugin()
    ]
};


function scripts() {

  return new Promise(resolve => webpack(config, (err, stats) => {

    if (err) console.log('Webpack', err);

    console.log(stats.toString({ /* stats options */ }));

    resolve();
  }));
}

module.exports = { config, scripts };
