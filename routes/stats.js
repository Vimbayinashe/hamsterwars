const { Router } = require('express');
const { auth, db } = require('./../firebase');

const router = new Router();

// Returnerar ett statsobject med totalt antal matcher som hållits
router.get('/total', async(req, res) => {

    try {

        let snapShot = await db
            .collection('games')
            .get()

        let amount = snapShot.size;

        res.send({ totalGames : amount }) 
    
    } catch (err) {
        console.error(err);
        res.status(400).send({ msg: err })
    }

})


module.exports = router;