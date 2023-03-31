const express = require("express");

const { homeView, formView, formSubmission } = require("../controllers/userController.js");

const router = express.Router();

router.get('/', homeView);
router.get("/form", formView);
router.post("/form", formSubmission);

module.exports = router;