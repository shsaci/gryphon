var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  home: home,
  get: get
}

function home (req, res) {
  res.render('home')
}

function get (req, res) {
  var id = req.params.id
  knex('genres')
  .where('genre_id', id)
  .join('books', 'genres.id', '=', 'books.genre_id')
  .select()
  .then(function (books) {
    console.log(books[0].genre);
    res.render('results', {books: books})
  })
  .catch(function (err) {
    res.status(500).send('Database error ' + err.message)
  })
}
