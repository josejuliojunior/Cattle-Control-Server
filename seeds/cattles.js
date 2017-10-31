
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "cattles"; ALTER SEQUENCE cattles_id_seq RESTART WITH 11;')
    .then(function () {
      const cattles = [{
        id: 1,
        breedName: 'angus',
        dob: '2014-09-14',
        sex: 'male',
        origin: 'Alexandre'
      }, {
        id: 2,
        breedName: 'red angus',
        dob: '2014-11-13',
        sex: 'male',
        origin: 'Diva'
      }, {
        id: 3,
        breedName: 'nelore',
        dob: '2014-05-27',
        sex: 'male',
        origin: 'Cebola'
      }, {
        id: 4,
        breedName: 'angus',
        dob: '2014-09-04',
        sex: 'male',
        origin: 'Cebola'
      },{
        id: 5,
        breedName: 'red angus',
        dob: '2015-02-21',
        sex: 'male',
        origin: 'Diva'
      },{
        id: 6,
        breedName: 'nelore',
        dob: '2015-05-24',
        sex: 'male',
        origin: 'Alexandre'
      },{
        id: 7,
        breedName: 'guzera',
        dob: '2015-03-22',
        sex: 'male',
        origin: 'Rodrigo'
      },{
        id: 8,
        breedName: 'brangus',
        dob: '2012-12-01',
        sex: 'male',
        origin: 'Rodrigo'
      },{
        id: 9,
        breedName: 'gir',
        dob: '2014-08-02',
        sex: 'male',
        origin: 'Fernando'
      },{
        id: 10,
        breedName: 'gir',
        dob: '2014-05-08',
        sex: 'male',
        origin: 'Fernando'
      }];

      return knex('cattles').insert(cattles);
    });
};
