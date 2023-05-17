const express = require('express');
const router = express.Router();

const { Locations } = require('../models');

router.get('', async (req, res, next) => {
    try {
        const myLocations = await Locations.find({});
            console.log(myLocations);
            res.json(myLocations);
        
    } catch(err) {
        console.log(err);
        next();
    }
});


router.get('/:id', async (req, res, next) => {
    try {
        const myLocation = await Locations.findById(req.params.id);
        console.log(myLocation);
        res.json(myLocation)
    } catch(err) {
        console.log(err);
        next();
    }
});

router.post('', async (req, res, next) => {
    try {
        const newLocation = req.body
        await Locations.create(req.body);
        console.log(newLocation);
        res.redirect('/')
    } catch(err) {
        console.log(err);
        next();
    }
});

