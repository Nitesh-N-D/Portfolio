const router = require("express").Router();
const controller = require("../controllers/experienceController");

router.get("/", controller.getExperience);

module.exports = router;
