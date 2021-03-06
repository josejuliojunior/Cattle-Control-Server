const express = require('express');
const router = express.Router();
const knex =  require('../db/knex');
const queries =  require('../db/queries');

/* GET home page. */
router.get('/', (req, res) => {
  knex('cattles')
    .select()
    // .innerJoin('weights','cattles.id','=','weights.cattleID')
    .then(cattles => {
      res.json(cattles);
    });
});

router.post('/', (req, res) => {
  let body = req.body;
  queries.postCattle(body)
    .then(cattle => {
      res.json(cattle)
    });
});

router.get('/:id', (req, res) => {
  let id = req.params.id
  knex('cattles')
    .select()
    .where('cattles.id', id)
    .innerJoin('weights','cattles.id','=','weights.cattleID')
    .then(cattles => {
      console.log(cattles);
      const cattle = groupWeight(cattles);
      res.json(cattle);
    });
});

router.delete('/:id', (req, res) => {
  let id = req.params.id
  queries.deleteCattle(id)
    .then((data) => {
      res.json({message: `cattle id: ${req.params.id} deleted`})
    });
})


function groupWeight(cattles) {
  return cattles.reduce(function (cattle, info) {
    cattle.id = info.cattleID;
    cattle.breedName = info.breedName;
    cattle.dob = info.dob;
    cattle.sex = info.sex;
    cattle.origin = info.origin;
    weight = {weight: info.weight, date: info.date};
    cattle.weights = cattle.weights || [];
    cattle.weights.push(weight);
    return cattle;
  },{});
}

function reduce(cattles) {
  let added = false
}


module.exports = router;
