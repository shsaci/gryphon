var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)
// var jq = require('../public/jquery')
var client = require('../public/client')

module.exports = {
  home: home,
  get: get
}

function home (req, res) {
  res.render('home')
}

function get (req, res) {
  var id = req.params.id
  console.log(id);
  knex('books')
  .select()
  .where('genre_id', id)
  .then(function (books) {
    console.log(books);
    res.render('results', {books: books})
  })
  .catch(function (err) {
    res.status(500).send('Database error ' + err.message)
  })
}
