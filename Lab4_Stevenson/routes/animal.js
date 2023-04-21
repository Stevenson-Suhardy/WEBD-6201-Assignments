const express = require("express");

const { homeView, entryFormView, getAllAnimals } = require("../controllers/animalController.js");

const router = express.Router();

router.get("/", homeView);
router.get("/animals/entry-form", entryFormView);
router.get("/animals/all-animals", getAllAnimals);

module.exports = router;