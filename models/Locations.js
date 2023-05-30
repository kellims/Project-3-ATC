const mongoose = require('mongoose');

const locationsSchema = new mongoose.Schema (
    {
        place: {
            type: String,
            required: [true, "Must name the place"],
            unique: false
        },

        date: {
            type: String,
            required: false
        },
        
        img: {
            type: String,
            required: true
        }
    }
);

const Locations = mongoose.model('locations', locationsSchema);

module.exports = Locations;