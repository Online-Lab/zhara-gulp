var gzippo = require('gzippo')
var express = require('express')
var app = express()

//app config
app.set('port', (process.env.PORT || 5001))

if (process.env.NPM_ENV == 'production') {
  app.use(gzippo.staticGzip(__dirname + '/dist'))
} else {
  app.use(gzippo.staticGzip(__dirname + '/.tmp/serve'))
  app.use(gzippo.staticGzip(__dirname + '/src'))
  app.use(gzippo.staticGzip(__dirname))
}

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
