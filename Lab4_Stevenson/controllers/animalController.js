const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("../model/animal.js");
const Animal = mongoose.model("Animal");

const homeView = (req, res) => {
    const pageTitle = "Home Page";
    res.render("index", {
        pageTitle: pageTitle
    });
}

const entryFormView = (req, res) => {
    const pageTitle = "Add Animal Form";
    res.render("animals/entry-form", {
        pageTitle: pageTitle
    });
}

const getAllAnimals = (req, res) => {
    Animal.find().lean().then((animals) => {
        if (animals) {
            res.render('animals/all-animals', {
                pageTitle: "List of All Animals",
                animals: animals
            });
        };
    });
};

module.exports = {
    homeView,
    entryFormView,
    getAllAnimals,
}   