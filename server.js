// Modules
require('dotenv').config();
const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

// Connect to DB
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

console.log(process.env)

pool.connect();

// Routers
const indexRouter = require('./routes/indexRouter');
const registerRouter = require('./routes/registerRouter');

// Middleware
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())

app.use('/', indexRouter);
app.use('/register', registerRouter);

// Start Server
app.listen(process.env.PORT || 3000, () => {
  console.log('\n--- Server started. :) ---\n')
})