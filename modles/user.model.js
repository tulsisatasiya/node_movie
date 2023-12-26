const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    f_Name: {
        type: String,
    },
    l_Name: {
        type: String,
    },
    age: {
        type: Number,
    },
    phone_no: {
        type: String,
    },
    address: {
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        zipCode: {
            type: String,
        },
    }
});

const User = mongoose.model("userSchema", userSchema);

module.exports = User;
