const express = require('express');
const router = express.Router();

const { Information } = require('../models');

router.get('', async (req, res, next) => {
    try {
        const myInformation = await Information.find({});
            
            res.json(myInformation);
        
    } catch(err) {
        console.log(err);
        next();
    }
});


router.get('/:id', async (req, res, next) => {

    try {
        const theInformation = await Information.findById(req.params.id);
        
        res.json(theInformation)
    } catch(err) {
        console.log(err);
        next();
    }
});

router.post('', async (req, res, next) => {
    try {
        const newInformation = req.body
        await Information.create(req.body);
        
        res.redirect('/')
    } catch(err) {
        console.log(err);
        next();
    }
});

module.exports = router;

