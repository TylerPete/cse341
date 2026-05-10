const express = require("express");
const router = express.Router();
const professionalController = require("../controllers/professionalController");

router.get("/", professionalController.getData);


module.exports = router;