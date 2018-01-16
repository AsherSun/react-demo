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
		path: path.resolve(__dirname, 'dist/static'),
		filename: 'main.js',
		publicPath: '/static/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader'],
				// include :表示哪些目录中的js文件需要进行babel-loader
				include: [
					path.resolve(__dirname, './src')
				],
				// exclude: 表示哪些目录中的js文件不需要进行babel-loader
				exclude: [
					path.join(__dirname, './../node_modules/')
				]
			},
			{
				test: /\.(css|less|sass|scss)/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// html模板插件
		new HtmlWebpackPlugin({
			filename: '../index.html',
			template: './src/index.html'
		}),
		// 浏览器加前缀
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					require('autoprefixer')({
						browsers: ['last 5 versions']
					})
				]
			}
		}),
		new UglifyJSPlugin({
			sourceMap: true
		})
	]
}