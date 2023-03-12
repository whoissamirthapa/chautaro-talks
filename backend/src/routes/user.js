const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");
const auth = require("../middleware/auth");

router.post("/sign-in", userController.signIn);

router.post("/sign-up", userController.signUp);

router.get("/all", auth, userController.getAllUsers);

module.exports = router;
