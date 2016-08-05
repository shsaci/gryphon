
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('genres').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('genres').insert({id: 1, genre: 'Science Fiction'}),
        knex('genres').insert({id: 2, genre: 'Poetry'}),
        knex('genres').insert({id: 3, genre: 'Classics'}),
        knex('genres').insert({id: 4, genre: 'Philosophy'}),
        knex('genres').insert({id: 5, genre: 'Graphic Novels'})
      ]);
    });
};
