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

    // hämta data från firestore 'hamsters' collection
    let snapShot = await db
        .collection('hamsters')
        .get();
    
    // räkna längden av arrray
    let length = snapShot.size

    console.log(length);
    

    // skicka matchen till firestore
    // db
    // .collection('games')
    // .doc()
    // .set({ match })
    // .res.status(201).send({  })
    // .catch(err => console.error(err))


    /**
     * receive req.body { win: ID, defeat: ID }
     * 
     * update hamster1.wins & put 
     * 
     * update hamster2.wins & put
     * 
     * create a new Games object (generate UUID)
     * 
     * send a new Games object
     * 
     */


})



module.exports = router;