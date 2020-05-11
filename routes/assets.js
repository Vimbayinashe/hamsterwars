const { Router } = require('express');
const router = new Router;


router.get('/:hamster', async (req, res) => {

    let hamster = req.params.hamster;

    console.log(hamster);
    



})



module.exports = router;