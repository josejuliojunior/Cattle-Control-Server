
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "cattles"; ALTER SEQUENCE cattles_id_seq RESTART WITH 11;')
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
        dob: '2015-07-16',
        sex: 'male',
        origin: 'Cebola'
      },{
        id: 5,
        breedName: 'red angus',
        dob: '2014-03-16',
        sex: 'male',
        origin: 'Diva'
      },{
        id: 6,
        breedName: 'nelore',
        dob: '2015-05-12',
        sex: 'male',
        origin: 'Alexandre'
      },{
        id: 7,
        breedName: 'guzera',
        dob: '2016-04-02',
        sex: 'male',
        origin: 'Rodrigo'
      },{
        id: 8,
        breedName: 'brangus',
        dob: '2016-01-19',
        sex: 'male',
        origin: 'Rodrigo'
      },{
        id: 9,
        breedName: 'gir',
        dob: '2016-09-29',
        sex: 'male',
        origin: 'Fernando'
      },{
        id: 10,
        breedName: 'gir',
        dob: '2015-11-28',
        sex: 'male',
        origin: 'Fernando'
      }];

      return knex('cattles').insert(cattles);
    });
};
