const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	plugins: [
		new CleanWebpackPlugin(['build']),
		new CopyWebpackPlugin([
			{
				from: './img/*',
				to: '',
			},

			{
				from: './*.html',
				to: '',
			},
		]),
		new ExtractTextPlugin('css/styles.css'),
		new webpack.optimize.ModuleConcatenationPlugin(),
	],

	context: path.resolve(__dirname, 'src'),
	entry: {
		index: './js/index.js',
	},

	resolve: {
		extensions: ['.js', '.scss'],
		alias: {
			$js: path.resolve(__dirname, 'src/js'),
			$styles: path.resolve(__dirname, 'src/styles'),
		},
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src/js'),
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.scss/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						'postcss-loader',
						'sass-loader',
					],
				}),
			},
		],
	},


	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build'),
	},
};
