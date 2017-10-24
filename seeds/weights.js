
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "weights"; ALTER SEQUENCE weights_id_seq RESTART WITH 8;')
    .then(function () {
      const weights = [{
        id: 1,
        cattleID: 1,
        weight: 180,
        date: '2016-03-01'
      },{
        id: 2,
        cattleID: 1,
        weight: 250,
        date: '2016-06-01'
      },{
        id: 3,
        cattleID: 2,
        weight: 300,
        date: '2016-07-01'
      },{
        id: 4,
        cattleID: 3,
        weight: 485,
        date: '2016-03-29'
      },{
        id: 5,
        cattleID: 3,
        weight: 513,
        date: '2016-06-29'
      },{
        id: 6,
        cattleID: 2,
        weight: 400,
        date: '2016-12-01'
      },{
        id: 7,
        cattleID: 2,
        weight: 387,
        date: '2016-06-17'
      }];


      return knex('weights').insert(weights);
    });
};
