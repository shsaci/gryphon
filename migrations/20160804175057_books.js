exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.string('synopsis')
    table.integer('genre_id')
    table.string('cover_art')
    table.string('isbn')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books')
};
