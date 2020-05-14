const express = require('express');
const { auth } = require('./auth');
require('dotenv/config');


const app = express();

// servar React-frontend senare.
app.use(express.static('public'))

// servar bilderna via en static route
app.use(express.static('assets'))   


// convert post.body -> json
app.use(express.json());


// Authorization middleware
app.use(auth);


// Routes
const hamstersRoute = require('./routes/hamsters');
const chartsRoute = require('./routes/charts');
const gamesRoute = require('./routes/games');
const statsRoute = require('./routes/stats');
const imagesRoute = require('./routes/images');

app.use('/hamsters', hamstersRoute);
app.use('/charts', chartsRoute);
app.use('/games', gamesRoute);
app.use('/stats', statsRoute);
app.use('/images', imagesRoute);






app.listen(3000, () => {
    console.log('Server running on port 3000');
})