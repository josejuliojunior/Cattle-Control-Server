const express = require('express');
const router = express.Router();
const knex =  require('../db/knex');

router.get('/', (req, res) => {
  knex('weights')
    .select()
    .then(weights => {
      res.render('weights', { weights: weights });
    });
});

module.exports = router;
