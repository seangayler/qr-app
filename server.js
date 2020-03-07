// Modules
require('dotenv').config();
const express = require('express');
const path = require('path');
const { Pool } = require('pg');

// // Connect to DB
// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: DB_NAME,
//   password: DB_PASSWORD,
//   port: DB_PORT
// });

// Routers
const indexRouter = require('./routes/indexRouter.js');

// Middleware
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use('/', indexRouter);

// TUTORIAL ---------------------------------------------------------------------
const jwt = require('jsonwebtoken');

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API'
  });
})
app.post('/api/posts', verifyToken, (req, res) => {
  res.json({
    message: 'Post created...'
  })
})
app.post('/api/login', (req, res) => {
  // Mock User
  const user = {
    id: 1,
    username: 'brad',
    email: 'brad@gmail.com'
  }

  jwt.sign({user}, 'secretkey', (err, token) => {
    res.json({
      token
    })
  })
})

function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization']
}

// TUTORIAL ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// Start Server
app.listen(process.env.PORT || 3000, () => {
  console.log('\n--- Server started. :) ---\n')
})