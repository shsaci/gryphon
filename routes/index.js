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
    var gen = books[0].genre
    var obj = {genre: gen, books: books}
    // console.log(obj);
    res.render('results', obj)
  })
  .catch(function (err) {
    res.status(500).send('Database error ' + err.message)
  })
}
