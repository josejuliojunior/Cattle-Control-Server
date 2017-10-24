
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "cattles"; ALTER SEQUENCE cattles_id_seq RESTART WITH 5;')
    .then(function () {
      const cattles = [{
        id: 1,
        breedName: 'angus',
        dob: '2016-03-01',
        sex: 'male',
        origin: 'Alexandre'
      }, {
        id: 2,
        breedName: 'red angus',
        dob: '2016-06-29',
        sex: 'male',
        origin: 'Diva'
      }, {
        id: 3,
        breedName: 'nelore',
        dob: '2016-03-12',
        sex: 'male',
        origin: 'Cebola'
      }, {
        id: 4,
        breedName: 'angus',
        dob: '2016-06-16',
        sex: 'male',
        origin: 'Alexandre'
      }];

      return knex('cattles').insert(cattles);
    });
};
