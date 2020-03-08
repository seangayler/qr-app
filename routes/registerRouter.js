const express = require('express');
const router = express.Router();
const db = require('../db/query');

router.post('/', (req, res) => {

  const text = 'INSERT INTO account(username, password, salt, email, created_on, last_login) VALUES ($1, $2, $3, $4, $5, $6)';
  const {username, email, password} = req.body;
  const createdOn = new Date();

  // Use 3rd-party libraries to generate salt & hash password using SHA-256 later
  const salt = 'salt';

  const values = [username, password, salt, email, createdOn];
  db.query(text, values, (err, res) => {
    if (err) {
      console.log(err.stack);
    }
    else {
      console.log(res.rows[0]);
    }
  })

});

module.exports = router;