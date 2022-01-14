const  userModel  = require("../model/userModel");

// console.log(userModel)
const userController = {
  allUsers: async (req, res, next) => {
    try {
      const allUsers = await userModel.getAllUser();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(404).json("Not found " + error.mesaage);
    }
  },
  createUser: async (req, res, next) => {
    try {
      const user = req.body;
      const response = await userModel.getCreateUser(user);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json("Not found " + error);
    }
  },
  updateUser: async (req, res, next) => {
    try {
      const id = req.params.id;
      const user = req.body;
      const updateUser = await userModel.getUpdateUser(id, user);
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(400).json("Not found " + error);
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      const id = req.params.id;
      const deleteUser = await userModel.getDeleteUser(id);
      res.status(200).json(deleteUser);
    } catch (error) {
      res.status(400).json("Not found " + error);
    }
  },
};

module.exports = userController;
