const express = require('express');
const { auth } = require('./auth');
require('dotenv/config');


const app = express();

// servar React-frontend senare.
app.use(express.static('public'))

// convert post.body -> json
app.use(express.json());


// Authorization middleware
app.use(auth);


// Routes
const assetsRoute = require('./routes/assets');
const hamstersRoute = require('./routes/hamsters');
const chartsRoute = require('./routes/charts');
const gamesRoute = require('./routes/games');

app.use('/assets', assetsRoute);
app.use('/hamsters', hamstersRoute);
app.use('/charts', chartsRoute);
app.use('/games', gamesRoute);






app.listen(3000, () => {
    console.log('Server running on port 3000');
})