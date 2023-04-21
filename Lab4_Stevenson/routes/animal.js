const express = require("express");

const { homeView, entryFormView, getAllAnimals, editAnimal, updateAnimal, deleteAnimal, formSubmission } = require("../controllers/animalController.js");

// Creating a new router
const router = express.Router();

// Assigning routes to the router
router.get("/", homeView);
router.get("/animals/entry-form", entryFormView);
router.get("/animals/all-animals", getAllAnimals);
router.post("/animals/entry-form", formSubmission);
router.get("/animals/edit-animal/:id", editAnimal);
router.post("/animals/edit-animal/:id", updateAnimal);

router.post("/animals/delete-animal/:id", deleteAnimal);

module.exports = router;