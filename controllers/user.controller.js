const { user_Services } = require("../services");


//add
const addUser = async (req, res) => {
  try {
    const body = req.body;

    const userExist = await user_Services.getUserByName(body.f_Name);

    if (userExist) {
      throw new Error("User already exists");
    }

    const user = await user_Services.addUser(body);

    if (!user) {
      throw new Error("Something went wrong");
    }

    res.status(201).json({
      message: "User Created successfully",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//get

const getUser = async (req, res) => {
  try {
    const users = await user_Services.getAllUsers(req, res);

    res.status(200).json({
      success: true,
      message: "Successfully fetched all users",
      data: { users },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//delete
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await user_Services.deleteUserById(id);

    if (!user) {
      throw new Error("Something went wrong");
    }

    res.status(200).json({
      message: "User deleted successfully",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//update
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const userExist = await user_Services.getUserByName(body.f_Name);

    if (userExist) {
      throw new Error("User already exists");
    }

    const user = await user_Services.updateUserById(id, body);

    res.status(200).json({
      message: "User updated successfully",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { addUser, getUser, deleteUser, updateUser };
