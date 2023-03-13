const { Router } = require("express");

const router = Router();

const TalkController = require("../controller/talkController");

router.post("/create/:id", TalkController.talkSecretChatCreate);
router.get("/getTalk/:id", TalkController.getSecretTalks);
router.post("/start/:id", TalkController.talkStart);
router.get("/get/:id", TalkController.getTalks);

module.exports = router;
