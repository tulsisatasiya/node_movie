const { cinema_Services } = require("../services");

const addcinema = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const cinemaExist = await cinema_Services.getcinemaByName(body.Cinema_name);
    
    if (cinemaExist) {
      throw new Error("cinema already exist");
    }

    const cinema = await cinema_Services.addcinema(body);

    if (!cinema) {
      throw new Error("something went wrong");
    }

    res.status(201).json({
      message: "cinema Created success",
      data: cinema,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const getcinema = async (req, res) => {
    try {
         const cinema = await cinema_Services.getAllcinemas(req, res);

         res.status(200).json({
              success: true,
              message: "SuccessFully All cinema list Get.....",
              data: {
                cinema,

              }
         })
    } catch (error) {
         res.status(400).json({ success: false, message: error.message })
    }
}


const deletecinema = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const cinema = await cinema_Services.deletecinema (id);
    if (!cinema) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "cinema delete success",
      data: cinema,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const updatecinema = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    console.log(id, body);

    const cinemaExist = await cinema_Services.getcinemaByName(body.Cinema_name);

    if (cinemaExist) {
      throw new Error("cinema already existed");
    }

    const cinema = await cinema_Services.updatecinema(id, body);

    res.status(200).json({
      message: "cinema updated success",
      data: cinema,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = { addcinema, getcinema, deletecinema, updatecinema };
