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


// 
router.get('/age', async (req, res) => {

    try {

        let hamsters = [];

        // hämta hamstrar
        let snapShot = await db
            .collection('hamsters')
            .get();
        
        snapShot.forEach(doc => {
            hamsters.push(doc.data().hamster)
        })

        // summa av hamstrars ålder
        let totalAge = hamsters.reduce(
            (acc, value) => acc + value.age
            , 0
        )
            
        let amount = hamsters.length;
        let averageAge = totalAge / amount;

        // sortera hamstrar enligt ålders (asc)
        hamsters.sort((a,b) => a.age - b.age);

        let minimumAge = hamsters[0].age;
        let maximumAge = hamsters[amount - 1].age;
        
        res.send({ age: {
            minimum: minimumAge,
            average: averageAge,
            maximum: maximumAge
        } })
            
    } catch (err) {
        console.error(err);
        res.status(400).send({ msg: err })
    }
})


module.exports = router;