const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'./src/main.js'
	],
	output: {
		path: path.join(__dirname, 'dist/static'),
		filename: 'main.js',
		publicPath: '/static/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader'],
				include: [
					path.resolve(__dirname, './src')
				]
			},
			{
				test: /\.(css|less)$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: '../index.html',
			template: './src/index.html'
		}),
		new webpack.LoaderOptionsPlugin({ //浏览器加前缀
			options: {
				postcss: [require('autoprefixer')({browsers: ['last 5 versions']})]
			}
		}),
		new UglifyJSPlugin({
			sourceMap: true
		})
	]
}