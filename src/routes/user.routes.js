const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.allUsers);
router.post("/register", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
