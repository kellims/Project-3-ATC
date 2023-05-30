const mongoose = require('mongoose');

const informationSchema = new mongoose.Schema (
    {
        type: {
            type: String,
            required: true,
            unique: false
        },

        link: {
            type: String,
            
        },

        notes: {
            type: String,
        },

        address: {
            type: String,
        },

        location: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'location',
            required: true
        }
    }
);

const Information = mongoose.model('information', informationSchema);

module.exports = Information;