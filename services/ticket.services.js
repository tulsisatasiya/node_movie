const { ticket_Scheama } = require("../modles");

//ticket

//add
const addTicket = (body) => {
  return ticket_Scheama.create(body);
};
//get valid
const getTicketBySeatNumber = (seatNumber) => {
  return ticket_Scheama.findOne({ seatNumber });
};
//get
const getAllTickets = async () => {
  return ticket_Scheama.find().populate('user').populate('movie_list').populate('cinema_name');
};
//delete
const deleteTicketById = (id) => {
  return ticket_Scheama.findByIdAndDelete(id);
};
//update
const updateTicketById = (id, body) => {
  return ticket_Scheama.findByIdAndUpdate(id, { $set: body });
};

module.exports = { addTicket, getTicketBySeatNumber, getAllTickets, deleteTicketById, updateTicketById };
