const { Router } = require('express');
const { auth, db } = require('./../firebase');
const fs = require('fs');


const router = new Router();


// hämta en array med samtliga hamsterobject.
router.get('/', async (req, res) => {

    let docs = [];

    let snapShot = await db
        .collection('hamsters')
        .get();
    
    snapShot.forEach(doc => {
        docs.push(doc.data())
    })

    res.send({ hamsters: docs })

})

// http://localhost:3000/hamsters/


// hämta ett hamsterobject med efterfrågat id
router.get('/:id', async (req, res) => {

    let snapShot = await db
        .collection('hamsters')
        .doc(req.params.id)
        .get();
    
    // hämta hamsters uppgifter
    let hamster = snapShot.data().hamster;
    console.log(hamster);
 
    res.send({ hamster: hamster })

})





// send data.json to firestore
router.post('/create-database', async (req, res) => {

    try {

        fs.readFile('./data.json', 'utf8', (err, data) => {
            if(err) throw err;

            let hamsters = JSON.parse(data);
            console.log(typeof(data));
            console.log(typeof(hamsters));

            // update firestore
            hamsters.forEach(hamster => {
                db.collection('hamsters').doc(JSON.stringify(hamster.id)).set({ hamster })
                console.log(typeof(hamster));
                console.log(hamster);
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

// POST => http://localhost:3000/hamsters/create-database


module.exports = router;