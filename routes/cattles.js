const express = require('express');
const router = express.Router();
const knex =  require('../db/knex');

/* GET home page. */
router.get('/', (req, res) => {
  knex('cattles')
    .select()
    .then(cattles => {
      res.json(cattles);
    });
});

router.get('/:id', (req, res) => {
  let id = req.params.id
  knex('cattles')
    .select()
    .innerJoin('weights','cattles.id','=','weights.cattleID')
    .where('cattles.id', id)
    .then(cattles => {
      const cattle = groupWeight(cattles);
      res.json(cattle);
    });
});



function groupWeight(cattles) {
  console.log(cattles);
  return cattles.reduce(function (cattle, info) {
    cattle.id = info.cattleID;
    cattle.breedName = info.breedName;
    cattle.dob = info.dob;
    cattle.sex = info.sex;
    cattle.origin = info.origin;
    weight = {weight: info.weight, date: info.date};
    console.log(weight);
    cattle.weights = cattle.weights || [];
    cattle.weights.push(weight);
    return cattle;
  },{});
}


module.exports = router;
