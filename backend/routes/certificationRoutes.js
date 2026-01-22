const router = require("express").Router();
const controller = require("../controllers/certificationController");

router.get("/", controller.getCertifications);

module.exports = router;
