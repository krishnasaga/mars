const cssnext = require('postcss-cssnext');
const dotenv = require('dotenv');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const combineLoaders = require('webpack-combine-loaders');
const env = require('node-env-file');
env(__dirname + '/.env');
const NODE_ENV = process.env.NODE_ENV;

const isDev = NODE_ENV === 'development';
const isProd = NODE_ENV === 'production';
const ManifestPlugin = require('webpack-manifest-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

console.info('running in  ' +  NODE_ENV + ' mode');
// import .env variables to global space
const dotEnvVars = dotenv.config().parsed;
const defines =
	Object.keys(dotEnvVars)
		.reduce((accumulator, key) => {
			const retAccumulator = accumulator;
			const val = JSON.stringify(dotEnvVars[key]);
			retAccumulator[`__${key.toUpperCase()}__`] = val;
			return retAccumulator;
		}, {
			__NODE_ENV__: JSON.stringify(NODE_ENV),
		});

const config = {
    devServer: {
      historyApiFallback: true
    },
	entry: path.join(__dirname, 'src', 'app.js'),
	output: {
		filename: '[name].build.js',
	    chunkFilename: '[name]-[id].js',
		path: path.join(__dirname, 'docs'),
		publicPath: '/',
	},
	module: {
		loaders: [{
			test: /\.(js|jsx)?$/,
			exclude: /node_modules/,
			loaders: ['babel-loader'],
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname, 'src', 'index.tpl.html'),
			MANIFEST_FILENAME: 'manifest.json' 
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.DefinePlugin({
          "process.env": { 
          NODE_ENV: JSON.stringify("production") 
        }
})
	],
	resolve: {
		modules: [
		  'node_modules',
		  'src',
		  ],
		extensions: ['.js', '.jsx', '.css','.scss'],
	},
};



config.plugins.push(new webpack.optimize.UglifyJsPlugin());


module.exports = config;
