const { movielist_Services } = require("../services");


// Add a new movielist

const addMovielist = async (req, res) => {
  try {
    const body = req.body;

    const Movielist = await movielist_Services.addMovielist(body);

    if (!Movielist) {
      throw new Error("Something went wrong");
    }

    res.status(201).json({
      message: "Movielist Created successfully",
      data: Movielist,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};


// Get all movielists

const getMovielist = async (req, res) => {
  try {
    const Movielist = await movielist_Services.getMovielist();

    res.status(200).json({
      success: true,
      message: "Successfully fetched all Movielist ",
      data: Movielist,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


//Delete a movielist 
const deleteMovielist = async (req, res) => {
  try {
    const id = req.params.id;

    const Movielist = await movielist_Services.deleteMovielist(id);

    if (!Movielist) {
      throw new Error("Something went wrong");
    }

    res.status(200).json({
      message: "Movielist deleted successfully",
      data: Movielist,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// update a movielist 

const updateMovielist = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const Movielist = await movielist_Services.updateMovielist(id, body);

    res.status(200).json({
      message: "Movielist updated successfully",
      data: Movielist,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { addMovielist, getMovielist, deleteMovielist, updateMovielist };
