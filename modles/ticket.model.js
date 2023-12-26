const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({

  seatNumber: {
    type: String,
  },
  bookingDate: {
    type: Date,
    // default: Date.now,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
  },
  movie_list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "movielistSchema",
  },
  cinema_name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cinemaSchema",
  },

});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
