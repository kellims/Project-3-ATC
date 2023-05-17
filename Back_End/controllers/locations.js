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
})