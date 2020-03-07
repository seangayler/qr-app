require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT
});

module.exports = pool;