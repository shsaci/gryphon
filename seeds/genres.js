
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('genres').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('genres').insert({id: 1, genre: 'Science Fiction', genre_id:1 }),
        knex('genres').insert({id: 2, genre: 'Poetry', genre_id:2 }),
        knex('genres').insert({id: 3, genre: 'Classics', genre_id:3 }),
        knex('genres').insert({id: 4, genre: 'Philosophy', genre_id:4 }),
        knex('genres').insert({id: 5, genre: 'Graphic Novels', genre_id:5 })
      ]);
    });
};
