const express = require('express');
const router = express.Router();

let { Locations } = require('../models');

const seededData = [
    {
        place: "Madrid",
        date: "December 2024"
    }, {
        place: "Alaskan Cruise",
        date: "no plans"
    }, {
        place: "Scotland Whisky Tour",
        date: "2025"
    }
]

router.get('', async (req, res, next) => {
    try {
        let myLocations = await Locations.find({});
            console.log(myLocations);
            res.json(myLocations);        
    } catch(err) {
        console.log(err);
        next();
    }
});

// router.get('/seed', async (req, res, next) => {
//     try {
//         await Locations.deleteMany({});
//         await Locations.insertMany(seededData);
//         res.redirect('/locations');
//     } catch(err) {
//         console.log(err);
//         next();
//     }
// })


router.get('/:id', async (req, res, next) => {
    try {
        let myLocation = await Locations.findById(req.params.id);
        console.log(myLocation);
        res.json(myLocation)
    } catch(err) {
        console.log(err);
        next();
    }
});

router.post('', async (req, res, next) => {
    try {
        let newLocation = req.body
        await Locations.create(req.body);
        console.log(newLocation);
        res.redirect('/locations')
    } catch(err) {
        console.log(err);
        next();
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const updatedLocation = await Locations.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/locations/${req.params.id}`);
    } catch(err) {
        console.log(err);
        next();
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedItem = await Locations.findByIdAndDelete(req.params.id);
        res.redirect('/locations');
    } catch(err) {
        console.log(err);
        // next();
    }
})

module.exports = router;

