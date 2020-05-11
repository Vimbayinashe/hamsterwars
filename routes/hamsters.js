const { Router } = require('express');
const { auth, db } = require('./../firebase');
const fs = require('fs');


const router = new Router();


// send data.json to firestore
router.post('/create-database', async (req, res) => {

    try {

        fs.readFile('./data.json', 'utf8', (err, data) => {
            if(err) throw err;

            let hamsters = JSON.parse(data);
            console.log(typeof(data))
            console.log(typeof(hamsters))
            
            // db.collection('hamsters').doc().set({ 
            //     "id": 10,
            //     "name": "Lelaah",
            //     "age": 5,
            //     "favFood": "sallad",
            //     "loves": "Running that wheeeeeeeeeeeeeeeel!",
            //     "imgName": "hamster-10.jpg",
            //     "wins": 0,
            //     "defeats": 0,
            //     "games": 0
            //  })

            // update firestore
            hamsters.forEach(element => {
                db.collection('hamsters').doc(JSON.stringify(element.id)).set({ element })
                console.log(typeof(element));
                console.log(element);
                // console.log(element.id + ". " + element.name + " created!")
            });

            res.send({ array: hamsters})
        })
        
    }
    catch (err) {
        console.error(err);
        res.status(400).send({ msg: err })
    }

})




module.exports = router;