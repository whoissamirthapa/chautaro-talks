const express = require("express");
const router = express.Router();

const GroupTalkController = require("../controller/chautaro-group-talk-controller");

const auth = require("../middleware/auth");

router.post("/create", auth, GroupTalkController.createChautaroGroupTalkName);
router.get("/get", auth, GroupTalkController.getChautaroGroupTalkName);
router.post("/get/:id", auth, GroupTalkController.getChautaroGroupTalkMessage);
router.post("/create/msg/:id", auth, GroupTalkController.createGroupMsg);

module.exports = router;
