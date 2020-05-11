const express = require('express');

const app = express();

app.use(express.static('public'))

// convert post.body -> json
app.use(express.json());



app.listen(3000, () => {
    console.log('Server running on port 3000');
})