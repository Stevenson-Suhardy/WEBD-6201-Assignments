const express = require("express");

const { homeView, planetView } = require("../controllers/userController.js");

const router = express.Router();

router.get('/', homeView);
router.get('/planets', planetView);

module.exports = router;