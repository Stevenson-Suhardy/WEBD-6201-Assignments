const express = require("express");

const { homeView } = require("../controllers/userController.js");

const router = express.Router();

router.get('/', homeView);

module.exports = router;