const express = require('express');

const app = express();

// servar React-frontend senare.
app.use(express.static('public'))

// convert post.body -> json
app.use(express.json());


// Routes
const assetsRoute = require('./routes/assets');

app.use('/assets', assetsRoute);




app.listen(3000, () => {
    console.log('Server running on port 3000');
})