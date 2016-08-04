
module.exports = {
  // Display all Genres
  app.get('/', function (req, res) {
    var data = require ('./json/genres.json')
    res.render('index', {genres: data})
  })
// Display books by genre
  app.get('/genre/:genre_id', function (req, res) {
    var data = require ('./json/books.json')
    res.render('booksbygenre', {genre: "TEST", books: data})
  })
}
