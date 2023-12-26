const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema({
    Cinema_name: {
        type: String,
    },
    location: {
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        country: {
            type: String,
        },
    },
    screens: [{
        name: {
            type: String,
        },
        showtimes: {
            type: [String] 
        }
    }],
});

const Cinema = mongoose.model("cinemaSchema", cinemaSchema);

module.exports = Cinema;
