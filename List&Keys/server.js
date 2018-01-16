const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
config.entry.unshift('webpack-hot-middleware/client?reload=true')

let app = new (require('express'))();

let compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {publicPath: '/static/'}));

app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'src/index.html'))).listen(9000)