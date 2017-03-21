var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var src_dir = path.resolve(__dirname, 'src')
var build_dir = path.resolve(__dirname, 'build/app')
var bower_dir = path.resolve(__dirname, 'bower_components')

var config = {
	entry: src_dir + '/js/main.js',
	output: {
		path: build_dir,
		filename: '[name].js',
		chunkFilename: '[id].js'
	},
	module: {
		loaders: [{
				test: /\.js?/,
				include: src_dir,
				loader: 'babel-loader',
				query: {presets: ['react', 'es2015']}
			}, {
				test: /\.css$/,
				include: [src_dir, bower_dir],
				use: ExtractTextPlugin.extract('css-loader')
			},{
				test: /\.styl$/,
				include: [src_dir, bower_dir],
				loader: ExtractTextPlugin.extract(['css-loader', 'stylus-loader'])
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader?name=fonts/[name].[ext]'
			}
		]
	},
	resolve: {
		modules: ['web_modules', 'node_modules', 'bower_components']
	},
	plugins: [
		new ExtractTextPlugin('app.css')
	]
}

module.exports = config