const express = require('express');

const app = express();

// servar React-frontend senare.
app.use(express.static('public'))

// convert post.body -> json
app.use(express.json());


// Routes
const assetsRoute = require('./routes/assets');
const hamstersRoute = require('./routes/hamsters');

app.use('/assets', assetsRoute);
app.use('/hamsters', hamstersRoute);


// const fs = require('fs');
// fs.readFile('./data.json', 'utf8', (err, data) => {
//         if(err) throw err;
//         let array1 = JSON.parse(data);
//         console.log(typeof(array1))

//         array1.forEach(element => {
//             console.log(element)
//         });
//     } 
// )



app.listen(3000, () => {
    console.log('Server running on port 3000');
})