
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "weights"; ALTER SEQUENCE weights_id_seq RESTART WITH 31;')
    .then(function () {
      const weights = [{
        id: 1,
        cattleID: 1,
        weight: 214,
        date: '2015-04-28'
      },{
        id: 2,
        cattleID: 1,
        weight: 410,
        date: '2016-01-07'
      },{
        id: 3,
        cattleID: 1,
        weight: 507,
        date: '2016-04-06'
      },{
        id: 4,
        cattleID: 2,
        weight: 167,
        date: '2015-05-04'
      },{
        id: 5,
        cattleID: 2,
        weight: 439,
        date: '2016-03-09'
      },{
        id: 6,
        cattleID: 2,
        weight: 492,
        date: '2016-06-07'
      },{
        id: 7,
        cattleID: 3,
        weight: 301,
        date: '2015-05-04'
      },{
        id: 8,
        cattleID: 3,
        weight: 455,
        date: '2016-01-02'
      },{
        id: 9,
        cattleID: 3,
        weight: 556,
        date: '2016-04-01'
      },{
        id: 10,
        cattleID: 4,
        weight: 222,
        date: '2015-04-28'
      },{
        id: 11,
        cattleID: 4,
        weight: 420,
        date: '2016-02-22'
      },{
        id: 12,
        cattleID: 4,
        weight: 519,
        date: '2016-05-22'
      },{
        id: 13,
        cattleID: 5,
        weight: 243,
        date: '2015-11-12'
      },{
        id: 14,
        cattleID: 5,
        weight: 549,
        date: '2017-02-02'
      },{
        id: 15,
        cattleID: 5,
        weight: 634,
        date: '2017-05-03'
      },{
        id: 16,
        cattleID: 6,
        weight: 167,
        date: '2015-11-12'
      },{
        id: 17,
        cattleID: 6,
        weight: 529,
        date: '2017-03-01'
      },{
        id: 18,
        cattleID: 6,
        weight: 574,
        date: '2017-05-30'
      },{
        id: 19,
        cattleID: 7,
        weight: 221,
        date: '2015-11-12'
      },{
        id: 20,
        cattleID: 7,
        weight: 530,
        date: '2017-03-04'
      },{
        id: 21,
        cattleID: 7,
        weight: 564,
        date: '2017-06-02'
      },{
        id: 22,
        cattleID: 8,
        weight: 209,
        date: '2013-12-20'
      },{
        id: 23,
        cattleID: 8,
        weight: 462,
        date: '2015-09-02'
      },{
        id: 24,
        cattleID: 8,
        weight: 522,
        date: '2015-12-01'
      },{
        id: 25,
        cattleID: 9,
        weight: 251,
        date: '2015-05-04'
      },{
        id: 26,
        cattleID: 9,
        weight: 439,
        date: '2016-04-05'
      },{
        id: 27,
        cattleID: 9,
        weight: 477,
        date: '2016-07-04'
      },{
        id: 28,
        cattleID: 10,
        weight: 215,
        date: '2015-06-02'
      },{
        id: 29,
        cattleID: 10,
        weight: 538,
        date: '2017-02-24'
      },{
        id: 30,
        cattleID: 10,
        weight: 630,
        date: '2017-05-25'
      }
    ];


      return knex('weights').insert(weights);
    });
};
