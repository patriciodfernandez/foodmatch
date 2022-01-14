const User = require("../db/model/User");
 
const userModel = {
  getAllUser: async () => {
    return await User.findAll();
  },
  getCreateUser: async (user) => {
    let createUser = {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };
    return await User.create(createUser);
  },
  getUpdateUser: async (id, user) => {
    try {
      const datos = await this.getAllUser();
      const findId = datos.find((item) => item.id == id);
      const updateUser = await User.update(
        {
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
        },
        {
          where: { id: findId.id },
        }
      );
      return updateUser;
    } catch (error) {
      console.log("hubo un error " + error.message);
    }
  },
  getDeleteUser: async function (id) {
    try {
      const datos = await this.getAllUser();
      const findId = datos.find((item) => item.id == id);
      const deleteUser = await User.destroy({
        where: {
          id: findId.id,
        },
      });
      return deleteUser;
    } catch (error) {
      console.log("hubo un error " + error.message);
    }
  },
};
module.exports = userModel
