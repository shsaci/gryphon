var express = require('express')
//var development = require('./knexfile').development
//var knex = require('knex')(development)
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
// var routes = require('routes.js')

var app = express()

app.use(bodyParser.urlencoded())
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')
app.use(express.static('public'))

// Display all Genres 
app.get('/', function (req, res) {
  var data = require ('./json/genres.json')//delete and replace with knex
  res.render('index', {genres: data})
})

app.get('/genre/:genre_id', function (req, res) {
  var data = require ('./json/books.json')//delete and replace with knex
  res.render('booksbygenre', {genre: "TEST", books: data})
  //change TEST to genre name  write database query to give genre name - given the database genre_id
})

var PORT = 3000

app.listen(PORT, function () {
  console.log('CLEANING UP ALL OF THE THINGS THAT WE FIND... ON PORT', PORT)
})
