const { cinema_Scheama } = require("../modles");

//cinema

//add

const addcinema = (body) => {
  return cinema_Scheama.create(body);
};

//get valid
const getcinemaByName = (Cinema_name) => {
  return cinema_Scheama.findOne({ Cinema_name });
};
//get
const getAllcinemas = async (req, res) => {
  return cinema_Scheama.find();
};
//delete
const deletecinema = (id) => {
  return cinema_Scheama.findByIdAndDelete(id);
};
//update
const updatecinema = (id, body) => {
  return cinema_Scheama.findByIdAndUpdate(id, { $set: body });
};

module.exports = { addcinema, getcinemaByName, getAllcinemas, deletecinema, updatecinema };
