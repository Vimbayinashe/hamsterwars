const { Router } = require('express');
const { auth, db, storage } = require('./../firebase');
const { fs } = require('fs');

const router = new Router();

// skicka bilder to firebase storage    **INCOMPLETE
router.post('/upload', async (req, res) => {

    try {

        let image;
        // read files in 'assets' folder
        fs.readFile(_dirname + '../hamsters/hamster-1.jpg', 'utf8', (err, data) => {
            if(err) throw err;
            image = data;
        })


        let storageRef = firebase.storage().ref('assets/' + image.name) //*** */

        // upload
        let upload = storageRef.put(image)
        upload



        res.send({ msg: "Trying to send"})

    } catch (err) {
        console.error(err);
        res.status(400).send({ msg: err })  
    }

})


module.exports = router;