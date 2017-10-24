const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "users"; ALTER SEQUENCE users_id_seq RESTART WITH 3;')
    .then(function () {
      var hash1 = bcrypt.hashSync('jj',8)
      var hash2 = bcrypt.hashSync('jjj',8)
      const users = [{
        id: 1,
        name: 'jj',
        email: 'jj@jj.com',
        password: hash1
      },{
        id: 2,
        name: 'jjj',
        email: 'jjj@jj.com',
        password: hash2
      }];

      return knex('users').insert(users);
    });
};
