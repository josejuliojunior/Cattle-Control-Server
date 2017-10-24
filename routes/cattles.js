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

// router.get('/new', (req, res) => {
//   res.render('new ');
// });

module.exports = router;
