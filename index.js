const express = require('express');
const { auth } = require('./auth');
require('dotenv/config');


const app = express();

// servar React-frontend senare.
app.use(express.static('public'))
app.use(express.static(__dirname + '/../build'))

// servar bilderna via en static route
app.use('/assets', express.static('public/assets'))  


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

app.use('/api/hamsters', hamstersRoute);
app.use('/api/charts', chartsRoute);
app.use('/api/games', gamesRoute);
app.use('/api/stats', statsRoute);
app.use('/api/images', imagesRoute);



app.listen(3000, () => {
    console.log('Server running on port 3000');
})