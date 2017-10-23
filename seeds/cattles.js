
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cattles').del()
    .then(function () {
      const cattles = [{
        breedName: 'angus',
        dob: '2016-03-01',
        sex: 'male',
        origin: 'Alexandre'
      }, {
        breedName: 'red angus',
        dob: '2016-06-29',
        sex: 'male',
        origin: 'Diva'
      }, {
        breedName: 'nelore',
        dob: '2016-03-12',
        sex: 'male',
        origin: 'Cebola'
      }, {
        breedName: 'angus',
        dob: '2016-06-16',
        sex: 'male',
        origin: 'Alexandre'
      }];

      return knex('cattles').insert(cattles);
    });
};
