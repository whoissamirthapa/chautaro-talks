const { Router } = require("express");

const router = Router();

const TalkController = require("../controller/talkController");

// router.get("/getall", (req, res) => {
//     res.send("Get all talk");
// });
router.post("/start/:id", TalkController.talkStart);
router.get("/get/:id", TalkController.getTalks);

module.exports = router;
