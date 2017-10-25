const express = require('express');
const router = express.Router();
const knex =  require('../db/knex');

router.get('/', (req, res) => {
  knex('weights')
    .select()
    .then(weights => {
      res.json(weights);
    });
});

// router.get('/:id', (req, res) => {
//   let id = req.params.id
//   knex('weights')
//     .select()
//     .where('weights.id', id)
//     .then(weights => {
//       console.log(weights);
//       res.json(weights);
//     });
// });

module.exports = router;
