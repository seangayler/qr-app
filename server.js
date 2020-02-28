// Modules
const express = require('express');
const path = require('path');
const uuid = require('uuid/v4');
const session = require('express-session');
const pg = require('pg');

// Routers
const indexRouter = require('./routes/indexRouter.js');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(session({
  genid: (req) => {
    console.log(req.sessionID);
    return uuid();
  },
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use('/', indexRouter);
app.use('/test', (req, res) => {
  res.send(uuid());
})

app.listen(process.env.PORT || 3000, () => {
  console.log('\n--- Server started. :) ---\n')
})