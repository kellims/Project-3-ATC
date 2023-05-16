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
        }
    }
);

const Locations = mongoose.model('location', locationsSchema);

module.exports = Locations;