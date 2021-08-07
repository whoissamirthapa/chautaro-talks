const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.post("/sign-in", userController.signIn);

router.post("/sign-up", userController.signUp);



module.exports = router;

