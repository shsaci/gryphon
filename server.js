var bodyParser = require('body-parser')
var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')

var index = require('./routes/index')

var PORT = process.env.PORT || 3000

var app = express()
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: true }))

// Static resources
app.use(express.static('public'))

app.get('/', index.home)
app.get('/results/:id', index.get)
// app.get('/info/:id', index.info)
// app.get('/error', index.error)
// app.post('/send/:id', index.update)
// app.post('/send', index.send)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
