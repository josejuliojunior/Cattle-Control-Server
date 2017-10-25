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
      res.json(cattles);
    });
});

module.exports = router;
