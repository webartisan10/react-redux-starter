const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = new (require('express'))()
app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(bodyParser.json({limit: '100mb'}))
app.use(bodyParser.urlencoded({limit: '100mb', extended: true }))
app.use('/api', require('./server/routes'))

const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("*", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(app.get('port'), function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("Web server is listening on port %s. Go to http://localhost:%s/ and use it. Thks!", app.get('port'), app.get('port'))
  }
})
