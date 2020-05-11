const { Router } = require('express');
const router = new Router;
const fs  = require('fs');


router.get('/:hamster', async (req, res) => {

    try {
        
        let hamster = req.params.hamster;

        console.log(hamster);
        
        let output = ('./hamsters/' + hamster);
        // let message = fs.existsSync(output) ? "picture found!" : "does not exist";

        // 'existsSync' returns true / false
        if (fs.existsSync(output)) {
            console.log('The picture exists.');

            res.send({ 
                msg: `This picture ${hamster} exists`, 
                pic: output 
            });

        } else {
            console.log('The picture does not exist');
            res.send({ 
                msg: `This picture ${hamster} does NOT exist.`
            });
        }

    }
    catch (err) {
        console.error(err);
        res.status(400).send(err);
    }


})



module.exports = router;