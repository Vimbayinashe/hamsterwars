const express = require('express');

const app = express();

// servar React-frontend senare.
app.use(express.static('public'))

// convert post.body -> json
app.use(express.json());


// Routes
const assetsRoute = require('./routes/assets');
const hamstersRoute = require('./routes/hamsters');
const chartsRoute = require('./routes/charts');

app.use('/assets', assetsRoute);
app.use('/hamsters', hamstersRoute);
app.use('/charts', chartsRoute);



app.listen(3000, () => {
    console.log('Server running on port 3000');
})