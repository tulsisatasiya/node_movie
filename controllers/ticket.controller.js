const { movielist_Services, ticket_Services } = require("../services");


// Add a new movielist

const addTicket = async (req, res) => {
    try {
      const body = req.body;
  
      const ticketExist = await ticket_Services.getTicketBySeatNumber(body.seatNumber);
  
      if (ticketExist) {
        throw new Error("ticket already exists");
      }
  
      const ticket = await ticket_Services.addTicket(body);
  
      if (!ticket) {
        throw new Error("Something went wrong");
      }
  
      res.status(201).json({
        message: "ticket Created successfully",
        data: ticket,
      });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  };


// Get all movielists

const getTicket = async (req, res) => {
  try {
    const ticket = await ticket_Services.getAllTickets();

    res.status(200).json({
      success: true,
      message: "Successfully fetched all ticket ",
      data: ticket,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


//Delete a movielist 
const deleteTicket = async (req, res) => {
  try {
    const id = req.params.id;

    const  ticket= await ticket_Services.deleteTicketById(id);

    if (!ticket) {
      throw new Error("Something went wrong");
    }

    res.status(200).json({
      message: "ticket deleted successfully",
      data: ticket,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// update a movielist 

const updateticket = async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;
  
      const ticketExist = await ticket_Services.getTicketBySeatNumber(body.seatNumber);
  
      if (ticketExist) {
        throw new Error("ticket already exists");
      }
  
      const ticket = await ticket_Services.updateTicketById(id, body);
  
      res.status(200).json({
        message: "User updated successfully",
        data: ticket,
      });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  };
  

module.exports = { addTicket, getTicket, deleteTicket, updateticket };

