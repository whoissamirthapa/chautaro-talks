const express = require("express");
const router = express.Router();

const GroupTalkController = require("../controller/chautaro-group-talk-controller");

const auth = require("../middleware/auth");

router.post("/create", auth, GroupTalkController.createChautaroGroupTalkName);



module.exports = router;

