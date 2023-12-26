const { movielist_Scheama } = require("../modles");


//add
const addMovielist = (body) => {
    // console.log(body);
    return movielist_Scheama.create(body);
};

//get
const getMovielist = () => {
    return movielist_Scheama.find().populate("movie_title").populate("cinema");
    
};


//delete
const deleteMovielist = (id) => {
    return movielist_Scheama.findByIdAndDelete(id);
  };

//update
const updateMovielist = (id, body) => {
    return movielist_Scheama.findByIdAndUpdate(id, { $set: body });
};
  

module.exports = { addMovielist, getMovielist, deleteMovielist ,updateMovielist};
