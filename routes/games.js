const { Router } = require('express');
const { auth, db } = require('./../firebase');

const router = new Router();


// hämta en array med samtliga matchobject som hållits
router.get('/', async (req, res) => {
    
})


// spara en match
router.post('/', async (req, res) => {
    
    let match = req.body;
    
    console.log(match);

    // skicka matchen till firestore
    db
    .collection('games')
    .doc()
    .set({ match })
    .res.status(201).send({  })
    .catch(err => console.error(err))


})



module.exports = router;