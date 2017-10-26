const express = require('express');
const router = express.Router();
const knex =  require('../db/knex');
const queries =  require('../db/queries');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/', (req, res, next) => {
  if (req.body.email !== undefined || req.body.password !== undefined) {
    let email = req.body.email;
    queries.login(email)
      .then(user => {
        if (user.length === 0) {
          res.json({
            error: 'Email or password did not match'
          });
        } else {
          var match = bcrypt.compareSync(req.body.password, user[0].password)
          if (match) {
            delete user[0].password
            var token = jwt.sign(user[0].id, process.env.TOKEN_SECRET);
            res.json({
              data: token
            });
          } else {
            res.json({
              error: 'Email or password did not match'
            });
          }
        }
      });
  } else {
    res.json({
      error: 'please enter an email'
    });
  }
});

module.exports = router;
